import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function Gyms() {
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    const fetchGyms = async () => {
      try {
        const response = await fetch("/src/json/gyms.json");
        const data = await response.json();
        setGyms(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchGyms();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto h-screen bg-gray-900">
        <div className="flex flex-wrap justify-center bg-gray-900 text-white">
          {gyms.map((gym) => (
            <div
              key={gym.name}
              className="w-full mt-20 sm:w-1/2 md:w-1/3 lg:w-1/3 p-4"
            >
              <div className="rounded overflow-hidden shadow-lg bg-gray-800">
                <img className="w-full h-64 object-cover" src={gym.image} alt={gym.name} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{gym.name}</div>
                </div>
                <div className="px-6 py-4 flex flex-col gap-2">
                  <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                    Address: {gym.address}
                  </div>
                  <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold">
                    Phone: {gym.contact}
                  </div>
                  <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold">
                    Email: {gym.email}
                  </div>
                  <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold">
                    Website: <a href={gym.website} target="_blank" rel="noopener noreferrer">{gym.website}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gyms;
