import DeliveryFee from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import theme from "../../../themes/index";
import store from "../../store";
import { Provider } from "react-redux";

export default {
  title: "Components/Organisms/Delivery Fee",
  component: DeliveryFee,
} as ComponentMeta<typeof DeliveryFee>;

const Template: ComponentStory<typeof DeliveryFee> = (args) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <DeliveryFee />
    </ThemeProvider>
  </Provider>
);

export const Component = Template.bind({});
