import React from "react";
import Avatar from "../../components/Avatar";
import PostCard from "../../components/Posts/PostCard";
import UncontrolledPostList from "../../components/Posts/UncontrolledPostList";
import { H1, H2, Subtitle } from "../../components/Typography";
import usePosts from "../../hooks/usePosts";
import { Container, Header, PostSection, SectionTitle } from "./styles";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <Container>
      <Header>
        <Avatar size="big" />
        <H1>Jose's Blog</H1>
        <Subtitle>
          A simple react blog using styled-components and typescript.
        </Subtitle>
      </Header>
      <PostSection>
        <SectionTitle>Latest posts</SectionTitle>
        <UncontrolledPostList />
      </PostSection>
    </Container>
  );
}
