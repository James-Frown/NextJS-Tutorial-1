// import for boostrap styles
import 'bootstrap/dist/css/bootstrap.min.css';

// this is the global css & applied to all pages
import './globals.css'

import { Inter } from 'next/font/google'
// importing the stlyes and components from bootstrap
import { Container, SSRProvider } from '@/components/bootstrap';
import NavBar from './NavBar';

//all fonts are from our own server and it helps with prvacy
const inter = Inter({ subsets: ['latin'] })

// defines the metadata of a webpage
export const metadata = {
  // This is the global Title & the fallback
  // can set different titles in sub pages later
  title: "NextJS Image Gallery",
  // This is the global description
  description: "Tutorial Project by Coding In Flow",
}

export default function RootLayout({
  children,
}: {
  // special react syntax check root prop
  // allows you to parse server components to a client component
  children: React.ReactNode
}) {
  return (
    // This layout wraps the whole application in the home page tsx file
    // it is rendered as the childeren in the body tag
    // the layout is where you can put the navbar
    // also wrap the container in the ssr rendering componenet provided by bootstrap
    // also good habit to wrap the contianer in an html <main> tag
    <html lang="en">
      <body className={inter.className}>
        <SSRProvider>
          <NavBar />
          <main>
            <Container className="py-4">
              {children}
            </Container>
          </main>
        </SSRProvider>
      </body>
    </html>
  )
}
