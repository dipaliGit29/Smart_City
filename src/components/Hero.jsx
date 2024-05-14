import React from 'react';
import { ReactTyped } from "react-typed";
import bgVideo from '../assets/space.mp4';

const Hero = () => {
  return (
    <section name='home' className='w-full h-screen'>
      {/* video section */}
      <video className='w-full h-screen object-cover absolute' src={bgVideo} autoPlay muted loop />

      {/* title section */}
      <div className='absolute w-full h-full flex flex-col justify-center items-center space-y-4'>
        <h1 className='text-5xl md:text-6xl text-white font-bold font-[poppins]'>Smart City Connect</h1>
        <ReactTyped
          className='text-2xl uppercase text-slate-100 font-thin text-center'
          strings={['Be a Part of a solution, not a pollution']}
          typeSpeed={50}
          backSpeed={60}
          loop 
        />
        {/* Buttons */}
      </div>
    </section>
  );
};

export default Hero;
