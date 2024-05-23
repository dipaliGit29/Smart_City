import React from 'react'
import {  MdOutlinePets } from 'react-icons/md';
import { NavLink } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import { FaBaby, FaBuilding, FaRegEye } from 'react-icons/fa';
import { FaPersonPregnant } from 'react-icons/fa6';
import { GiBrain } from 'react-icons/gi';
import { PiBuildingApartment } from 'react-icons/pi';
const HospitalCategory = () => {
  return (
    <>
    <Navbar/>
    <section name='about' className='w-full md:h-screen flex flex-col justify-center items-center bg-black px-6 py-6'>

        <h1 className='text-3xl text-center font-semibold text-slate-100'>Get the Best Hospitals </h1>

        <p className='text-white text-center py-2'>Eye hospitals , Multispeciality , Children , etc...</p>

        <div className='w-11/12 mx-auto grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>

            <NavLink to="/eyehospital" className='w-60 h-64 grid place-items-center border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
                {/* <MdSecurity className='p-2 bg-blue-400 rounded-full text-white' size={45}/> */}
                <FaRegEye className='p-2 size-24 bg-slate-500 rounded-full text-white' size={45}/>
              

                <h1 className='font-semibold text-white text-xl py-2'>Eye Hospitals</h1>

                <p className='text-white text-center'>Best Eye  Hospitals in the Nagpur.</p>
            </NavLink>


            <NavLink  to="/multispeciality" className='w-60 h-64 grid place-items-center border  rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
                {/* <MdStorage className='p-2 bg-blue-400 rounded-full text-white' size={45}/> */}
                <FaBuilding className='p-2 size-24 bg-slate-500 rounded-full text-white' size={45} />

                <h1 className='font-semibold text-white text-xl py-2'>Multispeciality</h1>

                <p className='text-white text-center'>Best Multispeciality hospitals.</p>
            </NavLink>


            <NavLink to="/childrenhospital" className='w-60 h-64 grid place-items-center border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
                {/* <MdControlCamera className='p-2 bg-blue-400 rounded-full text-white' size={45}/> */}
                <FaBaby className='p-2 size-24 bg-slate-500 rounded-full text-white' size={45}/>
                <h1 className='font-semibold text-white text-xl py-2'>Children Hospital</h1>

                <p className='text-white text-center'>Best children hospitals in nagpur</p>
            </NavLink>


            <NavLink to="/veterinaryhospitals" className='w-60 h-64  grid place-items-center border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
                {/* <MdOutlineWifiProtectedSetup className='p-2 bg-blue-400 rounded-full text-white' size={45}/> */}
                <MdOutlinePets className='p-2 size-24 bg-slate-500 rounded-full text-white' size={45}/>
                <h1 className='font-semibold text-white text-xl py-2'>Veterinary Hospitals</h1>

                <p className='text-white text-center'>Best Hospitals for your pets.</p>
            </NavLink>

            <NavLink to="/maternityhospitals" className='w-60 h-64 grid place-items-center border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
                {/* <MdOutlineWifiProtectedSetup className='p-2 bg-blue-400 rounded-full text-white' size={45}/> */}
                <FaPersonPregnant className='p-2 size-24 bg-slate-500 rounded-full text-white' size={45}/>
                <h1 className='font-semibold text-white text-xl py-2'>Maternity Hospitals</h1>

                <p className='text-white text-center'>Best Maternity hospitals Nagpur.</p>
            </NavLink>

            <NavLink to="/mentalhospitals" className='w-60 h-64 grid place-items-center border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
                {/* <MdOutlineWifiProtectedSetup className='p-2 bg-blue-400 rounded-full text-white' size={45}/> */}
                <GiBrain className='p-2 size-24 bg-slate-500 rounded-full text-white' size={45}/>
                <h1 className='font-semibold text-white text-xl py-2'>Mental Hospitals</h1>

                <p className='text-white text-center'>All mental hospitals in nagpur.</p>
            </NavLink>

            <NavLink to="/mentalhospitals" className='w-60 h-64 grid place-items-center border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
                {/* <MdOutlineWifiProtectedSetup className='p-2 bg-blue-400 rounded-full text-white' size={45}/> */}
                <PiBuildingApartment className='p-2 size-24 bg-slate-500 rounded-full text-white' size={45}/>
                <h1 className='font-semibold text-white text-xl py-2'>Private Hospitals</h1>

                <p className='text-white text-center'>All private hospitals in nagpur.</p>
            </NavLink>

            
        </div>


    </section>
    </>
  )
}

export default HospitalCategory