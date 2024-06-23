import { PaymentMethod } from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/Organisms/PaymentMethod",
  component: PaymentMethod,
} as ComponentMeta<typeof PaymentMethod>;


const Template: ComponentStory<typeof PaymentMethod> = () => <PaymentMethod subTitle="Payment Method" isActive={false}/>
export const paymethod = Template.bind({});
