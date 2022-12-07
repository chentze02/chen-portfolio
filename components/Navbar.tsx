import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
          Chen Tzen
          {/* <Image src='/../public/assets/Chen_Logo.png' alt='' width='80' height='30' /> */}
          <div>
            <ul className='hidden md:flex'>
                <Link href='/'>
                  <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                </Link>
                <Link href='/#about'>
                  <li className='ml-10 text-sm uppercase hover:border-b'> About </li>
                </Link>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                <Link href='/#skills'>Skills</Link>
              </li>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                <Link href='/#projects'>Projects</Link>
              </li>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                <Link href='/resume'>Resume</Link>
              </li>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                <Link href='/#contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar