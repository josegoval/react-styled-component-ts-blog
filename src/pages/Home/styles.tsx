import styled from "styled-components";
import { MainContainer } from "../../components/MainContainer";
import { H2 } from "../../components/Typography";

export const Container = styled(MainContainer)`
  margin-top: 40px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SectionTitle = styled(H2)`
  text-decoration: underline;
  margin-bottom: 20px;
`;

export const PostSection = styled.section``;
