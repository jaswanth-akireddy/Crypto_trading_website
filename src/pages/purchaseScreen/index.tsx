import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Navbar from "../../Components/organisms/navbar";
import theme from "../../themes";
import avatar from "../../assets/icons/avatar_image.svg";
import ApplicationHeader from "../../Components/organisms/applicationHeader";
import CryptoCurrency from "../../Components/organisms/cryptocurrency";
import OrderSummary from "../../Components/organisms/orderSummary";
import { PaymentMethod } from "../../Components/organisms/paymentMethod";
import { Component } from "../../Components/organisms/deliveryfee/index.stories";
import Footer from "../../Components/molecules/footer";
import AmountDetails from "../../Components/organisms/amountDetails";

const PurchaseContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${theme.palette.primary[100]};
`;

const NavItems = styled.div``;

const MidDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const MainContainer = styled.div``;

const HeadDiv = styled.div``;

const MidDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;

const BottomDiv = styled.div``;

const LeftMidDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightMidDIv = styled.div`
  margin-top: 20px;
  border-radius: 5px;
`;

const LeftTopDiv = styled.div`
  display: flex;
  height: 40vh;
  margin: 20px 10px;
`;

const LeftBottom = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
`;

const CommonContainer = styled.div`
  margin: 20px 5px;
`;

const PaymentContainer = styled.div`
  margin-top: 50px;
`;

const HeadingContainer = styled.div`
  margin: 10px 5px;
`;
const PurchaseScreen = () => {
  return (
    <PurchaseContainer>
      <NavItems>
        <Navbar />
      </NavItems>
      <MidDivContainer>
        <MainContainer>
          <HeadDiv>
            <ApplicationHeader
              title="Checkout"
              imgAlt="alt"
              imgSrc={avatar}
              isHeader={false}
            />
          </HeadDiv>
          <MidDiv>
            <LeftMidDiv>
              <HeadingContainer>
                <Typography variant="subtitle1" children="Buy Crypto" />
              </HeadingContainer>
              <LeftTopDiv>
                <CryptoCurrency />
              </LeftTopDiv>
              <LeftBottom>
                <PaymentContainer>
                  <CommonContainer>
                    <PaymentMethod subTitle="Payment Method" />
                  </CommonContainer>
                </PaymentContainer>
                <CommonContainer>
                  <AmountDetails />
                </CommonContainer>
                <CommonContainer>
                  <Component />
                </CommonContainer>
              </LeftBottom>
            </LeftMidDiv>
            <RightMidDIv>
              <OrderSummary />
            </RightMidDIv>
          </MidDiv>
        </MainContainer>
        <BottomDiv>
          <Footer />
        </BottomDiv>
      </MidDivContainer>
    </PurchaseContainer>
  );
};

export default PurchaseScreen;
