import { Story, Meta } from "@storybook/react";
import PortfolioTimeBar, { PortfolioTimeBarProps } from "./index";

export default {
  title: "Components/Molecules/PortfolioTimeBar",
  component: PortfolioTimeBar,
} as Meta;

const Template: Story<PortfolioTimeBarProps> = (args) => (
  <PortfolioTimeBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: ["1D", "1W", "1M", "3M", "6M", "1Y", "All"],
};
