import styled from "styled-components";
import { H1 } from "../../Typography";

export const Container = styled.article`
  width: 350px;
  height: 350px;
  border-radius: 7px;
  box-shadow: 10px 10px 40px ${({ theme: { colors } }) => colors.text};

  :hover {
    box-shadow: 3px 2px 20px ${({ theme: { colors } }) => colors.text};
  }
`;

export const Content = styled.div`
  padding: 7px;
`;

export const Title = styled(H1)`
  font-size: 1.4rem;
  margin: 0;
  padding: 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;
