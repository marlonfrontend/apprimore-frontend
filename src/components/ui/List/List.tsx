import {
  List as TList,
  ListItem as TListItem,
  ListItemButton as TListItemButton,
  ListItemText as TListItemText,
} from '@mui/material'
import {
  ListProps,
  ListItemProps,
  ListItemButtonProps,
  ListItemTextProps,
} from './List.types'
import { PropsWithChildren } from 'react'

export const List = ({ children, ...props }: PropsWithChildren<ListProps>) => {
  return <TList {...props}>{children}</TList>
}

export const ListItem = ({
  children,
  ...props
}: PropsWithChildren<ListItemProps>) => {
  return <TListItem {...props}>{children}</TListItem>
}

export const ListItemButton = ({
  children,
  ...props
}: PropsWithChildren<ListItemButtonProps>) => {
  return <TListItemButton {...props}>{children}</TListItemButton>
}

export const ListItemText = ({
  children,
  ...props
}: PropsWithChildren<ListItemTextProps>) => {
  return <TListItemText {...props}>{children}</TListItemText>
}
