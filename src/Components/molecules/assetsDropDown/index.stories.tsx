import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MuiDropDown } from ".";

export default {
  title: "Components/Molecule/MuiDropDown",
  component: MuiDropDown,
} as ComponentMeta<typeof MuiDropDown>;

const Template: ComponentStory<typeof MuiDropDown> = (args) => <MuiDropDown {...args} />;


export const Time = Template.bind({});
Time.args = {
  content:"time",
  sx:{width: 78, height: 40,},
  options: [ { value: "24h"},{ value: "12h"}, { value: "1h"}]
};

export const AllAssets = Template.bind({});
AllAssets.args = {
  content:"All assets",
  sx:{width: 122, height: 40,},
  options: [ { value: "24h"},{ value: "12h"}, { value: "1h"}]
};