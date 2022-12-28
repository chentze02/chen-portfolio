import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { ThemeProvider } from 'next-themes'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout>
          {/* <Navbar></Navbar> */}
          <Component {...pageProps} />
          {/* <Footer></Footer> */}
        </Layout>
      </ThemeProvider>
    </>

  )
  
}

