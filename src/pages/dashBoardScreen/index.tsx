import React from "react";
import ApplicationHeader from "../../../src/Components/organisms/applicationHeader";
import Navbar from "../../../src/Components/organisms/navbar";
import Typography from "../../../src/Components/atoms/typography";
import styled from "@emotion/styled";
import theme from "../../../src/themes";
import Footer from "../../../src/Components/molecules/footer";
import avatar from "../../../src/assets/icons/avatar_image.svg";
import EmptyStateWatchListSection from "../../../src/Components/organisms/emptyStateWatchListSection";
import MyPortfolioValue from "../../../src/Components/organisms/myPortfolioValue";
import MyPortfolio from "../../../src/Components/organisms/myPortfolio";
import EmptyRecentTransaction from "../../../src/Components/molecules/emptyRecentTransaction";

const DashBoardContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${theme.palette.primary[100]};
`;

const NavItems = styled.div``;

const MidDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainContainer = styled.div``;

const HeadDiv = styled.div``;

const MidDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;

const BottomDiv = styled.div``;

const LeftMidDiv = styled.div``;

const RightMidDIv = styled.div`
  border: 1px solid ${theme.palette.grey[100]};
  margin-top: 20px;
  border-radius: 5px;
`;

const LeftMidContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
`;

const DashBoard = () => {
  return (
    <>
      <DashBoardContainer>
        <NavItems>
          <Navbar />
        </NavItems>
        <MidDivContainer>
          <MainContainer>
            <HeadDiv>
              <ApplicationHeader
                imgSrc={avatar}
                imgAlt="alt"
                title="DashBoard"
                isHeader={true}
              />
            </HeadDiv>
            <MidDiv>
              <LeftMidDiv>
                <LeftMidContainer>
                  <EmptyStateWatchListSection />
                  <Typography
                    variant="subtitle1"
                    children="My portfolio Value"
                    sx={{ color: theme.palette.textColor.high }}
                    marginTop={4}
                  />
                  <MyPortfolioValue />
                </LeftMidContainer>
              </LeftMidDiv>
              <RightMidDIv>
                <MyPortfolio
                  currencyValue="99"
                  profitOrLoss="999"
                  totalBalance="9999"
                />
                <EmptyRecentTransaction />
              </RightMidDIv>
            </MidDiv>
          </MainContainer>
          <BottomDiv>
            <Footer />
          </BottomDiv>
        </MidDivContainer>
      </DashBoardContainer>
    </>
  );
};

export default DashBoard;
