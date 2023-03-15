import './globals.css'
import Header from './Header'

export const metadata = {
  title: 'Andor Lato Portfolio',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='h-screen '>
        <Header />
        {children}
      </body>
    </html>
  )
}
