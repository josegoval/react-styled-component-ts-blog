import React from "react";
import usePosts from "../../../hooks/usePosts";
import PostCard from "../PostCard";
import { Container } from "./styles";

type Props = {};

export default function UncontrolledPostList({}: Props) {
  const { posts } = usePosts();

  return (
    <Container>
      {posts?.map((post) => (
        <PostCard post={post} />
      ))}
    </Container>
  );
}
