import React from 'react'
import {AiTwotonePhone,AiOutlineMail} from 'react-icons/ai'
import {FaSearchLocation,FaFacebook,FaTwitter,FaLinkedinIn} from 'react-icons/fa'


const Footer = () => {
  return (
    <section className='w-full h-full bg-slate-800 text-white'>

        <main className='w-9/12 mx-auto h-full md:flex justify-between items-center py-10'>

        {/* footer left section  */}
        <div className='space-y-6 cursor-pointer text-slate-300'>
            
            {/* search icon section */}
            <div className='flex space-x-4'>

            <FaSearchLocation className='hover:scale-110 duration-300 hover:text-blue-500' size={25}/>
            <span>Nagpur</span>
            <span>Maharashtra,India</span>

            </div>
            
            {/* phone icon section */}
            <div className='flex space-x-4'>

                <AiTwotonePhone className='hover:scale-110 duration-300 hover:text-blue-500' size={25}/>
                <span>9999999999</span>

            </div>


            {/* email icpon section */}
            <div className='flex space-x-4'>

                <AiOutlineMail className='hover:scale-110 duration-300 hover:text-blue-500' size={25}/>
                <span className='hover:underline'>smartcityconnect@gmail.com</span>

            </div>
        </div>

        {/* footer right section */}
        <div className='space-y-4'>
            <h1 className='text-2xl font-semibold'>About the company</h1>

            <p className='text-slate-200'>Our company is dedicated to pioneering,<br /> innovative solutions that empower communities <br /> and drive positive societal impact through technology </p>

            <div className='flex space-x-4 text-slate-300 cursor-pointer'>

            <FaFacebook className='hover:scale-110 duration-300 hover:text-blue-500' size={30}/>

            <FaTwitter className='hover:scale-110 duration-300 hover:text-blue-500' size={30}/>
            
            <FaLinkedinIn className='hover:scale-110 duration-300 hover:text-blue-500' size={30}/>
        </div>
        </div>

        

        </main>

    </section>
  )
}

export default Footer