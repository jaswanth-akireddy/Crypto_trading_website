import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import React from "react";
import Typography from "../../atoms/typography";

interface MuiDropDownProps {
  sx?: object;
  content: string;
  options?: { value: string}[] ;
}

export const MuiDropDown: React.FC<MuiDropDownProps> = ({
  sx,
  content,
  options,
}) => {
  return (
    <FormControl size="small" sx={sx}>
      <InputLabel data-testid="dropdown-label">{content}</InputLabel>
      <Select
        data-testid="dropdown-select"
        label={<Typography variant="body1">{content}</Typography>}
      >
        {options?.map((option) => (
          <MenuItem data-testid="dropdown-option" key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        )) || []}
      </Select>
    </FormControl>
  );
};


