import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#ecf0f3] dark:bg-black">
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-20 bg-[#ecf0f3] dark:bg-black">
        <div className="pt-10">
            <div className="h-0.5 w-full bg-[#204373] dark:bg-gray-700"></div>
        </div>
            <div className='flex flex-end justify-between py-8 max-w-[330px] m-auto sm:w-[80%]'>
            <a href='https://www.linkedin.com/in/chentzen02/'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaLinkedin/>
              </div>
            </a>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
              
              <a href='https://github.com/chentze02'>
                <FaGithubSquare/>
              </a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
              <a href='mailto:chentzen02@g.ucla.edu'>
                <AiOutlineMail/>
              </a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
              <a href='https://drive.google.com/file/d/1m_nursoPz0HOpe7i7c7_U2KyByrCuVsC/view?usp=sharing'>
                <BsFillPersonLinesFill/>
              </a>
            </div>

            
          </div>
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-center md:items-center mt-8">
                <div>
                    <p>&copy; Created with Next.js by Chen Tzen 2022</p>

                </div>
            </div>
            </div>
        </div>

    )
}