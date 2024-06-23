import { Box, styled } from '@mui/material'
import React from 'react'
import {Image} from '../../atoms/Icon/index'
import Success from '../../../assets/icons/tick.svg'
import TypographyComponent from '../../atoms/typography/index'
import ButtonComponent from '../../atoms/button/index'
import theme from '../../../themes/index'
export const transactionSuccess = {
    buy: {
      text: 'Sell is completed, please check your balance in your Rupee coin',
      button: 'BUY CRYPTO',
    },
    sell: {
      text: 'Purchase is completed, please check your balance in your crypto wallet',
      button: 'SELL CRYPTO',
    },
  }
  
  export const USDCOIN = 'GO TO USD COIN'
export interface PaymentSuccessCardProps {
  successType: 'buy' | 'sell'
  price: string
}
const MainBox = styled(Box)(() => ({
  display:'flex',
  // backgroundColor: 'theme.palette.grey[50]',
  alignContent:'center',
  alignItems:'center',

}))
const ContainerBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  alignContent: 'center',
  alignItems: 'center',
  width: '396px',
  backgroundColor:'theme.palette.grey[50]',
  height: '280px',
}))
const ButtonContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '24px',
  alignContent: 'center',
  alignItems: 'center',
}))
const StyledButton = styled(ButtonComponent)(() => ({
  backgroundColor: theme.palette.primary.main,
  width: '175px',
  height: '42px',
}))
const StyledOutlinedButton = styled(ButtonComponent)(() => ({
  borderColor: theme.palette.primary.main,
  width: '150px',
  height: '42px',
}))
const StyledTypographyComponent = styled(TypographyComponent)(() => ({
  paddingBottom: 24,
}))
const TextContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  alignItems: 'center',
  width: '322px',
  height:'102px',
  fontFamily:'theme.palette.typography.h6',
}))
const PaymentSuccessCard = (props: PaymentSuccessCardProps) => {
  const { successType, price } = props
  return (
    <>
      <MainBox>
        <ContainerBox data-testid="transaction-success-container">
          <Image imgSrc={Success}  imgAlt={'img'} />
          <TextContainer>
            <TypographyComponent variant="h4">{price}</TypographyComponent>
            <StyledTypographyComponent
              variant="body2"
              style={{
                textAlign: 'center',
              }}
            >
              {successType == "buy"
                ? transactionSuccess.sell.text
                : transactionSuccess.buy.text}
            </StyledTypographyComponent>
          </TextContainer>
          <ButtonContainer>
            <StyledOutlinedButton
              variant="outlined"
              textColor={theme.palette.primary.main}
              label={
                successType === "sell"
                  ? transactionSuccess.sell.button
                  : transactionSuccess.buy.button
              }
            >{ successType === "sell"
                ? transactionSuccess.sell.button
                : transactionSuccess.buy.button
            }</StyledOutlinedButton>
            <StyledButton
              variant="contained"
              label={USDCOIN}
              textColor={theme.palette.warning.main}//structuralColor
            >{USDCOIN}</StyledButton>
          </ButtonContainer>
        </ContainerBox>
      </MainBox>
    </>
  )
}
export default PaymentSuccessCard