import { useRef } from "react";
import CustomInput from "./CustomInput";

const Parent = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleClear = () => {
    inputRef.current.value = "";
  };

  return (
    <div>
      <CustomInput ref={inputRef} placeholder={"enter your email"} />
      <button onClick={handleFocus}>Focus</button>{" "}
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default Parent;
