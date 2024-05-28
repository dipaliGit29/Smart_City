import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

function VegRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("/src/json/vegRestro.json");
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto h-screen bg-gray-900">
        <div className="flex flex-wrap justify-center bg-gray-900 text-white">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.name}
              className="w-full mt-20 sm:w-1/2 md:w-1/3 lg:w-1/3 p-4"
            >
              <div className="rounded overflow-hidden shadow-lg bg-gray-800">
                <img className="w-full h-64 object-cover" src={restaurant.image} alt={restaurant.name} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{restaurant.name}</div>
                </div>
                <div className="px-6 py-4 flex flex-col gap-2">
                  <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                    Address: {restaurant.address}
                  </div>
                  <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold">
                    Phone: {restaurant.contact}
                  </div>
                  <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold">
                    Email: {restaurant.email}
                  </div>
                  <div className="block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold">
                    Website: <a href={restaurant.website} target="_blank" rel="noopener noreferrer">{restaurant.website}</a>
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

export default VegRestaurants;
