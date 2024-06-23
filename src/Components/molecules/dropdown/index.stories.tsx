import { Story } from "@storybook/react/types-6-0";
import { PaperProps } from "@mui/material";
import DropDown, { DropDownProps } from "./";

export default {
  title: "Components/DropDown",
  component: DropDown,
  argTypes: {
    options: {
      control: { type: "array" },
      defaultValue: ["Option 1", "Option 2", "Option 3"],
    },
    PaperProps: {
      control: { type: "object" },
      defaultValue: { elevation: 2 },
    },
  },
};

const Template: Story<DropDownProps> = (args) => <DropDown {...args} />;

export const Default = Template.bind({});
Default.args = {};
