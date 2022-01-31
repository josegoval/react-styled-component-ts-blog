import styled from "styled-components";
import { H1, P } from "../../../components/Typography";

export const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageOverlayColor = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(120deg, #8537b3, #13b7e9);
  opacity: 0.7;
  position: absolute;
  bottom: 0;
`;

export const ArticleTitle = styled(H1)`
  position: absolute;
  width: auto;
  right: 0;
  margin: 40px;
  bottom: 0;
  color: white;
  text-transform: capitalize;
`;

export const Body = styled(P)`
  white-space: pre-wrap;
  word-break: normal;
`;
