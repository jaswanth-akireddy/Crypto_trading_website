import { ComponentStory, ComponentMeta } from "@storybook/react";
import EmptyStateWatchListSection from ".";

export default {
  component: EmptyStateWatchListSection,
  title: "Components/Organisms/EmptyStateWatchListSection",
} as ComponentMeta<typeof EmptyStateWatchListSection>;

const Template: ComponentStory<typeof EmptyStateWatchListSection> = () => (
  <EmptyStateWatchListSection />
);

export const Default = Template.bind({});
