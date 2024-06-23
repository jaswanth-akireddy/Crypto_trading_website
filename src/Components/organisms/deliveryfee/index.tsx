import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import theme from "../../../themes";
import Typography from "../../atoms/typography";
import { Image as Icon } from "../.././atoms/Icon/index";
import ChevronDown from "../../../assets/icons/chevron-down.svg";
import ChevronUp from "../../../assets/icons/chevron-up.svg";
import DeliveryIcon from "../../../assets/icons/delivery.svg";
import store, { updateDeliveryFee } from "../../store";
const Main = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 12px;
  width: 710px;
  height: 156px;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid ${theme.palette.grey[100]};
  border-radius: 4px;
`;
const DropDownBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  gap: 108px;

  width: 663px;
  height: 74px;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid ${theme.palette.grey[100]};
  border-radius: 4px;
`;
const ValueBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 294px;
  height: 42px;
`;
const TextBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  width: 250px;
  height: 42px;
`;
const AdditionalBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  background-color: white;
  width: 663px;
  height: 216px;
`;
const OptionBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 24px 16px 60px;
  gap: 4px;

  width: 663px;
  height: 54px;
  box-sizing: border-box;
`;
const DeliveryFee = () => {
  const [chevron, setChevron] = useState(false);
  const [selected, setSelected] = useState("1");
  const [valueObj, setValueObj] = useState({
    type: "Instant : 2-5 min",
    fee: "transaction fees : 0.001 BTC",
  });

  useEffect(() => {
    if (selected === "1") {
      setValueObj({
        type: "Instant : 2-5 min",
        fee: "transaction fees : 0.001 BTC",
      });
      store.dispatch(updateDeliveryFee("0.001 BTC"));
    } else if (selected === "2") {
      setValueObj({
        type: "Faster : 4 hours",
        fee: "transaction fees : 0.0001 BTC",
      });
      store.dispatch(updateDeliveryFee("0.0001 BTC"));
    } else if (selected === "3") {
      setValueObj({
        type: "Fast : 120 hours",
        fee: "transaction fees : 0.00001 BTC",
      });
      store.dispatch(updateDeliveryFee("0.00001 BTC"));
    } else if (selected === "4") {
      setValueObj({ type: "None", fee: "transaction fees : none" });
      store.dispatch(updateDeliveryFee("none"));
    }
  }, [selected]);
  return (
    <>
      <Main>
        <Typography
          variant="body1"
          children="Select speed delivery"
          sx={{ color: theme.palette.textColor.high }}
        />
        <DropDownBox>
          <ValueBox>
            <Icon
              imgSrc={DeliveryIcon}
              imgAlt="Delivery Icon"
              imgStyle={{ width: "32px", height: "32px" }}
            />
            <TextBox>
              <Typography
                variant="body1"
                children={valueObj.type}
                sx={{ color: theme.palette.textColor.high }}
              />
              <Typography
                variant="caption1"
                children={valueObj.fee}
                sx={{ color: theme.palette.textColor.medium }}
              />
            </TextBox>
          </ValueBox>
          <Box
            onClick={() => {
              setChevron(!chevron);
            }}
            sx={{ backgroundColor: "white", width: "32px", height: "32px" }}
            data-testid="button"
          >
            <Icon
              imgSrc={chevron ? ChevronUp : ChevronDown}
              imgAlt="Chevron"
              imgStyle={{ width: "32px", height: "32px" }}
            />
          </Box>
        </DropDownBox>
      </Main>
      {chevron ? (
        <AdditionalBox>
          <OptionBox
            onClick={() => {
              setSelected("1");
            }}
            data-testid="option-1"
          >
            <Typography
              variant="body1"
              children="Instant : 2-5 minutes"
              sx={{ color: theme.palette.textColor.high }}
            />
            <Typography
              variant="caption2"
              children="Delivery fees : 0.001 BTC"
              sx={{ color: theme.palette.textColor.medium }}
            />
          </OptionBox>
          <OptionBox
            onClick={() => {
              setSelected("2");
            }}
            data-testid="option-2"
          >
            <Typography
              variant="body1"
              children="Faster : 4 hours"
              sx={{ color: theme.palette.textColor.high }}
            />
            <Typography
              variant="caption2"
              children="Delivery fees : 0.0001 BTC"
              sx={{ color: theme.palette.textColor.medium }}
            />
          </OptionBox>
          <OptionBox
            onClick={() => {
              setSelected("3");
            }}
            data-testid="option-3"
          >
            <Typography
              variant="body1"
              children="Fast : 120 hours"
              sx={{ color: theme.palette.textColor.high }}
            />
            <Typography
              variant="caption2"
              children="Delivery fees : 0.00001 BTC"
              sx={{ color: theme.palette.textColor.medium }}
            />
          </OptionBox>
          <OptionBox
            onClick={() => {
              setSelected("4");
            }}
            data-testid="option-4"
          >
            <Typography
              variant="body2"
              children="None"
              sx={{ color: theme.palette.textColor.high }}
            />
          </OptionBox>
        </AdditionalBox>
      ) : (
        <></>
      )}
    </>
  );
};

export default DeliveryFee;
