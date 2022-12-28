import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/Contact'
import Experiences from '../components/Experiences'
import MainPage from '../components/MainPage'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'

export default function Home() {
  return (
    // <div>
    //   <Head>
    //     <title>Welcome To Chen Homepage</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <Navbar></Navbar>
      // <div className='p-60'>
      <div>
        <div className='pt-60'>
          <MainPage></MainPage>
        </div>
        <Experiences></Experiences>
        <Projects></Projects>
        <Contact></Contact>
      </div>
      
      // </div>
    )
    // </div>
  
}
