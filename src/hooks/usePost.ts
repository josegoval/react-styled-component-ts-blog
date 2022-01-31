import axios from "axios";
import { useEffect, useState } from "react";
import { Post } from "../types/post";

export default function usePost(postId: number) {
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    axios
      .get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(({ data }) => setPost(data))
      .catch(alert);
  }, [postId]);

  return { post, setPost };
}
