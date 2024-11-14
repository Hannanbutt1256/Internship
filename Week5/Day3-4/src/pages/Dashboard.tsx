import { Post } from "../types/userPost";
import React, { useEffect, useState } from "react";

const DataFetchingComponent: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Delay the fetch by 2 seconds
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data: Post[] = await response.json();
        setPosts(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-lightBeige">
        <p className="font-geist-sans text-4xl text-gray-700 animate-pulse">
          Loading...
        </p>
      </div>
    );
  }
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-black text-lightBeige font-geist-sans mx-5 py-7 px-7 mt-5">
      <h1 className="text-3xl font-bold mb-5">Posts</h1>

      {posts.map((post) => (
        <div
          key={post.id}
          className="border-2 border-gray-200 rounded-lg shadow-lg p-6 mb-5 bg-charcoal hover:shadow-xl transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
          <p className="text-base text-lightBeige">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default DataFetchingComponent;
