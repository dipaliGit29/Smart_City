import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function TouristPlaceList() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        // Fetching data from the JSON file
        const response = await fetch("/src/json/tourist.json");
        const data = await response.json();
        setPlaces(data.tourist_places);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPlaces();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto h-screen bg-gray-900">
        <div className="flex flex-wrap justify-center bg-gray-900 text-white">
          {places.map((place) => (
            <div
              key={place.name}
              className="max-w-sm m-4 mt-20 rounded overflow-hidden shadow-lg bg-gray-800"
            >
              <img className="w-full" src={place.image_url} alt={place.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{place.name}</div>
                <p className="text-gray-400 text-base">{place.description}</p>
              </div>
              <div className="px-6 py-4 flex flex-col gap-2">
                <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                  Location: {place.location}
                </div>
                <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold">
                  Distance from center: {place.distance_from_center_km} km
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TouristPlaceList;
