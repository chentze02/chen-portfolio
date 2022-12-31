import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import sigmaImg from '../public/assets/SigmaX.png'
import bankImg from '../public/assets/BankTicket.png'
import timetableImg from '../public/assets/Timetable.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-20 pb-40'>

        <div className='relative flex flex-auto flex-wrap items-center justify-center h-fit w-fit shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
        <video autoPlay loop muted className='rounded-xl group-hover:opacity-10 stretch'>
        <source src="/assets/LinkUpDemo.mp4" type="video/mp4" />
        </video>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>LinkUp</h3>
        <p className='pb-4 pt-2 text-white text-center'>React Native, AWD Amplify</p>
        <Link href='https://github.com/chentze02/linkup'>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Github</p>
        </Link>
        </div>
        </div>

        <div className='relative flex flex-auto flex-wrap items-center justify-center h-fit w-fit shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
        <Image className='rounded-xl group-hover:opacity-10 stretch' src={sigmaImg} alt='/' /> 
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>SigmaX</h3>
        <p className='pb-4 pt-2 text-white text-center'>React Native, Python, PybBluez</p>
        <Link href='https://github.com/chentze02/Sigmax_App'>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Github</p>
        </Link>
        </div>
        </div>

        <div className='relative flex flex-auto flex-wrap items-center justify-center h-fit w-fit shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
            <video autoPlay loop muted className='rounded-xl group-hover:opacity-10 stretch'>
            <source src="/assets/SuperPeachSis.webm" type="video/webm" />
            </video>
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl text-white tracking-wider text-center'>Super Peach Sister Game</h3>
            <p className='pb-4 pt-2 text-white text-center'>C/C++</p>
            <Link href='/superPeach'>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
            </Link>
            </div>
        </div>


          <ProjectItem
            title='Bank Ticket Counter'
            backgroundImg={bankImg}
            projectUrl='/bankCounter'
            tech='React JS'

          />

        <ProjectItem
            title='Timetable Calender'
            backgroundImg={timetableImg}
            projectUrl='/timetable'
            tech='React JS'

          />

        </div>
      </div>
    </div>
  );
};

export default Projects;