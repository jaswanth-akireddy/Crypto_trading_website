import styled from "@emotion/styled";
import React from "react";
import Typography from "../../atoms/typography";
import { Box, ThemeProvider } from "@mui/material";
import theme from "../../../themes/index";
import { Image as Icon } from "../../atoms/Icon/index";
import ChartIcon from "../../../assets/icons/chart.svg";
import ListIcon from "../../../assets/icons/list.svg";
import Bitcoin from "../../../assets/cryptoImages/bitcoin.svg";
import Divider from "../../atoms/divider/index";
import DollarIcon from "../../../assets/icons/rupee1.svg";

const Main = styled(Box)`
  width: 398px;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background-color: white;
  border: 1px ${theme.palette.grey[100]};
  border-radius: 5px;
  padding: 5px;
`;
const Header = styled(Box)`
  width: 398px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
  box-sizing: border-box;
  gap: 105px;
`;
const IconsBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  width: 64px;
  height: 32px;
`;
const DataBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 398px;
  height: 244px;
`;
const EachData = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px 8px 24px;
  gap: 133px;
  box-sizing: border-box;
  width: 370px;
  height: 58px;
`;
const EachData2 = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px 8px 24px;
  gap: 133px;
  box-sizing: border-box;
  width: 398px;
  height: 58px;
`;
const CoinBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 107px;
  height: 42px;
`;
const CoinBox2 = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  /* width: 126px; */
  height: 42px;
`;
const CurrencyBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  gap: 4px;

  width: 52px;
  height: 42px;
`;
const CoinTextBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  width: 55px;
  height: 42px;
`;
const CoinTextBox2 = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  /* width: 74px; */
  height: 42px;
`;
const TotalBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 24px;

  width: 398px;
  height: 70px;
`;
const TotalTextBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 24px;
  box-sizing: border-box;
  gap: 127px;

  width: 398px;
  height: 22px;
`;
const MyWallet = styled(Box)`
  width: 398px;
  height: 98px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const WalletHeader = styled(Box)`
  width: 398px;
  height: 28px;
  display: flex;
  flex-direction: column;
  padding: 0px 24px;
  box-sizing: border-box;
`;
interface MyPortfolioSectionProps {
  currencyValue: string;
  profitOrLoss: string;
  totalBalance: string;
}
const MyPortfolio = (props: MyPortfolioSectionProps) => {
  return (
    <Main>
      <Header>
        <Typography
          variant="subtitle1"
          children="My portfolio"
          sx={{ color: theme.palette.textColor.high }}
        />
        <IconsBox>
          <Icon imgSrc={ChartIcon} imgAlt="Chart Icon" />
          <Icon imgSrc={ListIcon} imgAlt="List Icon" />
        </IconsBox>
      </Header>
      <DataBox>
        <EachData>
          <CoinBox>
            <Icon
              imgSrc={Bitcoin}
              imgAlt="Bitcoin Image"
              imgStyle={{ width: "42px", height: "42px" }}
            />
            <CoinTextBox>
              <Typography
                variant="body1"
                children="Bitcoin"
                sx={{ color: theme.palette.textColor.high }}
              />
              <Typography
                variant="caption2"
                children="BTC"
                sx={{ color: theme.palette.textColor.medium }}
              />
            </CoinTextBox>
          </CoinBox>
          <CurrencyBox>
            <Typography
              variant="body1"
              children={props.currencyValue}
              sx={{ color: theme.palette.textColor.high }}
            />
            <Typography
              variant="caption2"
              children={props.profitOrLoss}
              sx={{ color: theme.palette.success[500] }}
            />
          </CurrencyBox>
        </EachData>
      </DataBox>
      <TotalBox>
        <Divider
          variant="middle"
          orientation="horizontal"
          flexItem
          sx={{ borderBottomWidth: 2 }}
        />
        <TotalTextBox>
          <Typography
            variant="body1"
            children="Total Balance"
            sx={{ color: theme.palette.textColor.medium }}
          />
          <Typography
            variant="body1"
            children={props.totalBalance}
            sx={{ color: theme.palette.textColor.high }}
          />
        </TotalTextBox>
        <Divider
          variant="middle"
          orientation="horizontal"
          flexItem
          sx={{ borderBottomWidth: 2 }}
        />
      </TotalBox>
      <MyWallet>
        <WalletHeader>
          <Typography
            variant="subtitle1"
            children="My wallets"
            sx={{ color: theme.palette.textColor.high }}
          />
        </WalletHeader>
        <EachData2>
          <CoinBox2>
            <Icon
              imgSrc={DollarIcon}
              imgAlt="Dollar Icon"
              imgStyle={{ width: "42px", height: "42px" }}
            />
            <CoinTextBox2>
              <Typography
                variant="body1"
                children="USD Coin"
                sx={{ color: theme.palette.textColor.high }}
              />
              <Typography
                variant="caption2"
                children="US Dollar"
                sx={{ color: theme.palette.textColor.medium }}
              />
            </CoinTextBox2>
          </CoinBox2>
          <CurrencyBox>
            <Typography
              variant="body1"
              children={props.currencyValue}
              sx={{ color: theme.palette.textColor.high }}
            />
          </CurrencyBox>
        </EachData2>
      </MyWallet>
    </Main>
  );
};

export default MyPortfolio;
