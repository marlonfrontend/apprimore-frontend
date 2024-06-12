'use client'

import { Montserrat } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' && {}),
          textTransform: 'none',
        }),
      },
    },
  },
})
