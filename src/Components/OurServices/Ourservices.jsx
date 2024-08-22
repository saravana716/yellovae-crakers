import React from "react";
import "./Ourservices.css";
import { TbTruckDelivery } from "react-icons/tb";
import { Ri24HoursLine } from "react-icons/ri";
import { FaBoxOpen } from "react-icons/fa";
import serviceimg from "../../Assets/images/9718486d 1.png";
const Ourservices = () => {
  return (
    <>
      <div className="Ourservices">
        <div className="Ourservices1">
          <h1>
            Our <span>Services</span>
          </h1>
          <div className="Ourservices2">
            <div className="Ourservicescart">
              <img src={serviceimg} alt="" />
            </div>
            <div className="Ourservicescart">
              <div className="Ouricon">
                <TbTruckDelivery className="delviericon" />
              </div>
              <h1>Super Fast Delivery</h1>
              <p>
                Enjoy super fast delivery with our express shipping service,
                ensuring your helmets arrive quickly and ready to use.
              </p>
            </div>
            <div className="Ourservicescart">
              <img src={serviceimg} alt="" />
            </div>
            <div className="Ourservicescart">
              <div className="Ouricon">
                <Ri24HoursLine className="delviericon" />
              </div>
              <h1>24 x 7 Service</h1>
              <p>
                Enjoy round-the-clock support with our 24/7 service, ensuring
                you get the help you need anytime, day or night.
              </p>
            </div>
            <div className="Ourservicescart">
              <img src={serviceimg} alt="" />
            </div>
            <div className="Ourservicescart">
              <div className="Ouricon">
                <FaBoxOpen className="delviericon" />
              </div>
              <h1>Best Packaging</h1>
              <p>
                Experience top-notch packaging for your firecrackers, ensuring
                they arrive safely and ready to ignite your celebrations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourservices;
