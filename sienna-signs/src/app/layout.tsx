import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sienna Signs — Bespoke Wedding & Event Signage',
  description: 'Handcrafted bespoke signage for weddings and events. Every detail, beautifully considered.',
  openGraph: {
    title: 'Sienna Signs',
    description: 'Bespoke Wedding & Event Signage',
    type: 'website',
  },
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