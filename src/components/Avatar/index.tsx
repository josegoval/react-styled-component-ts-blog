import React from "react";
import AVATAR_IMAGE_SRC from "../../assets/avatar.jpg";
import { AvatarImage } from "./styles";

export type AvatarProps = {
  size?: "small" | "big";
};

export default function Avatar({ size = "small" }: AvatarProps) {
  return (
    <AvatarImage
      src={AVATAR_IMAGE_SRC}
      alt="José Manuel Gómez Martínez avatar"
      size={size}
    />
  );
}
