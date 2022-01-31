import axios from "axios";
import { useEffect, useState } from "react";
import { PostCommentaries } from "../types/postCommentaries";

export default function usePostCommentaries(postId: number) {
  const [postCommentaries, setPostCommentaries] = useState<PostCommentaries[]>(
    []
  );

  useEffect(() => {
    axios
      .get<PostCommentaries[]>(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      )
      .then(({ data }) => setPostCommentaries(data))
      .catch(alert);
  }, [postId]);

  return { postCommentaries, setPostCommentaries };
}
