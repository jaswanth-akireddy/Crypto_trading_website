import React from "react";
import Typography from "../../atoms/typography";
import { Stack, styled } from "@mui/material";
import DropDown from "../dropdown";
import theme from "../../../themes";
import Button from "../../atoms/button";

const StyledButton = styled(Button)(() => ({
  color: `${theme.palette.primary[500]}`,
  width: "120px",
  height: "42px",
  padding: "0px 16px",
  borderRadius: "4px",
  border: `2px solid ${theme.palette.primary[500]}`,
}));
const StyledStack = styled(Stack)(() => ({
  borderTop: `1px solid ${theme.palette.grey["100"]}`,
  padding: "20px 8px",
  backgroundColor: "transparent",
}));

const StyledTypographyBlue = styled(Typography)({
  color: theme.palette.primary[500],
});
const StyledTypographyBlack = styled(Typography)({
  color: theme.palette.textColor.high,
});

const Footer = () => {
  return (
    <>
      <StyledStack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack direction="row" gap="24px" alignItems="center">
          <Stack direction="row" spacing={3}>
            <StyledTypographyBlue variant="body2" children={"Dashboard"} />
            <StyledTypographyBlue variant="body2" children={"Careers"} />
            <StyledTypographyBlue
              variant="body2"
              children={"Legal & Privacy"}
            />
            <StyledTypographyBlack variant="body2" children={"© 2024 Minet"} />
          </Stack>
        </Stack>
        <Stack direction="row" gap="16px" alignItems="center">
          <DropDown
            options={["ENGLISH", "HINDI", "TELUGU"]}
            paperProps={{
              sx: {
                width: "170px",
                border: `1px solid ${theme.palette.grey["100"]}`,
                padding: "8px 12px",
              },
              elevation: 0,
            }}
          />
          <StyledButton label="NEED HELP">
            {"footerDefaults.buttonText"}
          </StyledButton>
        </Stack>
      </StyledStack>
    </>
  );
};
export default Footer;
