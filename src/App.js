import React from "react";
import "./App.scss";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error/Error";
import Almond from "./pages/Almond/Almond";
import Coconut from "./pages/Almond/Coconut";
import Chocolate from "./pages/NutButter/Chocolate";
import Nut_Butters from "./pages/NutButter/Nut_Butters";
import Contact from "./pages/Contact/Contact";
import Mission from "./pages/Mission/Mission";
import About from "./pages/About/About";
import Conditions from "./pages/t&c/Conditions";
import PrivacyPolicy from "./pages/Policy/PrivacyPolicy";

// pages for the router

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products/:id", element: <Products /> },
      { path: "/product/:id", element: <Product /> },
      { path: "/almond-flour", element: <Almond /> },
      { path: "/coconut-sugar", element: <Coconut /> },
      { path: "/nut-butter", element: <Chocolate /> },
      { path: "/chocolate-chips", element: <Nut_Butters /> },
      { path: "/contact", element: <Contact /> },
      { path: "/our-mission", element: <Mission /> },
      { path: "/about", element: <About /> },
      { path: "/terms-&-conditions", element: <Conditions /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },

      { path: "*", element: <Error /> },
    ],
  },
]);

//main component

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
