import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import WatchTable from "./index";
import Bitcoin from "../../../assets/cryptoImages/bitcoin.svg";
import { Row } from "../watchlist/index.stories";

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
  title: "Components/Organisms/watchTable",
  component: WatchTable,
} as ComponentMeta<typeof WatchTable>;

const Template: ComponentStory<typeof WatchTable> = (args) => (
  <WatchTable {...args} />
);

export const WatchTbl = Template.bind({});
WatchTbl.args = {
  data: rows,
  checkWatchList: () => false,
  onCheckboxChange: () => {},
};
