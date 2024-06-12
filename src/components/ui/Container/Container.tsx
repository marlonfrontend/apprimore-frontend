import { Container as TContainer } from '@mui/material'
import { ContainerProps } from './Container.types'
import { PropsWithChildren } from 'react'

export const Container = ({
  children,
  ...props
}: PropsWithChildren<ContainerProps>) => {
  return <TContainer {...props}>{children}</TContainer>
}
