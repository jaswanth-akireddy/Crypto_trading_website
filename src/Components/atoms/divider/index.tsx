import React from "react";
import { DividerProps, Divider as MuiDivider } from "@mui/material";

const Divider = (props: DividerProps) => {
  return (
    <>
      <MuiDivider {...props} />
    </>
  );
};

export default Divider;
