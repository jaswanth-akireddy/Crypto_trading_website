import React from "react";
import { Story, Meta } from "@storybook/react";
import ApplicationHeader, { HeaderProps } from "./index";

import Avatar_image from "../../../assets/icons/avatar_image.svg";
export default {
  title: "Components/Organisms/ApplicationHeader",
  component: ApplicationHeader,
} as Meta;

const Template: Story<HeaderProps> = (args) => <ApplicationHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Dashboard",
  imgSrc: Avatar_image,
};
