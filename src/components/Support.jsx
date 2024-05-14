import React from 'react'
import { BsLaptop } from 'react-icons/bs';
import { IoIosAlert } from 'react-icons/io';
import { AiOutlineUser } from 'react-icons/ai';



const Support = () => {
  return (
    <section name='support' className='w-full bg-slate-100'>
        {/* tittle section */}
        <div className='w-9/12 mx-auto'>
            <h1 className='text-center py-4 text-3xl font-bold text-gray-500 uppercase'>About</h1>

            <p className='text-center text-xl text-gray-700'>
            A connected urban environment leveraging technology to enhance sustainability, efficiency, and quality of life for its residents.
            </p>
        </div><br />

        {/* card section */}
        <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>

            <div className='bg-slate-800 rounded-md space-y-4 p-4 my-6 shadow-lg shadow-green-300'>

                <BsLaptop size={50} className=' p-2 bg-green-500 rounded-full mt-[-40px]'/>

                <h1 className='text-2xl  font-semibold text-white'>Vision</h1>

                <p className='text-slate-300 pb-2'>Our smart city initiative aims to transform urban living by harnessing cutting-edge technologies to create a more sustainable and efficient environment.</p>
            </div>

            <div className='bg-slate-800 rounded-md space-y-4 p-4 my-6 shadow-lg shadow-green-300'>

                <IoIosAlert size={50} className=' p-2 bg-green-500 rounded-full mt-[-40px]'/>

                <h1 className='text-2xl  font-semibold text-white'>Mission</h1>

                <p className='text-slate-300 pb-2'> Through collaboration with stakeholders, innovation hubs, and citizens, we strive to implement integrated solutions that address urban challenges, improve infrastructure, and enhance the overall quality of life.</p>
            </div>

            <div className='bg-slate-800 rounded-md space-y-4 p-4 my-6 shadow-lg shadow-green-300'>

                <AiOutlineUser size={50} className=' p-2 bg-green-500 rounded-full mt-[-40px]'/>

                <h1 className='text-2xl  font-semibold text-white'>Values</h1>

                <p className='text-slate-300 pb-2'>We are committed to transparency, inclusivity, and responsiveness, ensuring that our smart city initiatives prioritize equity, accessibility, and the well-being of all residents.</p>
            </div>
        </div>

    </section> 
  )
}

export default Support