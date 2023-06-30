import './globals.css'

export const metadata = {
  title: 'Car Hub',
  description: 'Car Catalogue',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative' >{children}</body>
    </html>
  )
}
