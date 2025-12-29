import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brooklyn Rauckman - Full-stack Software Engineer',
  description: 'Full-stack Software Engineer passionate about bringing ideas to life through code',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

