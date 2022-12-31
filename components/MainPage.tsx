import Image from 'next/image'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

function MainPage() {
  return (
    <div id='about' className='w-full h-screen text-center'>
      <div className='flex flex-col justify-center items-center'>
        <Image src="/assets/Chen_Headshot.jpeg" width='400' height='300' className="rounded-full" alt='/'/>
        
        <div className='max-w-[1240px] pt-10 w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1> 
            Hello, I'm <span className='dark:text-[#89CFF0] text-[#5651e5]'> Chen Tzen</span> 
          </h1>
          <h1 className='py-2 text-gray-700'> An Aspiring Software Engineer </h1>
          <p className='pt-5'>
            I'm currently a sophomore at UCLA studying Computer Science. Last summer, I was an intern at Quickdesk on the Chatbot Development team. 
            I am also currently part of the OnCampus team at UCLA DevX as a full-stack developer.
            I’m currently interested in full-stack web development, mobile development, big data, and NLP. I am excited to explore new areas as well!
          </p>
          <div className='flex items-center justify-between py-10 max-w-[500px] m-auto sm:w-[80%]'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                <a href='https://www.linkedin.com/in/chentzen02/'>
                  <FaLinkedin size={35}/>
                </a>
              </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>              
              <a href='https://github.com/chentze02'>
                <FaGithubSquare size={35}/>
              </a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
              <a href='mailto:chentzen02@g.ucla.edu'>
                <AiOutlineMail size={35}/>
              </a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
              <a href='https://drive.google.com/file/d/1m_nursoPz0HOpe7i7c7_U2KyByrCuVsC/view?usp=sharing'>
                <BsFillPersonLinesFill size={35}/>
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage