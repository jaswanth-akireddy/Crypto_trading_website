import OrderSummary from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import theme from "../../../themes/index";
import store from "../../store";
import { Provider } from "react-redux";

export default {
  title: "Components/Organisms/OrderSummary",
  component: OrderSummary,
} as ComponentMeta<typeof OrderSummary>;

const Template: ComponentStory<typeof OrderSummary> = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <OrderSummary />
    </ThemeProvider>
  </Provider>
);
export const Component = Template.bind({});
