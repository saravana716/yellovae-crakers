import React from "react";
import ProductTable from "../Components/ProductTable/ProductTable";
import Cartprice from "../Components/Checkout/Cartprice/Cartprice";
import "./Mycart.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
const MyCart = () => {
  return (
    <>
      <Navbar />
      <div className="mycartpage">
        <div className="mycartpage1">
          <div className="mycartpage2">
            <ProductTable />
          </div>
          <div className="mycartpage3">
            <Cartprice />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyCart;
