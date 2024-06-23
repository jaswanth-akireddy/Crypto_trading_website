import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Star from "./index";

export default {
  title: "Components/Atoms/StarCheckBox",
  component: Star,
} as ComponentMeta<typeof Star>;

const Template: ComponentStory<typeof Star> = (args) => <Star {...args} />;

export const StarCheckBox = Template.bind({});
StarCheckBox.args = {};
