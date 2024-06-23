import React from "react";
import Avatar from "@mui/material/Avatar";
export interface AvatarProps {
  imgSrc: string;
  imgAlt: string;
  imgStyle?: React.CSSProperties;
}

const AvatarIcon: React.FC<AvatarProps> = ({ imgAlt, imgSrc, imgStyle }) => {
  return <Avatar src={imgSrc} alt={imgAlt} style={imgStyle} />;
};

export default AvatarIcon;
