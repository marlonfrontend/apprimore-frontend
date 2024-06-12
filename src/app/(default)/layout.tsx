import { DefaultLayout } from '@/layouts'
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
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  )
}

export default RootLayout
