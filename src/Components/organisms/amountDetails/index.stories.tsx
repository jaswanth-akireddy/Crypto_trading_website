import AmountDetails from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import theme from "../../../themes";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import store from "../../store";

export default {
  title: "Components/Organisms/AmountDetails",
  component: AmountDetails,
} as ComponentMeta<typeof AmountDetails>;

const Template: ComponentStory<typeof AmountDetails> = (args) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AmountDetails />
    </ThemeProvider>
  </Provider>
);

export const Initial = Template.bind({});
