import styled, { css } from "styled-components";
import { AvatarProps } from ".";

export const AvatarImage = styled.img<Required<AvatarProps>>`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 100%;

  ${({ size }) =>
    size === "big" &&
    css`
      width: 300px;
      height: 300px;
    `}
`;
