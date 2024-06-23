import MyPortfolio from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/Organisms/My Portfolio",
  component: MyPortfolio,
} as ComponentMeta<typeof MyPortfolio>;

const Template: ComponentStory<typeof MyPortfolio> = (args) => (
  <MyPortfolio {...args} />
);

export const Initial = Template.bind({});
Initial.args = {
  currencyValue: "$ 0.00",
  profitOrLoss: "+0.00%",
  totalBalance: "$ 0.00",
};

export const Updated = Template.bind({});
Updated.args = {
  currencyValue: "$34,000.00",
  profitOrLoss: "+1.06%",
  totalBalance: "$34,000.00",
};
