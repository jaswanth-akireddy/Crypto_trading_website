import "../../../App.css";
import Typography from "./index";
import theme from "../../../../src/themes/index";
import { TypographyProps, ThemeProvider } from "@mui/material";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Components/Atoms/Typography",
  component: Typography,
};

const Template: ComponentStory<typeof Typography> = (args: TypographyProps) => (
  <ThemeProvider theme={theme}>
    <Typography {...args} />
  </ThemeProvider>
);
export const Heading4 = Template.bind({});
Heading4.args = {
  variant: "h4",
  children: "Heading 4",
  sx: { color: theme.palette.textColor.high },
};
export const Heading6 = Template.bind({});
Heading6.args = {
  variant: "h6",
  children: "Heading 6",
  sx: { color: theme.palette.textColor.high },
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  variant: "subtitle1",
  children: "Subtitle 1",
  sx: { color: theme.palette.textColor.high },
};

export const Subtitle2 = Template.bind({});
Subtitle2.args = {
  variant: "subtitle2",
  children: "Subtitle 2",
  sx: { color: theme.palette.textColor.high },
};

export const Body1 = Template.bind({});
Body1.args = {
  variant: "body1",
  children: "Body 1",
  sx: { color: theme.palette.textColor.high },
};

export const Body2 = Template.bind({});
Body2.args = {
  variant: "body2",
  children: "Body 2",
  sx: { color: theme.palette.textColor.high },
};

export const Button = Template.bind({});
Button.args = {
  variant: "button",
  children: "Button",
  sx: { color: theme.palette.textColor.high },
};

export const Caption1 = Template.bind({});
Caption1.args = {
  variant: "caption1",
  children: "Caption 1",
  sx: { color: theme.palette.textColor.high },
};

export const Caption2 = Template.bind({});
Caption2.args = {
  variant: "caption2",
  children: "Caption 2",
  sx: { color: theme.palette.textColor.high },
};

export const Overline = Template.bind({});
Overline.args = {
  variant: "overline",
  children: "Overline",
  sx: { color: theme.palette.textColor.high },
};
