import type { Metadata } from 'next'
import { Manrope, Montserrat } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'VentureSouq - Business Setup & Expansion Partner in Saudi Arabia',
  description: 'From Idea → Licence → Office → Hiring → Launch. Complete business setup services in Riyadh, Jeddah, and Dammam.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
