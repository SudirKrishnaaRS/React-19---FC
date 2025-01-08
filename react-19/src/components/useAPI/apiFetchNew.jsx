import { use } from "react";
import Card from "../misc/Card/Card";

const url = "https://jsonplaceholder.typicode.com/posts";

// fetchPosts() returns a Promise
async function fetchPosts() {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
}

const PostsNew = () => {
  const data = use(fetchPosts());

  return (
    <div>
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};

export default PostsNew;
