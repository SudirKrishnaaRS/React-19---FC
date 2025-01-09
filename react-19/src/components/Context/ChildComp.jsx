import React, { useContext, use } from "react";
import { ThemeContext } from "../../App";

const ChildComp = () => {
  // const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  // ✨ New Approach
  const { isDarkTheme, toggleTheme } = use(ThemeContext);

  const themeStyles = {
    backgroundColor: isDarkTheme ? "#333" : "#FFF",
    color: isDarkTheme ? "#FFF" : "#000",
    padding: "20px",
    textAlign: "center",
    transition: "background-color 0.3s, color 0.3s",
  };

  return (
    <>
      <h3>Context API Example</h3>

      <div style={themeStyles}>
        <h1>{isDarkTheme ? "Dark Theme" : "Light Theme"}</h1>
        <button onClick={toggleTheme}>
          Switch to {isDarkTheme ? "Light" : "Dark"} Theme
        </button>
      </div>
    </>
  );
};

export default ChildComp;
