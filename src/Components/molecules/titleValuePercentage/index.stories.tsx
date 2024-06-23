import React from "react";
import { Story, Meta } from "@storybook/react";
import TitleValuePercentage, { TitleValuePercentageProps } from "./index";

export default {
  title: "Components/Molecules/TitleValuePercentage",
  component: TitleValuePercentage,
} as Meta;

const Template: Story<TitleValuePercentageProps> = (args) => (
  <TitleValuePercentage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Total Investement",
  value: "$0.00",
  changePercentage: "+0.00%",
};
