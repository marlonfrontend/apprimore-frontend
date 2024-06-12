import { InputAdornment, TextField as TTextField } from '@mui/material'
import { InputProps } from './Input.types'

export const Input = ({ endIcon, ...props }: InputProps) => {
  return (
    <TTextField
      {...props}
      InputProps={{
        endAdornment: <InputAdornment position="end">{endIcon}</InputAdornment>,
      }}
    />
  )
}
