import React from "react";
import homecart1 from "../../Assets/images/logo.jpg";
import discount from "../../Assets/images/dis.svg";
import "./Homecart.css";
const Homecart = () => {
  return (
    <>
      <div className="Homecart">
        <img src={discount} alt="" className="dis" />
        <div className="Homecart1">
          <img src={homecart1} alt="" />
        </div>
        <h4>10 cm Parrot / Laxmi Deluxe 4"</h4>
      </div>
    </>
  );
};

export default Homecart;
