import React, { useState } from 'react';

const CityDropdown = () => {
    const [open, setOpen] = useState(false);
    const cities = ['Nagpur','Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Pune'];

    return (
        <div className='relative'>
            <button onClick={() => setOpen(!open)} className='text-slate-100 uppercase font-semibold'>
                Nagpur
            </button>
            {open && (
                <ul className='absolute bg-slate-900 text-slate-100 mt-2 w-40 py-2 rounded shadow-lg'>
                    {cities.map((city) => (
                        <li key={city} className='px-4 py-2 hover:bg-blue-500/40'>
                            {city}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CityDropdown;
