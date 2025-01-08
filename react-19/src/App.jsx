import { Suspense } from "react";
import "./App.css";
import Posts from "./components/useAPI/apiFetch";
import PostsNew from "./components/useAPI/apiFetchNew";
import Parent from "./components/Ref/Parent";

function App() {
  return (
    <>
      {/* === use() API === */}

      {/* Traditonal Approach: */}
      {/* <Posts /> */}

      {/* New Approach: */}
      {/* <Suspense fallback={"Loading data..."}>
        <PostsNew />
      </Suspense> */}

      {/* === Ref === */}
      <Parent />
    </>
  );
}

export default App;
