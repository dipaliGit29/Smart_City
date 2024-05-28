import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import Signup from "./components/Signup.jsx";
import { ProtectedRoute } from "./protectedRoute/ProtetedRoute.jsx";
import HotelList from "./pages/HotelList.jsx";
import TouristPlaceList from "./pages/TouristPlacesList.jsx";
import HospitalCategory from "./pages/Hospital/HospitalCategory.jsx";
import EyeHospitalList from "./pages/Hospital/EyeHospitalList.jsx";
import MultispecialityHospital from "./pages/Hospital/MultispecialityHospital.jsx";
import ChildrenHospital from "./pages/Hospital/ChildrenHospital.jsx";
import VeterinaryHospitalList from "./pages/Hospital/VeterinaryHospitals.jsx";
import MaternityHospital from "./pages/Hospital/MaternityHospitals.jsx";
import MentalHospitals from "./pages/Hospital/MentalHospitals.jsx";
import RestaurantCateory from "./pages/Restaurants/RestaurantCategory.jsx";
import Cafes from "./pages/Restaurants/Cafes.jsx";
import VegRestaurants from "./pages/Restaurants/VegRestaurants.jsx";
import NonVegRestaurants from "./pages/Restaurants/NonVegRestaurants.jsx";
import Pubs from "./pages/Restaurants/Pubs.jsx";
import Gyms from "./pages/Gyms.jsx";
import PgsAndHostels from "./pages/PgsAndHostels.jsx";
import BeautyAndSpa from "./pages/BeautyAndSpa.jsx";
import RepairCategory from "./pages/Repair/RepairCategory.jsx";
import MotorcycleRepair from "./pages/Repair/MotorCycleRepair.jsx";
import CarRepair from "./pages/Repair/CarRepair.jsx";
import AcRepair from "./pages/Repair/AcRepair.jsx";
import PrivateHospitals from "./pages/Hospital/PrivateHospitals.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* <Route index element={<Login/>} /> */}
      <Route
        index
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="hotels" element={<HotelList />} />
      <Route path="tourist" element={<TouristPlaceList />} />
      {/* hospitals */}
      <Route path="hospital" element={<HospitalCategory />}/> 
      <Route path="eyehospital" element={<EyeHospitalList />} />
      <Route path="multispeciality" element={<MultispecialityHospital />} />
      <Route path="childrenhospital" element={<ChildrenHospital />} />
      <Route path="veterinaryhospitals" element={<VeterinaryHospitalList />} />
      <Route path="maternityhospitals" element={<MaternityHospital />} />
      <Route path="mentalhospitals" element={<MentalHospitals />} />
      <Route path="privatehospitals" element={<PrivateHospitals />} />
      {/* Restaurants */}
      <Route path="restaurantscat" element={<RestaurantCateory />} />
      <Route path="cafes" element={<Cafes />} />
      <Route path="vegrestro" element={<VegRestaurants />} />
      <Route path="nonvegrestro" element={<NonVegRestaurants />} />
      <Route path="pubs" element={<Pubs />} />
      {/* Restaurant ends */}
      <Route path="gyms" element={<Gyms />} />
      <Route path="hostels" element={<PgsAndHostels />} />
      <Route path="beautyspa" element={<BeautyAndSpa />} />
      {/* repair */}
      <Route path="repaircategory" element={<RepairCategory />} />
      <Route path="motorcyclerepair" element={<MotorcycleRepair />} />
      <Route path="carrepair" element={<CarRepair />} />
      <Route path="acrepair" element={<AcRepair />} />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={router} />
  </div>
);
