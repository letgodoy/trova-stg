import { PageFooter } from '@/components/PageFooter'
import { PageHeader } from '@/components/PageHeader'
import type { Metadata } from 'next'
import { Lato, Montserrat } from 'next/font/google'
import './globals.css'

const lato = Lato({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-lato',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Trova Brasil',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={`${lato.variable} ${montserrat.variable}`}>
      <body className={lato.className}>
        <div className="m-0 flex h-dvh w-screen flex-col items-center p-0">
          <PageHeader />
          {children}
          <PageFooter />
        </div>
      </body>
    </html>
  )
}
