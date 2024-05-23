import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

function ChildrenHospital() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        // Fetching data from the JSON file
        const response = await fetch("/src/json/childrenHospitals.json");
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
                <p className="text-gray-400 text-base">{hospital.description}</p>
              </div>
              <div className="px-6 py-4 flex flex-col gap-2">
                <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                  Address: {hospital.address}
                </div>
                <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold">
                  Phone: {hospital.phone}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ChildrenHospital;
