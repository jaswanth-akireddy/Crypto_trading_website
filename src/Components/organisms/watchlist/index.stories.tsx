import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import WatchListTabs from ".";
import Bitcoin from "../../../assets/cryptoImages/bitcoin.svg";

export interface Row {
  imgSrc: string;
  name: string;
  code: string;
  price: string;
  change: string;
  marketcap: number;
  checked?: boolean;
}
const rows: Row[] = [
  {
    imgSrc: Bitcoin,
    name: "Bitcoin",
    code: "BTC",
    price: "$ 3,285,553.73",
    change: "+1.06%",
    marketcap: 60.1,
  },
];

export default {
  title: "Components/Organisms/WatchList",
  component: WatchListTabs,
} as ComponentMeta<typeof WatchListTabs>;

const Template: ComponentStory<typeof WatchListTabs> = (args) => (
  <WatchListTabs {...args} />
);

export const Watchlist = Template.bind({});
Watchlist.args = {
  rows: rows,
};
