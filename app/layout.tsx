import './scss/styles.scss'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h2>Header</h2>
          <nav>
            Navigation
          </nav>
        </header>
        {children}
        <footer>
          <h2>Footer</h2>
        </footer>
      </body>
    </html>
  )
}
