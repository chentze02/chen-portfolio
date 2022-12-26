import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SuperPeach from '../public/assets/SuperPeachSis_Gif_AdobeExpress.gif';
import LinkUpImg from '../public/assets/LinkUpDemo.gif'
import netflixImg from '../public/assets/Chen_Headshot.jpeg'
import twitchImg from '../public/assets/Chen_Headshot.jpeg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Super Peach Sister Game'
            backgroundImg={SuperPeach}
            projectUrl='/superPeach'
            tech='C/C++'
          />
          <ProjectItem
            title='LinkUp'
            backgroundImg={LinkUpImg}
            projectUrl='/linkup'
            tech='React Native, AWS Amplify'
          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;