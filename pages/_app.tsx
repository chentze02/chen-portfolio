import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { ThemeProvider } from 'next-themes'
import { ChakraProvider } from '@chakra-ui/react'
import ContainerBlock from '../components/ContainerBlock'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    {/* <ContainerBlock> */}
      <ThemeProvider enableSystem={true} attribute="class">
          <Layout>
            <ContainerBlock>
            <Component {...pageProps} />
            </ContainerBlock>
          </Layout>
      </ThemeProvider>
      {/* </ContainerBlock> */}

    </>

  )
  
}

