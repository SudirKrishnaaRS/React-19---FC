import { Suspense } from "react";
import "./App.css";
import Posts from "./components/apiFetch";
import PostsNew from "./components/apiFetchNew";

function App() {
  return (
    <>
      {/* === use() API === */}

      {/* Traditonal Approach: */}
      {/* <Posts /> */}

      {/* New Approach: */}
      <Suspense fallback={"Loading data..."}>
        <PostsNew />
      </Suspense>
    </>
  );
}

export default App;
