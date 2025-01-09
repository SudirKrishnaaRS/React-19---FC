import React, { useActionState } from "react";
import { loginUser } from "../../api/user";

const LoginNew = () => {
  //   const [user, setUser] = useState(null);
  //   const [error, setError] = useState(null);
  //   const [isPending, setIsPending] = useState(false);

  //   SYNTAX:
  // const [state, formAction, isPending] = useActionState(formSubmissionFn, initialState);
  const [user, submitAction, isPending] = useActionState(handleSubmit, {
    data: null,
    error: null,
  });

  async function handleSubmit(prevState, formData) {
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const response = await loginUser(username, password);
      console.log(response.data);
      return { data: response.data, error: null };
    } catch (err) {
      return { data: null, error: err.error };
    }
  }

  return (
    <form action={submitAction}>
      <div>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" name="username" required />
      </div>

      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" required />
      </div>

      <button type="submit" disabled={isPending}>
        {isPending ? "Logging in..." : "Login"}
      </button>

      {user?.data && (
        <p style={{ color: "green" }}>Logged in: {user.data.email}</p>
      )}
      {user?.error && <p style={{ color: "red" }}>Error Log: {user.error}</p>}
    </form>
  );
};

export default LoginNew;
