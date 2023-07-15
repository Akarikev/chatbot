import Chat from '@/components/Chat'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/providers/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Book Buddy',
  description: 'Your book store for fantasy and book novels',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
      <body className={inter.className}>
       <Chat  />
        {children}
        </body>
      </Providers>
     
    </html>
  )
}
