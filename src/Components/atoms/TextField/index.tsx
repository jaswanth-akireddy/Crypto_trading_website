import TextField, { StandardTextFieldProps } from '@mui/material/TextField'
import {
  Box,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputBaseComponentProps,
  styled,
  Typography,
} from '@mui/material'
import React, { FocusEventHandler } from 'react'


export interface InputProps extends StandardTextFieldProps {
  dropDown?:boolean
  placeHolder?: string
  value?: string | null
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  formtextcolor?: string
  error?: boolean
  fieldname?: string
  endAdornment?: JSX.Element
  startAdornment?:JSX.Element
  inputProps?: InputBaseComponentProps
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
}
const StyledTextField = styled(TextField)(() => ({
  borderRadius: 1,
  border: '#D0D5DD',
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    '&.Mui-focused fieldset': {
      borderColor: '#D0D5DD',
    },
  },
}))
const StyledFormHelper = styled(FormHelperText)(() => ({
  paddingBottom: '6px',
}))
const InputField = (props: InputProps) => {
  return (
    <Box>
      <StyledFormHelper>
        <Typography
          color={props.formtextcolor}
          fontWeight={500}
          variant="caption"
          
        />
      </StyledFormHelper>
      <FormControl data-testid="input" fullWidth={props.fullWidth}>
        <StyledTextField
          inputProps={props.inputProps}
          placeholder={props.placeHolder}
          data-testid="textinputfield"
          id="textinputfield"
          value={props.value}
          onChange={props.handleChange}
          onBlur={props.onBlur}
          error={props.error}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {props.endAdornment}
              </InputAdornment>
            ),
          }}
        ></StyledTextField>
      </FormControl>
    </Box>
  )
}

export default InputField

