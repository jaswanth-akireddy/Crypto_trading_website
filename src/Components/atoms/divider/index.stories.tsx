import Divider from "./index";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Components/Atoms/Divider",
  component: Divider,
};

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

export const FullWidth = Template.bind({});
FullWidth.args = {
  orientation: "horizontal",
  variant: "fullWidth",
};

export const Inset = Template.bind({});
Inset.args = {
  variant: "inset",
  orientation: "horizontal",
};

export const Middle = Template.bind({});
Middle.args = {
  variant: "middle",
  orientation: "horizontal",
};

export const Dashed = Template.bind({});
Dashed.args = {
  variant: "middle",
  orientation: "horizontal",
  sx: { borderStyle: "dashed" },
};
