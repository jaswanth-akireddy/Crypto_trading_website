import CryptoCurrency from ".";
import { ThemeProvider } from "@mui/material";
import theme from "../../../themes/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/Organisms/CryptoCurrency",
  component: CryptoCurrency,
} as ComponentMeta<typeof CryptoCurrency>;

const Template: ComponentStory<typeof CryptoCurrency> = (args) => (
  <ThemeProvider theme={theme}>
    <CryptoCurrency />
  </ThemeProvider>
);

export const Component = Template.bind({});
