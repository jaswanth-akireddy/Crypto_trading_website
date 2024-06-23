import ButtonComponent from "./index";
import { ComponentStory } from "@storybook/react";
import theme from "../../../../src/themes/index";
import { ThemeProvider } from "@emotion/react";

interface Props {
  label: string;
  textColor: string;
}

export default {
  title: "Components/Atoms/button",
  component: ButtonComponent,
};
const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ThemeProvider theme={theme}>
    <ButtonComponent {...args} />
  </ThemeProvider>
);

export const login = Template.bind({});
login.args = {
  textColor: "white",
  variant: "contained",
  size: "large",
  children: "Sign In",
};

export const buy = Template.bind({});
buy.args = {
  textColor: "white",
  variant: "contained",
  children: "BUY",
};
export const sell = Template.bind({});
sell.args = {
  textColor: "white",
  variant: "contained",
  children: "SELL",
  sx: { backgroundColor: theme.palette.warning[500] },
};

export const needHelp = Template.bind({});
needHelp.args = {
  textColor: "blue",
  variant: "outlined",
  children: "Need Help",
};
