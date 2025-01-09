import React, { useState } from "react";
import { loginUser } from "../../api/user";

const LoginTwo = () => {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  const handleSubmit = async (formData) => {
    setIsPending(true);
    setUser(null);
    setError(null);

    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const response = await loginUser(username, password);
      setUser(response.data);
    } catch (error) {
      setError(error.error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    <form action={handleSubmit}>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          //   value={username}
          //   onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          //   value={password}
          //   onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" disabled={isPending}>
        {isPending ? "Logging in..." : "Login"}
      </button>

      {user && <p style={{ color: "green" }}>Logged in: {user.email}</p>}
      {error && <p style={{ color: "red" }}>Error Log: {error}</p>}
    </form>
  );
};

export default LoginTwo;
