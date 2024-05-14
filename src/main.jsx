import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import Signup from './components/Signup.jsx';
import { ProtectedRoute } from './protectedRoute/ProtetedRoute.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* <Route index element={<Login/>} /> */}
      <Route index element={<ProtectedRoute>
        <Home/>
      </ProtectedRoute>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={router} />
    
  </div>
);
