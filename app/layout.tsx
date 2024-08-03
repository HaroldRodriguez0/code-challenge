import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Harold's Code Challenge",
  description: 'Generated with love by Harold I hope you like it',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>

          {children}
          
      </body>
    </html>
  )
}
