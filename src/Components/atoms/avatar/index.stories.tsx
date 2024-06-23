import AvatarIcon from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar_image from "../../../assets/icons/avatar_image.svg";
import currency_avatar from "../../../assets/icons/currency_avatar.svg";
export default {
  title: "Components/Atoms/Avatar",
  component: AvatarIcon,
} as ComponentMeta<typeof AvatarIcon>;

const Template: ComponentStory<typeof AvatarIcon> = (args) => (
  <AvatarIcon {...args} />
);

export const userAvatar = Template.bind({});
userAvatar.args = {
  imgSrc: Avatar_image,
  imgAlt: "User Avatar",
  imgStyle: { width: "32px", height: "32px" },
};

export const currencyAvatar = Template.bind({});
currencyAvatar.args = {
  imgSrc: currency_avatar,
  imgAlt: "Currency Avatar",
  imgStyle: { width: "42px", height: "42px" },
};
