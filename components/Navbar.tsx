import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {AiOutlineCloseCircle, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import {BsFillPersonLinesFill, BsMoonFill, BsFillSunFill} from 'react-icons/bs'
import {useTheme} from 'next-themes'
import { useRouter } from 'next/router'

const Navbar = () => {

  const [sideNav, setSideNav] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/superPeach' ||
      router.asPath === '/timetable' ||
      router.asPath === '/bankCounter' 
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [router]);
 
  const handleNav = () => {
    setSideNav(!sideNav);
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if(!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;
    
    if(currentTheme === 'dark') {
      return (
        <BsFillSunFill size={18}  onClick={() => setTheme('light')} />
      )
    } else {
      return (

        <BsMoonFill size={18}  onClick={() => setTheme('dark')} />
      )
    }

  }

  return (
      <div 
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
          <Link href='/'>
            <Image src='/assets/Chen_Logo_NavBar.png' alt='/' width='100' height='40' />
          </Link>
          <div>
            <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
              <Link href='/'>
                <li className='ml-10 mt-5 text-sm uppercase hover:border-b'>Home</li>
              </Link>
              <li className='ml-10 mt-5 text-sm uppercase hover:border-b'>
                <Link href='/#experiences'>Experiences</Link>
              </li> 
              <li className='ml-10 mt-5 text-sm uppercase hover:border-b'>
                <Link href='/#projects'>Projects</Link>
              </li>
              <li className='ml-10 mt-5 text-sm uppercase hover:border-b'>
                <Link href='/#contact'>Contact</Link>
              </li>
              <li className='ml-10 mt-5 text-sm uppercase hover:border-b'>
                <Link href='https://drive.google.com/file/d/1m_nursoPz0HOpe7i7c7_U2KyByrCuVsC/view?usp=sharing'>Resume</Link>
              </li>
              <li className='ml-10 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                {renderThemeChanger()}
              </li>
            </ul>
            <div onClick={handleNav} className='md:hidden'>
              <AiOutlineMenu size={25} className={theme === 'dark' ? 'text-[#204373]' : ''}/>
            </div>
          </div>
        </div>

        <div className={ sideNav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ' : ''}>
          <div 
          className={ sideNav 
            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-[#808080] p-10 ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }>
            <div>
              <div className='flex w-full items-center justify-between'>
                <Image src='/assets/Chen_Logo_NavBar.png' alt='/' width='90' height='40' />
                <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                  <AiOutlineCloseCircle/>
                </div>
              </div>
              <div className='border-b border-gray-300 my-4'>
                <p className='w-[85%] md:w-[90%] py-4'> 2nd Year Computer Science at UCLA</p>
              </div>
            </div>

            <div>
              <ul className='uppercase'>
                <Link href='/'>
                  <li onClick={() => setSideNav(false)} className='py-4 text-sm'>Home</li>
                </Link>
                <Link href='/#experiences'>
                  <li onClick={() => setSideNav(false)} className='py-4 text-sm'>Experiences</li>
                </Link> 
                <Link href='/#projects'>
                  <li onClick={() => setSideNav(false)} className='py-4 text-sm'>Projects</li>
                </Link>
                <Link href='/#contact'>
                  <li onClick={() => setSideNav(false)} className='py-4 text-sm'>Contact</li>
                </Link>
                <Link href='https://drive.google.com/file/d/1m_nursoPz0HOpe7i7c7_U2KyByrCuVsC/view?usp=sharing'>
                  <li onClick={() => setSideNav(false)} className='py-4 text-sm'>Resume</li>
                </Link>
              </ul>
              <div className='pt-40'>
                <p className='uppercase tracking-widest text-[#5651ef]'>Let's Connect</p>
                <div className='flex items-center justify-between my-4 sm:w-[80%]'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedin/>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithubSquare/>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail/>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsFillPersonLinesFill/>
                  </div>
                </div>
              </div>
            </div>          
          </div>
        </div>
      </div>
    )
}

export default Navbar