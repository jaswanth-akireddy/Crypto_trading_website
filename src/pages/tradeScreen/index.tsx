import React from "react";
import ApplicationHeader from "../../../src/Components/organisms/applicationHeader";
import Navbar from "../../../src/Components/organisms/navbar";
import WatchListTabs from "../../../src/Components/organisms/watchlist";
import Avatar_image from "../../../src/assets/icons/avatar_image.svg";
import { Row } from "../../../src/Components/organisms/watchlist/index.stories";
import Bitcoin from "../../../src/assets/cryptoImages/bitcoin.svg";
import styled from "@emotion/styled";
import theme from "../../../src/themes";
import Footer from "../../../src/Components/molecules/footer";
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

const TradeScreenContainer = styled.div`
  display: flex;
  background-color: ${theme.palette.primary[100]};
  height: 100vh;
  width: 98vw;
`;

const MainAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TradeScreen = () => {
  return (
    <>
      <TradeScreenContainer>
        <Navbar />
        <MainAppContainer>
          <div>
            <ApplicationHeader
              title="Trade"
              imgSrc={Avatar_image}
              imgAlt="User Profile"
              isHeader={true}
            />
            <WatchListTabs rows={rows} />
          </div>
          <div>
            <Footer />
          </div>
        </MainAppContainer>
      </TradeScreenContainer>
    </>
  );
};

export default TradeScreen;
