import axios from "axios";
import { useEffect, useState } from "react";
import { Post } from "../types/post";

export default function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then(({ data }) => setPosts(data))
      .catch(alert);
  }, []);

  return { posts, setPosts };
}
