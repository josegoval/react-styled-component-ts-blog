import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  padding: 0;
  margin: 10px;
  color: ${({ theme: { colors } }) => colors.text};
`;

export const H2 = styled.h1`
  font-size: 2.2rem;
  font-weight: 500;
  padding: 0;
  margin: 10px;
  color: ${({ theme: { colors } }) => colors.text};
`;

export const Subtitle = styled.p`
  font-size: 2rem;
  font-weight: 400;
  font-style: italic;
  padding: 0 10px;
  margin: 5px;
  color: ${({ theme: { colors } }) => colors.text};
`;

export const P = styled.p`
  font-size: 1rem;
  font-weight: normal;
  color: ${({ theme: { colors } }) => colors.text};
`;

export const Link = styled.a`
  font-weight: normal;
  color: ${({ theme: { colors } }) => colors.link};

  :hover {
    text-decoration: underline;
  }
`;
