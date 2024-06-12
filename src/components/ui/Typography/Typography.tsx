import { Typography as TTypography } from '@mui/material'
import { TypographyProps } from './Typography.types'
import { PropsWithChildren } from 'react'

export const Typography = ({
  children,
  ...props
}: PropsWithChildren<TypographyProps>) => {
  return <TTypography {...props}>{children}</TTypography>
}
