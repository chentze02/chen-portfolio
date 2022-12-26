import Image from 'next/image'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

function MainPage() {
  return (
    <div id='about' className='w-full h-screen text-center'>
      <div className='flex flex-col justify-center items-center'>
        <Image src="/../public/assets/Chen_Headshot.jpeg" width='300' height='240' className="rounded-full" alt='/'/>
        
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1> 
            Hello, I'm <span className='text-[#89CFF0]'> Chen Tzen</span> 
          </h1>
          <h1 className='py-2 text-gray-700'> An Aspiring Software Engineer </h1>
          <p>
            I'm currently a sophomore at UCLA studying Computer Science. Last summer, I was an intern at Quickdesk on the Chatbot Development team. 
            Previously, I was a research intern at HCI Research @ UCLA working on Explainable AI projects.
            I’m currently interested in full-stack web development, mobile development, big data, and NLP. I am excited to explore new areas as well!
          </p>
          <div className='flex items-center justify-between py-8 max-w-[330px] m-auto sm:w-[80%]'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
              <FaLinkedin/>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
              <FaGithubSquare/>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
              <AiOutlineMail/>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
              <BsFillPersonLinesFill/>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage