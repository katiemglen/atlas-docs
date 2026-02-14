import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Atlas Docs',
  description: 'Document delivery from Atlas 🌍',
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
