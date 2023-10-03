import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Error from './Component/Shared/Error/Error.jsx';
import Home from './Component/Pages/HOME/Home';
import CarList from './Component/Pages/Cars/CarList.jsx';
import CarDetails from './Component/Pages/Cars/CarDetails.jsx';
import Contact from './Component/Pages/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      }, {
        path: "/cars",
        element:<CarList></CarList>,
      },
      
      {
        path: "/car/:id",
        element:<CarDetails></CarDetails>,
        loader:({params}) => fetch("/cars.json"),
      },
      {
        path: "contact",
        element:<Contact></Contact>,
      },
 
      {
        path: "/cars/page/:page",
        element:<CarList></CarList>,
      },
    ],
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <RouterProvider router={router} />


  </React.StrictMode>,


)
