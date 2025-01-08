import { useRef } from "react";
import Child from "./Child";

const Parent = () => {
  const inputRef = useRef(null);

  const handleFocus = () => inputRef.current.focus();
  const handleClear = () => inputRef.current.clear();

  return (
    <div>
      <Child ref={inputRef} name={"React 19"} />
      <button onClick={handleFocus}>Focus</button>{" "}
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default Parent;
