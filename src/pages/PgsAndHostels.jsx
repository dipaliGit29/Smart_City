import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function PgsAndHostels() {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const response = await fetch("/src/json/hostels.json");
        const data = await response.json();
        setAccommodations(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAccommodations();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto h-screen bg-gray-900">
      <h2 className="text-white  text-center py-16 text-2xl font-extrabold">PG's & Hostels</h2>
        <div className="flex flex-wrap justify-center bg-gray-900 text-white">
          {accommodations.map((accommodation) => (
            <div
              key={accommodation.name}
              className="w-full  sm:w-1/2 md:w-1/3 lg:w-1/3 p-4"
            >
              <div className="rounded overflow-hidden shadow-lg bg-gray-800">
                <img className="w-full h-64 object-cover" src={accommodation.image} alt={accommodation.name} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{accommodation.name}</div>
                </div>
                <div className="px-6 py-4 flex flex-col gap-2">
                  <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                    Address: {accommodation.address}
                  </div>
                  <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold">
                    Phone: {accommodation.contact}
                  </div>
                  <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold">
                    Email: {accommodation.email}
                  </div>
                  <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold">
                    Website: <a href={accommodation.website} target="_blank" rel="noopener noreferrer">{accommodation.website}</a>
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

export default PgsAndHostels;
