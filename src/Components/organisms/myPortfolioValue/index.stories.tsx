import React from "react";
import { Story, Meta } from "@storybook/react";
import PortfolioValueSection, { portfolioValueSectionConstants } from "./index";

export default {
  title: "Components/Organisms/PortfolioValueSection",
  component: PortfolioValueSection,
} as Meta;

const Template: Story = (args) => <PortfolioValueSection {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithData = Template.bind({});
WithData.args = {
  portfolioValueSectionConstants: {
    ...portfolioValueSectionConstants,
    values: ["$0.00", "Value2"],
    changePercentages: ["+0.0%", "+8.2%"],
    data: [
      { x: 1, y: 100 },
      { x: 2, y: 200 },
      { x: 3, y: 300 },
    ],
  },
};
