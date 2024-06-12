import { Button as TButton, IconButton as TIconButton } from '@mui/material'
import { ButtonProps, IconButtonProps } from './Button.types'
import { PropsWithChildren } from 'react'

export const Button = ({
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return <TButton {...props}>{children}</TButton>
}

export const IconButton = ({
  children,
  ...props
}: PropsWithChildren<IconButtonProps>) => {
  return <TIconButton {...props}>{children}</TIconButton>
}
