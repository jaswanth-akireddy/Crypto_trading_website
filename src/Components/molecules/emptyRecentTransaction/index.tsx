import React from "react";
import styled from "@emotion/styled";
import theme from "../../../themes";
import { Typography } from "@mui/material";
import { Image } from "../../atoms/Icon";
import undrawPlainCrediCard from "../../../assets/images/undraw_Plain_credit_card.svg";

const TransactionContainer = styled.div`
  width: 398px;
  height: 313px;
`;

const TransactionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 24px;
  margin-right: 24px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 12px;
`;

const TransactionFooter = styled.div`
  display: flex;
  margin-left: 24px;
  margin-right: 24px;
  text-align: center;
`;

const EmptyRecentTransaction = () => {
  return (
    <>
      <TransactionContainer>
        <TransactionHeader>
          <Typography variant="subtitle1" children="Recent transactions" />
          <Typography
            variant="caption2"
            children="View All"
            sx={{ color: theme.palette.primary[500] }}
          />
        </TransactionHeader>
        <ImageContainer>
          <Image
            imgSrc={undrawPlainCrediCard}
            imgAlt="Un Draw Plain Credit card"
          />
        </ImageContainer>
        <TransactionFooter>
          <Typography
            variant="caption2"
            children="You don’t own any crypto. Send yourself 
some crypto to get started."
            sx={{ color: theme.palette.textColor.medium }}
          />
        </TransactionFooter>
      </TransactionContainer>
    </>
  );
};

export default EmptyRecentTransaction;
