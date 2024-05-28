import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function HotelList() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch("/src/json/hotels.json");
        const data = await response.json();
        setHotels(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto h-screen bg-gray-900">
      <h2 className="text-white  text-center py-16 text-2xl font-extrabold">Hotels</h2>
        <div className="flex flex-wrap  justify-center bg-gray-900 text-white">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="max-w-sm m-4  rounded overflow-hidden shadow-lg bg-gray-800"
            >
              <img className="w-full h-64" src={hotel.image} alt={hotel.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{hotel.name}</div>
                <p className="text-gray-400 text-base">{hotel.description}</p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                  {hotel.location}
                </span>
                <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold">
                  {hotel.price}
                </span>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-400 text-base">
                  Phone: {hotel.contact.phone}
                </p>
                <p className="text-gray-400 text-base">
                  Email: {hotel.contact.email}
                </p>
                <p className="text-gray-400 text-base">
                  Website: <a href={hotel.contact.website}>{hotel.contact.website}</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HotelList;
