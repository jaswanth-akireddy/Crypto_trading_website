import TradeScreen from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Pages/TradeScreen",
  component: TradeScreen,
} as ComponentMeta<typeof TradeScreen>;

const Template: ComponentStory<typeof TradeScreen> = () => <TradeScreen />;
export const TradeScreenPage = Template.bind({});
