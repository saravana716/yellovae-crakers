import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";
import Footer from "../Footer/Footer";
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="ContactContainer">
        <div className="Contact">
          <h1 className="ContactHeading">Let's Get In Touch</h1>
          <p>We're open for any suggestion or just to have a chat</p>
          <h1 className="ContactSubHeading">Adderss</h1>
          <p className="AddressContent">
            No 128-56 veedu colony, Pudhur road, Sivakasi east, 626189
          </p>
          <h1 className="ContactSubHeading">Mobile Number</h1>
          <p>
            <span>Mobile: </span>+91 7904084530
          </p>
          <p>
            <span>Office: </span>+91 7904202470
          </p>
          <h1 className="ContactSubHeading">Email Address</h1>
          <p>Sivakasiyellovaecracker@gmail.com</p>
          <h1 className="ContactSubHeading">Opening Time</h1>
          <p>Monday – Sunday: 9am – 8pm</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
