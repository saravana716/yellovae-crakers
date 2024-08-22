/* eslint-disable eqeqeq */
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Checkout2 from "../Components/Checkout/Checkout2/Checkout2";
import Paymentinfo from "../Components/Checkout/Paymentinfo/Paymentinfo";
import Cartprice from "../Components/Checkout/Cartprice/Cartfinal";
import "./CheckOutpage.css";
import { useSelector } from "react-redux";

const Checkoutpage = () => {
  const step = useSelector((state) => state.step);
  return (
    <>
      <Navbar />
      <div className="checkoutpage1">
        <div className="checkoutpage2">
          <div className="checkoutpage3">
            {/* <Checkout1 /> */}
            <Checkout2 />
            {step == 2 ? <Paymentinfo /> : null}
          </div>
          <div className="checkpage4">
            <Cartprice />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkoutpage;
