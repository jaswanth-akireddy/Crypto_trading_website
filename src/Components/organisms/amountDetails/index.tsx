import React from "react";
import styled from "styled-components";
import theme from "../../../themes";
import { Box, Button, Slider } from "@mui/material";
import Typography from "../../atoms/typography";
import store, { changeSlider }  from "../../store";
import { useSelector } from "react-redux";

const MainContainer = styled(Box)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 12px;
  width: 710px;
  height: 318px;
  background-color: #ffffff;
  border: 1px solid ${theme.palette.grey[100]};
  border-radius: 4px;
`;
const DetailsBox = styled(Box)`
  width: 663px;
  height: 236px;
  display: flex;
  flex-direction: column;
`;
const AmountBox = styled(Box)`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  gap: 108px;
  background-color: #ffffff;
  border: 1px solid ${theme.palette.grey[100]};
  border-radius: 4px;
  height: 74px;
`;
const SliderBox = styled(Box)`
  position: relative;
  left: 43.76px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  height: 88px;
`;
const BitcoinBox = styled(Box)`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  gap: 108px;
  height: 74px;
  background-color: #ffffff;
  border: 1px solid ${theme.palette.grey[100]};
  border-radius: 4px;
`;
interface StateI {
  SliderValue: string,
  DeliveryFee: string
}
const AmountDetails = () => {
  const sliderval = useSelector((state: StateI) => state.SliderValue);

  return (
    <MainContainer>
      <Typography
        variant="body1"
        children="Amount details"
        sx={{ color: theme.palette.textColor.high }}
      />
      <DetailsBox>
        <AmountBox>
          <Typography
            variant="subtitle1"
            children={"$"+(parseFloat(sliderval) * 34060.6954).toFixed(2)}
            sx={{ color: theme.palette.textColor.high }}
          />
          <Button
            children={
              <Typography
                variant="button"
                children="Buy max"
                sx={{ color: theme.palette.primary[500] }}
              />
            }
            variant="outlined"
            sx={{ color: theme.palette.primary[500] }}
          />
        </AmountBox>
        <SliderBox>
          <Slider
            sx={{
              '& input[type="range"]': {
                WebkitAppearance: "slider-vertical",
              },
              height: "88px",
              color: "grey",
            }}
            orientation="vertical"
            defaultValue={2.34510}
            aria-label="BitCoinValue"
            size="small"
            step={0.0001}
            valueLabelDisplay="off"
            onChange={(event: any) => {
              store.dispatch(changeSlider(event.target.value));
            }}
            data-testid="slider"
          />
          <Typography
            variant="caption1"
            children="1BTC = $3,406,069.54"
            sx={{ color: theme.palette.textColor.medium }}
          />
        </SliderBox>
        <BitcoinBox>
          <Typography
            variant="subtitle1"
            children={((parseFloat(sliderval)) / 100.0).toFixed(7)}
            sx={{ color: theme.palette.textColor.high }}
          />
          <Typography
            variant="body1"
            children="BTC"
            sx={{ color: theme.palette.textColor.medium }}
          />
        </BitcoinBox>
      </DetailsBox>
    </MainContainer>
  );
};

export default AmountDetails;
