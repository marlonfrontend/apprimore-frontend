import { Provider } from '@/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apprimore Frontend',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}

export default RootLayout
