import React, { useState } from "react";
import { Paper, Stack } from "@mui/material";
import Typography from "../../atoms/typography/index";
import theme from "../../../themes/index";
export interface PortfolioTimeBarProps {
  options: string[];
}
const PortfolioTimeBar = ({ options }: PortfolioTimeBarProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(
    options[2]
  );
  const handleOptionClick = (option: string) => {
    setSelectedOption(option === selectedOption ? null : option);
  };
  const onClickSx = {
    width: "21px",
    height: "32px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: `1px solid ${theme.palette.primary["500"]}}`,
    backgroundColor: `${theme.palette.primary["300"]}}}`,
    borderRadius: "0px!important",
    cursor: "pointer",
  };
  const defaultSx = {
    width: "21px",
    height: "32px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0px",
    cursor: "pointer",
  };
  return (
    <>
      <Paper
        sx={{
          borderRadius: "4px",
          padding: "8px",
          border: `1px solid ${theme.palette.grey["100"]}}`,
        }}
        elevation={0}
      >
        <Stack direction="row" gap="20px">
          {options.map((option) => (
            <Stack
              key={option}
              sx={selectedOption === option ? onClickSx : defaultSx}
            >
              <Typography
                key={option}
                sx={{
                  cursor: "pointer",
                  color:
                    selectedOption === option
                      ? theme.palette.primary["500"]
                      : theme.palette.textColor["medium"],
                }}
                variant="caption2"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Paper>
    </>
  );
};
export default PortfolioTimeBar;