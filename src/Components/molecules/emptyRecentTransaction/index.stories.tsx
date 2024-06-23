import { ComponentStory, ComponentMeta } from "@storybook/react";
import EmptyRecentTransaction from "./index";

export default {
  title: "Components/Molecules/EmptyRecentTrancation",
  component: EmptyRecentTransaction,
} as ComponentMeta<typeof EmptyRecentTransaction>;

const Template: ComponentStory<typeof EmptyRecentTransaction> = () => (
  <EmptyRecentTransaction />
);

export const EmptyTransaction = Template.bind({});
EmptyTransaction.args = {};
