import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HacktorX CTF 2025',
  description: 'HacktorX CTF 2025',
  generator: 'HacktorX.com',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
