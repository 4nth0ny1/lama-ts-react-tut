import PostCard from "./PostCard";
import type { Post } from "../types/types";
import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      <h2>PostList Component</h2>
      <div className="flex flex-row flex-wrap gap-4 p-10">
        {posts?.map((post: Post) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}
