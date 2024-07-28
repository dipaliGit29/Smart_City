commimport React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdSecurity, MdStorage, MdControlCamera, MdOutlineWifiProtectedSetup, MdLocalHospital, MdHotel, MdOutlineRestaurantMenu, MdTour } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { CgGym } from 'react-icons/cg';
import { PiBuildingOffice } from 'react-icons/pi';
import { FaScrewdriverWrench } from 'react-icons/fa6';
import { GiLipstick } from 'react-icons/gi';

const API_KEY= import.meta.env.VITE_APP_WEATHER_API_KEY;

const About = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => { 
    const fetchWeather = async () => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: 'Nagpur',
            appid: API_KEY,
            units: 'metric'
          }
        });
        setWeather(response.data);
      } catch (err) {
        setError('Failed to fetch weather data');
      }
    };

    fetchWeather();
  }, []);

  return (
    <section name='about' className='w-full  h-auto flex flex-col justify-center items-center bg-black px-6 py-6'>

        {/* Weather Report Section */}
      <div className='w-11/12  mx-auto my-6 p-6 bg-gray-800 text-white rounded-lg'>
        <h2 className='text-2xl font-semibold text-center'>Current Weather in Nagpur</h2>
        {error ? (
          <p className='text-center text-red-500'>{error}</p>
        ) : weather ? (
          <div className='text-center mt-4 flex gap-4 justify-center'>
            <p className='text-xl font-bold text-red-500'>{weather.main.temp}°C</p>
            <p className='text-xl '>Feels like: <span className='text-xl font-bold underline text-red-500'> {weather.main.feels_like}°C</span></p>
            <p className='text-xl'>{weather.weather[0].description}</p>
            
            <p className='text-xl'>Humidity: {weather.main.humidity}%</p>
            <p className='text-xl'>Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        ) : (
          <p className='text-center'>Loading weather data...</p>
        )}
      </div>

      <h1 className='text-3xl text-center font-semibold text-slate-100'>Get the Best of the city at one place</h1>
      <p className='text-white text-center py-2'>Hotels, hospitals and everything...</p>

      

      <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
        <NavLink to="hospital" className='border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
          <MdLocalHospital className='p-2 size-24 bg-red-800 rounded-full text-white' size={45}/>
          <h1 className='font-semibold text-white text-xl py-2'>Hospitals</h1>
          <p className='text-white'>In Nagpur, the best hospitals are synonymous with excellence, offering cutting-edge facilities, expert medical care, and unwavering dedication to patient well-being, setting the standard for healthcare excellence in our community.</p>
        </NavLink>
        <NavLink to="hotels" className='border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
          <MdHotel className='p-2 size-24 bg-blue-400 rounded-full text-white' size={45}/>
          <h1 className='font-semibold text-white text-xl py-2'>Hotels</h1>
          <p className='text-white'>In Nagpur, the best hotels redefine hospitality, offering unparalleled luxury, impeccable service, and unforgettable experiences that epitomize elegance and comfort, making them the premier choice for discerning travelers seeking a truly exceptional stay.</p>
        </NavLink>
        <NavLink to="restaurantscat" className='border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
          <MdOutlineRestaurantMenu className='p-2 size-24 bg-yellow-400 rounded-full text-white' size={45}/>
          <h1 className='font-semibold text-white text-xl py-2'>Restaurants</h1>
          <p className='text-white'>In Nagpur, the best restaurants are culinary havens, where gastronomic delights meet impeccable service, creating memorable dining experiences that elevate the art of cuisine to new heights, making them the epitome of culinary excellence in our community.</p>
        </NavLink>
        <NavLink to="tourist" className='border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
          <MdTour className='p-2 size-24 bg-green-400 rounded-full text-white' size={45}/>
          <h1 className='font-semibold text-white text-xl py-2'>Tourist Attractions</h1>
          <p className='text-white'>In Nagpur, the top tourist attractions blend history, culture, and breathtaking scenery, captivating visitors with iconic landmarks, immersive experiences, and a rich tapestry of sights and sounds that promise unforgettable adventures, making them must-visit destinations for travelers seeking to explore our vibrant cityscape.</p>
        </NavLink>
        <NavLink to="gyms" className='border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
          <CgGym className='p-2 size-24 bg-green-950 rounded-full text-white' size={45}/>
          <h1 className='font-semibold text-white text-xl py-2'>Gyms</h1>
          <p className='text-white'>In Nagpur, the best gyms are known for their state-of-the-art equipment, expert trainers, and comprehensive fitness programs, making them the ultimate destinations for health and wellness enthusiasts in our community.</p>
        </NavLink>
        <NavLink to="hostels" className='border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
          <PiBuildingOffice className='p-2 size-24 bg-yellow-950 rounded-full text-white' size={45}/>
          <h1 className='font-semibold text-white text-xl py-2'>PG's & Hostels</h1>
          <p className='text-white'>In Nagpur, the best PGs and hostels provide comfortable living spaces, modern amenities, and a safe environment, ensuring a home-like experience for students and working professionals in our community.</p>
        </NavLink>
        <NavLink to="repaircategory" className='border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
          <FaScrewdriverWrench className='p-2 size-24 bg-gray-600 rounded-full text-white' size={45}/>
          <h1 className='font-semibold text-white text-xl py-2'>Repair Services</h1>
          <p className='text-white'>In Nagpur, the best repair services are known for their skilled technicians, prompt service, and reliable solutions, ensuring your devices and appliances are back in working order with minimal hassle.</p>
        </NavLink>
        <NavLink to="beautyspa" className='border rounded p-6 hover:scale-105 duration-300 cursor-pointer'>
          <GiLipstick className='p-2 size-24 bg-pink-500 rounded-full text-white' size={45}/>
          <h1 className='font-semibold text-white text-xl py-2'>Beauty Spa</h1>
          <p className='text-white'>In Nagpur, the best beauty spas offer a luxurious retreat, with a range of pampering treatments, skilled therapists, and rejuvenating experiences, ensuring you leave feeling refreshed, relaxed, and radiant.</p>
        </NavLink>
        
      </div>
    </section>
  );
}

export default About;
