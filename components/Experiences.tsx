import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import kidoImg from '../public/assets/kidocode.png';
import quickImg from '../public/assets/quickdesk.png';

const Experiences = () => {
  return (
    <div id='experiences' className='w-full md:h-screen flex items-center py-16'>
      <div className='flex flex-col max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            Experiences
          </p>
          <h2 className='py-4 dark:text-[#ADD8E6]'>Quickdesk.io</h2>
        <ul className='py-2 text-gray-600 dark:text-[#ebeaed]'>
        <li>
            - Developed automated chatbot utilizing web app and API, communicating with the Rasa Kubernetes (K8s) cluster through Http, 
            SSH and kubectl
        </li>
        <li>
        - Designed API endpoints to identify clients (Nest.js) and linked entities relations using TypeORM for records in database (PostgresSQL)
       
        </li>

        <li>
        - Implemented re-usable automated emailing service (Gmail & SMTP) along with user authentication using Passport.js and OAuth2
        </li>

        <li>
        - Devise K8 namespace for individual organization while deploying a Rasa Open Source container behind a service in each namespace
        </li>
          </ul>
         
        </div>
        <div className='w-full h-auto m-auto flex items-center justify-center p-4 group hover:scale-105 ease-in duration-300'>
          <Image src={quickImg} className=' rounded-xl' alt='/' />
          <div className='hidden group-hover:block rounded-xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#ecf0f3]'>
            <h3 className='text-2xl text-black pt-5 tracking-wider text-center'>Quickdesk.io</h3>
            <p className='pb-4 pt-1 text-black text-center'>March 2022 - August 2022</p>
        </div>
        </div>

        <div className='col-span-2'>
          <h2 className='py-4 dark:text-[#ADD8E6]'>KidoCode</h2>
        <ul className='py-2 text-gray-600 dark:text-[#ebeaed]'>
        <li>
            - Led daily classes with 5-10 students on Python and Web Development for period of internship
        </li>
        <li>
        - Collaborated with frontend and backend senior engineers to push out a full-fledged website redesign (React.js, HTML/CSS)
        </li>

        <li>
        - Fixed UI bugs on search results page and implemented a more responsive design to better fit mobile devices (React.js, CSS Flexbox)
        </li>

        <li>
        - Created content and published questions for student portal (Cubie & Kportal) used by 5000+ students across Malaysia
        </li>
          </ul>
         
        </div>
        <div className='w-full h-auto m-auto flex items-center justify-center p-4 group hover:scale-105 ease-in duration-300'>
          <Image src={kidoImg} className=' rounded-xl' alt='/' />
          <div className='hidden group-hover:block rounded-xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#ecf0f3]'>
            <h3 className='text-2xl text-black pt-5 tracking-wider text-center'>KidoCode</h3>
            <p className='pb-4 pt-1 text-black text-center'>July 2021 - November 2021</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;

