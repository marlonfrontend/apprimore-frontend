'use client'

import { PropsWithChildren } from 'react'
import { Provider } from '@/components'
import { useIsMounted } from '@/hooks'

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  const isMounted = useIsMounted()

  if (!isMounted) {
    return null
  }

  return <Provider>{children}</Provider>
}
