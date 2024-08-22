import React from "react";
import "./Details.css";
import { MdArrowForwardIos } from "react-icons/md";
import detailsimg from "../../Assets/images/banner3c-01 1.png";
const Details = () => {
  return (
    <>
      <div className="details">
        <div className="detailinner">
          <div className="detailsright">
            <h3>HIGH QUALITY</h3>
            <h1>Branded Sivakasi Crackers </h1>
            <h1>
              at <span>Yellovae Crackers</span>
            </h1>
            <p>
              We have immense pleasure in welcoming you to visit our mega
              fireworks showroom located in Sivakasi, where you can directly
              place your valuable orders and fulfill all your cracker’s
              requirements at one stop.
            </p>
            <button onClick={() => window.location.replace("/products")}>
              Shop Now
              <MdArrowForwardIos className="btnicon" />
            </button>
          </div>
          <div className="detailsimg">
            <img src={detailsimg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
