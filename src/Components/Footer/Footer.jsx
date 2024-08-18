import React from "react";
import "../HomePage/HomePage.css";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import logo from "../../Assets/Screenshot_2024-08-16_214206-removebg.png"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="footer2">
          <h2>Sivakasi Yellovae Crackers</h2>
          <div className='navbarTitle'>
      <img src={logo} alt="" />
    </div>
        </div>
        <div className="footercontent">
        <div className="f1">
          <p>
            In Sivakasi, India, Yellovae Crackers is a leading cracker online
            shopping website and fireworks. We offer the best quality crackers
            company online all over India at unbeatable pricing.
          </p>
          <div className="social">
          <h1>Social Media</h1>
            <div className="social1">
                <p><BsInstagram className="soicon"/>abcdinstagram.in</p>
                <p><FaYoutube className="soicon"/>https://youtupe.com</p>
            </div>
          </div>
        </div>
        <div className="f2">
            <h2>Quick Links</h2>
            <h4>Home</h4>
      <h4>About us</h4>
      <h4>Product</h4>
      <h4>My Orders</h4>
      <h4>Contact</h4>
        </div>
        <div className="f2">
            <h2>Categories</h2>
            <h4>Kids</h4>
      <h4>Family</h4>
      <h4>teenagers</h4>
      <h4>Gift Box</h4>
      <h4>Night display</h4>
        </div>
        <div className="f3">
            <h2>Contact Us</h2>
            <h4>Email: <span>abcd222@mail.com</span></h4>
      <h4>Address :  <span>34, xy street, Tamilnadu.</span></h4>
      <h4>Phone : <span>9089898989</span></h4>
      
        </div>
        </div>
        
      </div>
      <div className="footercontent1">
            <h5>©2024-NammaoorCrackersz</h5>
        </div>
    </div>
   
  );
};

export default Footer;
