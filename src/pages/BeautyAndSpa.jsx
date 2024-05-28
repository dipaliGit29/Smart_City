import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function BeautyAndSpa() {
  const [beautyAndSpaData, setBeautyAndSpaData] = useState([]);

  useEffect(() => {
    const fetchBeautyAndSpaData = async () => {
      try {
        const response = await fetch("/src/json/beautyspa.json");
        const data = await response.json();
        setBeautyAndSpaData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBeautyAndSpaData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto h-screen bg-gray-900">
        <div className="flex flex-wrap justify-center bg-gray-900 text-white">
          {beautyAndSpaData.map((business) => (
            <div
              key={business.name}
              className="w-full mt-20 sm:w-1/2 md:w-1/3 lg:w-1/3 p-4"
            >
              <div className="rounded overflow-hidden shadow-lg bg-gray-800">
                <img className="w-full h-64 object-cover" src={business.image} alt={business.name} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{business.name}</div>
                </div>
                <div className="px-6 py-4 flex flex-col gap-2">
                  <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                    Address: {business.address}
                  </div>
                  <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold">
                    Phone: {business.contact}
                  </div>
                  <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold">
                    Email: {business.email}
                  </div>
                  <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold">
                    Website: <a href={business.website} target="_blank" rel="noopener noreferrer">{business.website}</a>
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

export default BeautyAndSpa;
