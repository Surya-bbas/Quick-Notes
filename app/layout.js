import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { StyledEngineProvider } from '@mui/material'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quick Notes',
  description: 'Take notes on the fly with Quick Notes, easy to use note taking application',
  
}

export default function RootLayout({ children }) {
  return (
    <StyledEngineProvider injectFirst>
      <html lang="en">      
        
        <body className={inter.className}>
          
          <div className='max-w-[1400px] mx-auto  text-text mt-2 '>
            <Navbar/>
            <div className='mt-6'>
              {children}
            </div>

          </div>
        </body>
      </html>
    </StyledEngineProvider>
  )
}
