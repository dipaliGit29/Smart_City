import React from 'react'
import { MdSecurity,MdStorage,MdControlCamera,MdOutlineWifiProtectedSetup } from 'react-icons/md';
import { MdLocalHospital } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdTour } from "react-icons/md";
import { NavLink } from 'react-router-dom';
// import hospital from '../assets/hospital.png'

const About = () => {
  return (
    
    <section name='about' className='w-full md:h-screen flex flex-col justify-center items-center bg-black px-6 py-6'>

        <h1 className='text-3xl text-center font-semibold text-slate-100'>Get the Best of the city at one place</h1>

        <p className='text-white text-center py-2'>Hotels,hospitals and everything</p>

        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>

            <NavLink to="hospital" className='border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
                {/* <MdSecurity className='p-2 bg-blue-400 rounded-full text-white' size={45}/> */}
                <MdLocalHospital className='p-2 size-24 bg-red-800 rounded-full text-white' size={45}/>
               {/* <div className='h-10 w-8'>
               <img src={hospital} alt="" srcset="" className='' />
               </div> */}

                <h1 className='font-semibold text-white text-xl py-2'>Hospitals</h1>

                <p className='text-white'>In Nagpur, the best hospitals are synonymous with excellence, offering cutting-edge facilities, expert medical care, and unwavering dedication to patient well-being, setting the standard for healthcare excellence in our community.</p>
            </NavLink>


            <NavLink  to="hotels" className='border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
                {/* <MdStorage className='p-2 bg-blue-400 rounded-full text-white' size={45}/> */}
                <MdHotel className='p-2 size-24 bg-blue-400 rounded-full text-white' size={45} />

                <h1 className='font-semibold text-white text-xl py-2'>Hotels</h1>

                <p className='text-white'>In Nagpur, the best hotels redefine hospitality, offering unparalleled luxury, impeccable service, and unforgettable experiences that epitomize elegance and comfort, making them the premier choice for discerning travelers seeking a truly exceptional stay.</p>
            </NavLink>


            <div className='border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
                {/* <MdControlCamera className='p-2 bg-blue-400 rounded-full text-white' size={45}/> */}
                <MdOutlineRestaurantMenu className='p-2 size-24 bg-yellow-400 rounded-full text-white' size={45}/>
                <h1 className='font-semibold text-white text-xl py-2'>Restaurants</h1>

                <p className='text-white'>In Nagpur, the best restaurants are culinary havens, where gastronomic delights meet impeccable service, creating memorable dining experiences that elevate the art of cuisine to new heights, making them the epitome of culinary excellence in our community.</p>
            </div>


            <NavLink to="tourist" className='border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
                {/* <MdOutlineWifiProtectedSetup className='p-2 bg-blue-400 rounded-full text-white' size={45}/> */}
                <MdTour className='p-2 size-24 bg-green-400 rounded-full text-white' size={45}/>
                <h1 className='font-semibold text-white text-xl py-2'>Tourist Attractions</h1>

                <p className='text-white'>In Nagpur, the top tourist attractions blend history, culture, and breathtaking scenery, captivating visitors with iconic landmarks, immersive experiences, and a rich tapestry of sights and sounds that promise unforgettable adventures, making them must-visit destinations for travelers seeking to explore our vibrant cityscape.</p>
            </NavLink>

            




        </div>


    </section>
  )
}

export default About