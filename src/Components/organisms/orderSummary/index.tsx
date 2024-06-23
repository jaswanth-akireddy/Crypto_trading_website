import React from "react";
import styled from "styled-components";
import { Box, Button } from "@mui/material";
import theme from "../../../themes/index";
import Typography from "../../atoms/typography";
import Bankcard from "../../../assets/icons/bankcard1.svg";
import DeliveryIcon from "../../../assets/icons/delivery1.svg";
import WalletIcon from "../../../assets/icons/wallet1.svg";
import { Image as Icon } from "../../atoms/Icon/index";

import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
const MainContainer = styled(Box)`
  width: 527px;
  height: 646px;
  border: 1px solid ${theme.palette.grey[100]};
  border-radius: 4px;
  padding-top: 4px;
  box-sizing: border-box;
  background-color: white;
`;
const InnerContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 527px;
  height: 642px;
`;
const FirstBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 24px 8px;
  gap: 12px;

  width: 526px;
  height: 122px;
  box-sizing: border-box;
`;
const Divider = styled(Box)`
  width: 526px;
  height: 0px;
  border: 1px solid #e8e8f7;
`;
const SecondBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 0px 0px 24px;
  gap: 8px;
  box-sizing: border-box;
  width: 215px;
  height: 206px;
`;
const IconBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 4px;

  width: 42px;
  height: 206px;
`;
const TextBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 43px;

  width: 150px;
  height: 206px;
`;

const VerticalDivider = styled(Box)`
  width: 0px;
  height: 32px;
  border: 1px dashed #b4b4cf;
`;

const IndividualText = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 2px;
  width: 150px;
  height: 40px;
`;
const ThirdBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 24px 24px 24px;
  gap: 24px;
  box-sizing: border-box;
  width: 527px;
  height: 172px;
`;
const ThreeOne = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 479px;
  height: 82px;
`;
const ThreeOneEach = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  gap: 4px;

  width: 479px;
  height: 14px;
`;
const ThreeOneEach2 = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  gap: 4px;

  width: 479px;
  height: 22px;
`;
const Line = styled(Box)`
  width: 290px;
  height: 0px;
  border: 1px dashed #b4b4cf;
`;
const Line2 = styled(Box)`
  width: 350px;
  height: 0px;
  border: 1px dashed #b4b4cf;
`;
interface StateI {
  SliderValue: string;
  DeliveryFee: string;
}
const OrderSummary = () => {
  const sliderval = useSelector((state: StateI) => state.SliderValue);
  const deliveryfee = useSelector((state: StateI) => state.DeliveryFee);
  const bitcoinFValue = (parseFloat(sliderval) * 34060.6954).toFixed(2);
  const navigate = useNavigate();
  const transactionfee = (
    parseFloat(deliveryfee.split(" ")[0]) * 3406069.54
  ).toFixed(2);
  const total = (
    parseFloat((parseFloat(sliderval) * 34060.6954).toFixed(2)) +
    parseFloat((parseFloat(deliveryfee.split(" ")[0]) * 3406069.54).toFixed(2))
  ).toFixed(2);
  const totalString = "$" + total;
  return (
    <MainContainer>
      <InnerContainer>
        <FirstBox>
          <Typography
            variant="caption1"
            children="You are buying"
            sx={{ color: theme.palette.textColor.medium }}
          />
          <Typography
            variant="h6"
            children={(parseFloat(sliderval) / 100.0).toFixed(7) + " BTC"}
            sx={{ color: theme.palette.textColor.high }}
          />
          <Typography
            variant="caption1"
            children="1BTC = $3,406,069.54"
            sx={{ color: theme.palette.textColor.medium }}
          />
        </FirstBox>
        <Divider />
        <SecondBox>
          <IconBox>
            <Icon
              imgSrc={Bankcard}
              imgAlt="Bank Card Icon"
              imgStyle={{ width: "42px", height: "42px" }}
            />
            <VerticalDivider />
            <Icon
              imgSrc={DeliveryIcon}
              imgAlt="Delivery Icon"
              imgStyle={{ width: "42px", height: "42px" }}
            />
            <VerticalDivider />
            <Icon
              imgSrc={WalletIcon}
              imgAlt="Wallet Icon"
              imgStyle={{ width: "42px", height: "42px" }}
            />
          </IconBox>
          <TextBox>
            <IndividualText>
              <Typography
                variant="caption2"
                children="Payment method"
                sx={{ color: theme.palette.textColor.medium }}
              />
              <Typography
                variant="body1"
                children="Visa credit ...8845"
                sx={{ color: theme.palette.textColor.high }}
              />
            </IndividualText>
            <IndividualText>
              <Typography
                variant="caption2"
                children="Delivery fees"
                sx={{ color: theme.palette.textColor.medium }}
              />
              <Typography
                variant="body1"
                children={deliveryfee}
                sx={{ color: theme.palette.textColor.high }}
              />
            </IndividualText>
            <IndividualText>
              <Typography
                variant="caption2"
                children="Deposit to"
                sx={{ color: theme.palette.textColor.medium }}
              />
              <Typography
                variant="body1"
                children="Bitcoin wallet"
                sx={{ color: theme.palette.textColor.high }}
              />
            </IndividualText>
          </TextBox>
        </SecondBox>
        <Divider />
        <ThirdBox>
          <ThreeOne>
            <ThreeOneEach>
              <Typography
                variant="overline"
                children={(parseFloat(sliderval) / 100.0).toFixed(7) + " BTC"}
                sx={{ color: theme.palette.textColor.high }}
              />
              <Line />
              <Typography
                variant="overline"
                children={"$" + bitcoinFValue}
                sx={{ color: theme.palette.textColor.high }}
              />
            </ThreeOneEach>
            <ThreeOneEach>
              <Typography
                variant="overline"
                children="transaction fee"
                sx={{ color: theme.palette.textColor.high }}
              />
              <Line />
              <Typography
                variant="overline"
                children={"$" + transactionfee}
                sx={{ color: theme.palette.textColor.high }}
              />
            </ThreeOneEach>
            <ThreeOneEach2>
              <Typography
                variant="overline"
                children="Total"
                sx={{ color: theme.palette.textColor.high }}
              />
              <Line2 />
              <Typography
                variant="overline"
                children={totalString}
                sx={{ color: theme.palette.textColor.high }}
              />
            </ThreeOneEach2>
          </ThreeOne>
          <Button
            variant="contained"
            children={
              <Typography
                variant="button"
                children="BUY NOW"
                sx={{ color: "white" }}
              />
            }
            sx={{
              backgroundColor: theme.palette.primary[500],
              width: "479px",
              height: "42px",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: theme.palette.primary[500],
              },
            }}
            onClick={() => {navigate('/payment-successfull');}}
          />
        </ThirdBox>
      </InnerContainer>
    </MainContainer>
  );
};

export default OrderSummary;
