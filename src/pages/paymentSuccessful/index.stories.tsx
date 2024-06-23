import { Story } from "@storybook/react";
import PaymentSuccessfulScreen, { PaymentSuccessfulScreenProps } from ".";

export default {
  title: "Pages/PaymentSuccessfulScreen",
  component: PaymentSuccessfulScreen,
};

const Template: Story<PaymentSuccessfulScreenProps> = (args) => (
  <PaymentSuccessfulScreen {...args} />
);

export const BuySuccess = Template.bind({});
BuySuccess.args = {
  successType: "buy",
  price: "0.0234510 BTC",
};

export const SellSuccess = Template.bind({});
SellSuccess.args = {
  successType: "sell",
  price: "0.0234510 BTC",
};
