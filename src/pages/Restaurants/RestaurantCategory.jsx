import React from 'react'
import {  MdLocalCafe, MdOutlinePets } from 'react-icons/md';
import { NavLink } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import { FaBaby, FaBuilding, FaRegEye } from 'react-icons/fa';
import { FaPersonPregnant } from 'react-icons/fa6';
import { GiBrain, GiChickenOven } from 'react-icons/gi';
import { PiBuildingApartment } from 'react-icons/pi';
import { LuVegan } from 'react-icons/lu';
import { CiBeerMugFull } from 'react-icons/ci';
const RestaurantCateory = () => {
  return (
    <>
    <Navbar/>
    <section name='about' className='w-full md:h-screen flex flex-col justify-center items-center bg-black px-6 py-6'>

        <h1 className='text-3xl text-center font-semibold text-slate-100'>Get the Best Restaurants at one place </h1>

        <p className='text-white text-center py-2'> Veg ,Non-veg , Cafes , etc...</p>

        <div className='w-11/12 mx-auto grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>

            <NavLink to="/vegrestro" className='w-60 h-64 grid place-items-center border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
                
                <LuVegan className='p-2 size-24 bg-green-500 rounded-full text-white' size={45}/>
                {/* <img className="w-24 h-24" src="https://tse1.mm.bing.net/th?id=OIP.ADJx8eJlx4PpilCtg0JJ5wHaIK&pid=Api&P=0&h=180" alt="Dhaba Image" /> */}
              

                <h1 className='font-semibold text-white text-xl py-2'>Veg Restaurants</h1>

                <p className='text-white text-center'>Get the best veg restaurants at one place.</p>
            </NavLink>


            <NavLink  to="/nonvegrestro" className='w-60 h-64 grid place-items-center border  rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
                {/* <MdStorage className='p-2 bg-blue-400 rounded-full text-white' size={45}/> */}
                <GiChickenOven className='p-2 size-24 bg-red-700 rounded-full text-white' size={45} />

                <h1 className='font-semibold text-white text-xl py-2'>Non-veg Restro</h1>

                <p className='text-white text-center'>Best Non-veg restaurants in Nagpur.</p>
            </NavLink>


            <NavLink to="/cafes" className='w-60 h-64 grid place-items-center border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
                {/* <MdControlCamera className='p-2 bg-blue-400 rounded-full text-white' size={45}/> */}
                <MdLocalCafe className='p-2 size-24 bg-orange-400 rounded-full text-white' size={45}/>
                <h1 className='font-semibold text-white text-xl py-2'>Cafes</h1>

                <p className='text-white text-center'>Best cafes in nagpur</p>
            </NavLink>


            <NavLink to="/pubs" className='w-60 h-64  grid place-items-center border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
                {/* <MdOutlineWifiProtectedSetup className='p-2 bg-blue-400 rounded-full text-white' size={45}/> */}
                <CiBeerMugFull className='p-2 size-24 bg-yellow-400 rounded-full text-white' size={45}/>
                <h1 className='font-semibold text-white text-xl py-2'>Pubs</h1>

                <p className='text-white text-center'>Best Pubs in the town.</p>
            </NavLink>

            
            
        </div>


    </section>
    </>
  )
}

export default RestaurantCateory