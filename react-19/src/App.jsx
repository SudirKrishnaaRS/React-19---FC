import { createContext, Suspense, useState } from "react";
import "./App.css";
import Posts from "./components/useAPI/apiFetch";
import PostsNew from "./components/useAPI/apiFetchNew";
import Parent from "./components/Ref/Parent";
import ParentComp from "./components/Context/ParentComp";

export const ThemeContext = createContext();

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const themeValues = { isDarkTheme, toggleTheme };

  return (
    <>
      {/* === use() API === */}

      {/* Traditonal Approach: */}
      {/* <Posts /> */}

      {/* ✨ New Approach */}
      {/* <Suspense fallback={"Loading data..."}>
        <PostsNew />
      </Suspense> */}

      {/* ________________________________________________________________ */}

      {/* === Context === */}

      {/* Traditonal Approach: */}
      {/* <ThemeContext.Provider value={themeValues}>
        <ParentComp />
      </ThemeContext.Provider> */}

      {/* ✨ New Approach */}
      <ThemeContext value={themeValues}>
        <ParentComp />
      </ThemeContext>

      {/* ________________________________________________________________ */}

      {/* === Ref === */}
      <Parent />

      {/* ________________________________________________________________ */}
    </>
  );
}

export default App;
