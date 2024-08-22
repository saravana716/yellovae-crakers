/* eslint-disable eqeqeq */
import React from "react";
import "./Cartprice.css";
import { useSelector } from "react-redux";

const Cartfinal = () => {
  const cartdata = useSelector((state) => state.cartdata);

  const totalPrice = cartdata.reduce((total, cartItem) => {
    return total + cartItem.offer_price * cartItem.quantity;
  }, 0);
  const discountPrice = cartdata.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);
  return (
    <>
      <div className="Cartprice">
        <div className="Cartprice1">
          <h4>Cart Price Details</h4>
        </div>
        <div className="Cartprice2">
          <div className="Pricelist">
            <p>
              Price ({cartdata.length} {cartdata.length == 1 ? "item" : "items"}
              )
            </p>
            <p>Discount</p>
          </div>
          <div className="Pricelist">
            <p>&#8377; {Number(discountPrice).toLocaleString("en-IN")}</p>
            <p>
              &#8377;{" "}
              {Number(discountPrice - totalPrice).toLocaleString("en-IN")}
            </p>
          </div>
        </div>
        <div className="Totalprice">
          <h4>Total</h4>
          <h4>&#8377; {Number(totalPrice).toLocaleString("en-IN")}</h4>
        </div>
      </div>
    </>
  );
};

export default Cartfinal;
