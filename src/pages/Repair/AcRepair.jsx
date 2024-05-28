import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

function AcRepair() {
  const [acRepairShops, setAcRepairShops] = useState([]);

  useEffect(() => {
    const fetchAcRepairShops = async () => {
      try {
        const response = await fetch("/src/json/acrepair.json");
        const data = await response.json();
        setAcRepairShops(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAcRepairShops();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto h-screen bg-gray-900">
      <h2 className="text-white  text-center py-16 text-2xl font-extrabold">AC Repair Shops</h2>
        <div className="flex flex-wrap justify-center bg-gray-900 text-white">
          {acRepairShops.map((shop) => (
            <div
              key={shop.name}
              className="w-full  sm:w-1/2 md:w-1/3 lg:w-1/3 p-4"
            >
              <div className="rounded overflow-hidden shadow-lg bg-gray-800">
                <img className="w-full h-64 object-cover" src={shop.image} alt={shop.name} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{shop.name}</div>
                </div>
                <div className="px-6 py-4 flex flex-col gap-2">
                  <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                    Address: {shop.address}
                  </div>
                  <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold">
                    Phone: {shop.contact}
                  </div>
                  <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold">
                    Email: {shop.email}
                  </div>
                  <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold">
                    Website: <a href={shop.website} target="_blank" rel="noopener noreferrer">{shop.website}</a>
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

export default AcRepair;
