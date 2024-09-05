import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Components/AboutComp/About";
import Contact from "../Components/Contact/Contact";
import Listofproducts from "../Components/MyAbout/Listofproducts/Listofproducts";
import Checkoutpage from "../Pages/Checkoutpage";
import LoginorSignup from "../Pages/LoginorSignup";
import MyCart from "../Pages/MyCart";
import InvoicePage from "../Pages/InvoicePage";
import { useSelector } from "react-redux";

const Routings = () => {
  const orderid = useSelector((state) => state.orderid);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Listofproducts />} />
        <Route path="/products/:categoryId" element={<Listofproducts />} />
        <Route path="/checkout" element={<Checkoutpage />} />
        <Route path="/register" element={<LoginorSignup />} />
        <Route path="/mycart" element={<MyCart />} />
        {orderid !== null && (
          <Route path="/invoice" element={<InvoicePage />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Routings;
