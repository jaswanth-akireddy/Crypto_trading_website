import React from "react";
import { Story, Meta } from "@storybook/react";
import DashBoard from "./index";

export default {
  title: "Pages/Dashboard",
  component: DashBoard,
} as Meta;

const Template: Story = (args) => <DashBoard {...args} />;

export const Default = Template.bind({});
Default.args = {};
