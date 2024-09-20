/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import logo from "../../Assets/sa.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        {/* <div className="footer2">
          <div className="navbarTitle">
            <img src={logo} alt="" />
          </div>
          <h2>Sivakasi Yellovae Crackers</h2>
        </div> */}
        <div className="footercontent">
          <div className="f1">
            <img src={logo} alt="" />
            <p>
              In Sivakasi, India, Sivakasi Yellovae Crackers is a leading
              cracker online shopping website and fireworks. We offer the best
              quality crackers company online all over India at unbeatable
              pricing.
            </p>
            {/* <div className="social">
              <h1>Social Media</h1>
              <div className="social1">
                <a
                  href="https://www.instagram.com/luckystar_ganesh/"
                  target="_blank"
                >
                  <BsInstagram className="soicon" />
                  Yellovae Crackers
                </a>
                <a href="https://www.youtube.com" target="_blank">
                  <FaYoutube className="soicon" />
                  https://www.youtube.com/
                </a>
              </div>
            </div> */}
          </div>
          <div className="f2">
            <h2>Quick Links</h2>
            <h4 onClick={() => window.location.replace("/")}>Home</h4>
            <h4 onClick={() => window.location.replace("/about")}>About us</h4>
            <h4 onClick={() => window.location.replace("/products")}>
              Product
            </h4>
            <h4 onClick={() => window.location.replace("/contact")}>Contact</h4>
          </div>
          {/* <div className="f2">
            <h2>Categories</h2>
            <h4>Kids</h4>
            <h4>Family</h4>
            <h4>teenagers</h4>
            <h4>Gift Box</h4>
            <h4>Night display</h4>
          </div> */}
          <div className="f3">
            <h2>Contact Us</h2>
            <h4>
              Email: <span>Sivakasiyellovaecracker@gmail.com</span>
            </h4>
           <a target="_blank" href="https://www.instagram.com/sivakasiyellovaecrackers.24/?utm_source=ig_web_button_share_sheet"> <h4>
              Instagram: <span>sivakasiyellovaecrackers.24</span>
            </h4></a>
            <h4>
              Address :{" "}
              <span>
                No 128-56 veedu colony, Pudhur road, Sivakasi east, 626189
              </span>
            </h4>
            <h4>
              Phone : <span>7904202470, 7904084530</span>
            </h4>
          </div>
        </div>
      </div>
      <div className="footercontent1">
        <h5>
          © 2024 -Sivakasi Yellovae Crackers | Designed and Developed by
          TechBuddy
        </h5>
      </div>
    </div>
  );
};

export default Footer;
