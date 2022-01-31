import React from "react";
import { useParams } from "react-router-dom";
import usePost from "../../../hooks/usePost";
import usePostCommentaries from "../../../hooks/usePostCommentaries";
import FALLBACK_IMAGE_SRC from "../../../assets/blog-fallback-image.jpg";
import {
  ArticleTitle,
  Body,
  HeaderContainer,
  HeaderImage,
  ImageOverlayColor,
} from "./styles";
import { MainContainer } from "../../../components/MainContainer";
import { P } from "../../../components/Typography";
import { mockArticleBody } from "../../../utils/texts";
type Props = {};
type RouteParams = {
  postId: string;
};

export default function PostPage({}: Props) {
  const { postId = 0 } = useParams<RouteParams>();
  const { post } = usePost(+postId);
  const { postCommentaries } = usePostCommentaries(+postId);

  return (
    <article>
      <HeaderContainer>
        <HeaderImage src={post?.image || FALLBACK_IMAGE_SRC} />
        <ImageOverlayColor />
        <ArticleTitle>{post?.title}</ArticleTitle>
      </HeaderContainer>
      <MainContainer>
        <Body>{mockArticleBody(post?.body)}</Body>
      </MainContainer>
      {/* title */}
      {/* body */}
      {/* commentaries */}
      {/* list */}
    </article>
  );
}
