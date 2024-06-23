import React from "react";
import { Box } from "@mui/material";

type ImageProps = {
  imgSrc?: string;
  imgAlt?: string;
  imgStyle?: React.CSSProperties;
  onClick?: () => void;
};


export const Image: React.FC<ImageProps> = ({ imgSrc, imgAlt, imgStyle,onClick }) => {
  return (
    <Box component="img" src={imgSrc} alt={imgAlt} style={imgStyle} onClick={onClick} />
  );
};