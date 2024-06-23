import React from 'react'
import { TypographyProps } from '@mui/material'
import Button, { ButtonProps } from '@mui/material/Button'
const ButtonComponent = (props: ButtonComponentProps) => {
  const { label, textColor, textVariant, ...buttonProps } = props
  return (
    <Button data-testid="button" type="button" {...buttonProps}>
      {/* <Typography color={textColor} variant={textVariant}> */}
        {label}
      {/* </Typography> */}
    </Button>
  )
}
interface ButtonComponentProps extends ButtonProps {
  label: string
  textVariant?: TypographyProps['variant']
  textColor?: string
}
export default ButtonComponent