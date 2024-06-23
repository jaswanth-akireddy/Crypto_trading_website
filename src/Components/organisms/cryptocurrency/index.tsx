import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../../../themes/index";
import { ThemeProvider, Checkbox, Box } from "@mui/material";
import Typography from "../../atoms/typography";
import { Image as Icon } from "../../atoms/Icon/index";
import BitcoinImage from "../../../assets/cryptoImages/bitcoin.svg";
import TransactionState from "../../../assets/icons/transaction state.svg";

interface CryptoBoxProps {
  check: boolean;
}
const Main = styled(Box)`
  width: 708px;
  height: 414px;
  background-color: #ffffff;
  border: 1px solid #e8e8f7;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  position: absolute;
  gap: 16px;
  box-sizing: border-box;
`;
const CryptoBox = styled.div<CryptoBoxProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 12px;
  box-sizing: border-box;
  background-color: #ffffff;
  border: ${(props: CryptoBoxProps) =>
    props.check ? "2px solid #0052FF" : "2px solid #FFFFFF"};
  border-radius: 4px;
  position: absolute;
  top: 62px;
`;
const CryptoNames = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 2px;

  width: 102px;
  height: 40px;
`;

const CryptoCurrency = () => {
  const [check, setCheck] = useState(false);
  useEffect(() => {
    if (check)
      console.log("Selected Crypto: Bitcoin, it has value $3,406,069.54");
  }, [check]);
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Typography
          variant="body1"
          children="Choose crypto"
          sx={{ color: theme.palette.textColor.high }}
        />

        <CryptoBox check={check}>
          <Checkbox
            sx={{
              position: "absolute",
              left: "77.78%",
              right: "2.47%",
              top: "2.44%",
              width: "31.41px",
              height: "30.44px",
            }}
            checkedIcon={
              <Icon imgSrc={TransactionState} imgAlt="Transaction State" />
            }
            onChange={() => {
              setCheck(!check);
            }}
          />
          <Icon
            imgSrc={BitcoinImage}
            imgAlt="Bitcoin Image"
            imgStyle={{ width: "56px", height: "56px" }}
          />

          <CryptoNames>
            <Typography
              variant="body1"
              children="Bitcoin"
              sx={{ color: theme.palette.grey[500] }}
            />
            <Typography
              variant="caption1"
              children="$3,406,069.54"
              sx={{ color: theme.palette.textColor.medium }}
            />
          </CryptoNames>
        </CryptoBox>
      </Main>
    </ThemeProvider>
  );
};

export default CryptoCurrency;
