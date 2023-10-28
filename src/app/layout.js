import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from "./Providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'QuickNote',
  description: 'Never forgot your insights',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-5xl mx-auto p-4">
          <AuthProvider>
            
            {children}

          </AuthProvider>
        </div>
      </body>
    </html>
  )
}
