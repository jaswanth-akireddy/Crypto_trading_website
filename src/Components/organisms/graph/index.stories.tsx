import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Graph, { GraphProps } from ".";

const testData = [
    { date: "JUN 8", coinValue: 1000 },
    { date: "JUN 15", coinValue: 3000 },
    { date: "JUN 22", coinValue: 2000 },
];

export default {
  title: "Components/Organisms/Graph",
  component: Graph,
  argTypes: {
    height: { control: "number" },
    width: { control: "number" },
  },
} as Meta;

const Template: Story<GraphProps> = (args) => <Graph {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: testData,
  height: 300,
  width: 500,
};