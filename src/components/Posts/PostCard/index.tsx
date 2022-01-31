import React from "react";
import { Post } from "../../../types/post";
import { Container, Content, Image, Title } from "./styles";
import { P } from "../../Typography";
import { ellipsize } from "../../../utils/texts";
import FALLBACK_IMAGE_SRC from "../../../assets/blog-fallback-image.jpg";
import { Link } from "react-router-dom";
type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <Link to={`posts/${post.id}`}>
      <Container>
        <Image
          src={post.image || FALLBACK_IMAGE_SRC}
          alt={`${post.title} heading image`}
        />
        <Content>
          <Title>{post.title}</Title>
          <P>{ellipsize(post.body, 100)}</P>
        </Content>
      </Container>
    </Link>
  );
}
