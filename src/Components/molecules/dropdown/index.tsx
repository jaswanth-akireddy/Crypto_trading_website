import React, { useRef, useState } from "react";
import { Paper, PaperProps, Stack, Menu, MenuItem } from "@mui/material";

import Typography from "../../atoms/typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
export interface DropDownProps {
  options: string[];
  paperProps?: PaperProps;
}
const DropDown = ({ options, paperProps }: DropDownProps) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const anchorRef = useRef(null);
  const handleClick = () => {
    setAnchorEl(true);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };
  const handleMenuItemClick = (index: number) => {
    setSelectedIndex(index);
    handleClose();
  };
  return (
    <Paper {...paperProps}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "100%" }}
        ref={anchorRef}
      >
        <Typography>{options[selectedIndex]}</Typography>
        {anchorEl ? (
          <ExpandLessIcon onClick={handleClick} />
        ) : (
          <ExpandMoreIcon onClick={handleClick} />
        )}
      </Stack>
      <Menu
        id="menu-list-grow"
        anchorEl={anchorRef.current}
        keepMounted
        open={anchorEl}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: "16ch",
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={() => handleMenuItemClick(index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Paper>
  );
};
export default DropDown;
