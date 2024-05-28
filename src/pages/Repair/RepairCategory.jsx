import React from 'react'
import { MdOutlineBuild, MdDirectionsCar } from 'react-icons/md';
import { NavLink } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import { FaMotorcycle, FaSnowflake } from 'react-icons/fa';

const RepairCategory = () => {
  return (
    <>
      <Navbar />
      <section name='about' className='w-full md:h-screen flex flex-col justify-center items-center bg-black px-6 py-6'>

        <h1 className='text-3xl text-center font-semibold text-slate-100'>Get the Best Repair Services at one place</h1>

        <p className='text-white text-center py-2'>Motorcycle, Car, AC repairs, etc...</p>

        <div className='w-11/12 mx-auto grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>

          <NavLink to="/motorcyclerepair" className='w-60 h-64 grid place-items-center border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
            <FaMotorcycle className='p-2 size-24 bg-blue-500 rounded-full text-white' size={45} />
            <h1 className='font-semibold text-white text-xl py-2'>Motorcycle Repair</h1>
            <p className='text-white text-center'>Get the best motorcycle repair services at one place.</p>
          </NavLink>

          <NavLink to="/carrepair" className='w-60 h-64 grid place-items-center border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
            <MdDirectionsCar className='p-2 size-24 bg-red-700 rounded-full text-white' size={45} />
            <h1 className='font-semibold text-white text-xl py-2'>Car Repair</h1>
            <p className='text-white text-center'>Best car repair services in the city.</p>
          </NavLink>

          <NavLink to="/acrepair" className='w-60 h-64 grid place-items-center border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
            <FaSnowflake className='p-2 size-24 bg-blue-400 rounded-full text-white' size={45} />
            <h1 className='font-semibold text-white text-xl py-2'>AC Repair</h1>
            <p className='text-white text-center'>Best AC repair services available.</p>
          </NavLink>

          {/* <NavLink to="/general-repair" className='w-60 h-64 grid place-items-center border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
            <MdOutlineBuild className='p-2 size-24 bg-yellow-400 rounded-full text-white' size={45} />
            <h1 className='font-semibold text-white text-xl py-2'>General Repair</h1>
            <p className='text-white text-center'>All kinds of general repair services.</p>
          </NavLink> */}

        </div>
      </section>
    </>
  )
}

export default RepairCategory;
