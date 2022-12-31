import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { ThemeProvider } from 'next-themes'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    {/* <ChakraProvider theme={theme}> */}
      <ThemeProvider enableSystem={true} attribute="class">
          <Layout>
            {/* <Navbar></Navbar> */}
            <Component {...pageProps} />
            {/* <Footer></Footer> */}
          </Layout>
      </ThemeProvider>
    {/* </ChakraProvider> */}

    </>

  )
  
}

