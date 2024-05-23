import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

function Cafes() {
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    const fetchCafes = async () => {
      try {
        const response = await fetch("/src/json/cafes.json");
        const data = await response.json();
        setCafes(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCafes();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto h-screen bg-gray-900">
       {/* <h3 className="text-white text-center">Best cafes</h3> */}
        <div className="flex flex-wrap justify-center bg-gray-900 text-white">
          {cafes.map((cafe) => (
            <div
              key={cafe.name}
              className="max-w-sm m-4 mt-20 rounded overflow-hidden shadow-lg bg-gray-800"
            >
              <img className="w-full h-64" src={cafe.image} alt={cafe.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{cafe.name}</div>
                <p className="text-gray-400 text-base">{cafe.description}</p>
              </div>
              <div className="px-6 py-4 flex flex-col gap-2">
                <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                  Address: {cafe.address}
                </div>
                <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold">
                  Phone: {cafe.contact}
                </div>
                <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold">
                  Email: {cafe.email}
                </div>
                <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold">
                  Website: <a href={cafe.website} target="_blank" rel="noopener noreferrer">{cafe.website}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cafes;
