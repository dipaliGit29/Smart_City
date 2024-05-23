import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

function MentalHospitals() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        // Fetching data from the JSON file
        const response = await fetch("/src/json/mentalHospitals.json");
        const data = await response.json();
        setHospitals(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchHospitals();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto h-screen bg-gray-900">
        <div className="flex flex-wrap justify-center bg-gray-900 text-white">
          {hospitals.map((hospital) => (
            <div
              key={hospital.name}
              className="max-w-sm m-4 mt-20 rounded overflow-hidden shadow-lg bg-gray-800"
            >
              <img className="w-full h-64" src={hospital.image} alt={hospital.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{hospital.name}</div>
                <p className="text-gray-400 text-base">
                  Address: {hospital.address}
                </p>
                <p className="text-gray-400 text-base">
                  Phone: {hospital.contact}
                </p>
                <p className="text-gray-400 text-base">
                  Email: {hospital.email}
                </p>
                <p className="text-gray-400 text-base">
                  Website: <a href={hospital.website} className="text-blue-500" target="_blank" rel="noopener noreferrer">{hospital.website}</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MentalHospitals;
