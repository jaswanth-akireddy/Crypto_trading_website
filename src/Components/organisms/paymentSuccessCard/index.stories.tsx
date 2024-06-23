import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import PaymentSuccessCard, { PaymentSuccessCardProps } from "./index";

export default {
  title: "Components/Organisms/PaymentSuccessCard",
  component: PaymentSuccessCard,
} as Meta;

const Template: Story<PaymentSuccessCardProps> = (args) => (
  <PaymentSuccessCard {...args} />
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
