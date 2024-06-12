import { Box as TBox } from '@mui/material'
import { BoxProps } from './Box.types'
import { PropsWithChildren } from 'react'

export const Box = ({ children, ...props }: PropsWithChildren<BoxProps>) => {
  return <TBox {...props}>{children}</TBox>
}
