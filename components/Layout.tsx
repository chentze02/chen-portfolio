import Head from 'next/head'
import React from 'react'
import Contact from './Contact'
import ContainerBlock from './ContainerBlock'
import Footer from './Footer'
import MainPage from './MainPage'
import Navbar from './Navbar'
import Projects from './Projects'

const Layout = ({children} : any) => {
  return (
    <div>
      <ContainerBlock>

        <Navbar></Navbar>
        <main>
            {children}
        </main>
        <Footer></Footer>
        </ContainerBlock>
    </div>
  )
}

export default Layout