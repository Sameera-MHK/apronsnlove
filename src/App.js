import React from "react";
import "./App.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Products from "./pages/Products/Products.jsx";
import Product from "./pages/Product/Product.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Error from "./pages/Error/Error.jsx";
import Almond from "./pages/Almond/Almond.jsx";
import Coconut from "./pages/Almond/Coconut.jsx";
import Chocolate from "./pages/NutButter/Chocolate.jsx";
import Nut_Butters from "./pages/NutButter/Nut_Butters.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Mission from "./pages/Mission/Mission.jsx";
import About from "./pages/About/About.jsx";
import Conditions from "./pages/t&c/Conditions.jsx";
import PrivacyPolicy from "./pages/Policy/PrivacyPolicy.jsx";

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
      { path: "/nut-butter", element: <Nut_Butters /> },
      { path: "/chocolate-chips", element: <Chocolate /> },
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
