import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return <button type="submit">{pending ? "Logging in..." : "Login"}</button>;
};

export default SubmitButton;
