import { useEffect, useState } from "react";
import Card from "../misc/Card/Card";

const url = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error("Error fetching data:", err);
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (hasError) {
    return <div>Error loading the data</div>;
  }

  return (
    <div>
      {data?.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Posts;
