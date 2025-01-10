import { createContext, Suspense, useState } from "react";
import "./App.css";
import Posts from "./components/useAPI/apiFetch";
import PostsNew from "./components/useAPI/apiFetchNew";
import Parent from "./components/Ref/Parent";
import ParentComp from "./components/Context/ParentComp";
import Login from "./components/Forms/login";
import LoginNew from "./components/Forms/LoginNew";
import LoginTwo from "./components/Forms/LoginTwo";
import Task from "./components/useOptimistic/Task";
import TaskNew from "./components/useOptimistic/TaskNew";
import SuspenseDemo from "./components/Suspense/SuspenseDemo";

export const ThemeContext = createContext();

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const themeValues = { isDarkTheme, toggleTheme };

  return (
    <>
      {/* useOptimistic() Hook */}
      {/* <Task /> */}
      {/* <TaskNew /> */}

      {/* ________________________________________________________________ */}

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
      {/* <ThemeContext value={themeValues}>
        <ParentComp />
      </ThemeContext> */}

      {/* ________________________________________________________________ */}

      {/* === Ref === */}
      {/* <Parent /> */}

      {/* ________________________________________________________________ */}
      {/* ________________________________________________________________ */}

      {/* === Forms === */}
      {/* <Login /> */}
      {/* <LoginTwo /> */}

      {/* ✨ New Approach */}
      {/* <LoginNew /> */}

      {/* ________________________________________________________________ */}
      {/* <SuspenseDemo /> */}
    </>
  );
}

export default App;
