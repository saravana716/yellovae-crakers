import React from "react";
import Navbar from "../Navbar/Navbar";
import "./About.css";
import OurMissionImg from "../../Assets/images/OurMissionLogo.svg";
import BiggestOfferImg from "../../Assets/images/BiggestOfferImg.svg";
import DiwaliSaleImg from "../../Assets/images/DiwaliSaleImg.svg";
import OurVisionImg from "../../Assets/images/OurVisionImg.svg";
import AboutValueImg from "../../Assets/images/AboutValueImg.svg";
import HappyDiwaliImg from "../../Assets/images/HappyDiwaliImg.svg";
import Footer from "../Footer/Footer";
import Marquee from "../Marquee/Marquee";

const About = () => {
  return (
    <>
      <Navbar />
      <Marquee />
      <div className="AboutUsContainer">
        <div className="AboutParent">
          <p className="AboutUsHeader">About Us</p>
          <p className="UnderLine"></p>
        </div>
        <h2>Yellovae Crackers</h2>
        <p className="AbountContentPara">
          Yellovae Crackers is one of the leading online destinations for
          purchasing fireworks in Tamil Nadu. We pride ourselves on offering
          high-quality fireworks at the lowest rates, ensuring that your
          celebrations are both spectacular and affordable.
        </p>
      </div>
      <div className="OurCommitmentContainer">
        <h1>
          Our <span className="HeaderSpan">Commitment</span>
        </h1>
        <ul className="OurCommitmentUl">
          <li>
            <span className="MenuHedings">Quality Products:</span> We provide
            worthy and good quality fireworks, using only high-quality,
            government-approved chemicals. All our products comply with
            government regulations to ensure your safety and satisfaction.
          </li>
          <li>
            <span className="MenuHedings">Customer Satisfaction: </span>We value
            all our customers and festival enthusiasts, offering original
            branded fireworks to make your celebrations memorable.
          </li>
          <li>
            <span className="MenuHedings">Wide Delivery Network:</span> We
            deliver all over Tamil Nadu, with additional{" "}
            <span className="DeliveryLocations">
              {" "}
              delivery services to Bangalore, Hyderabad, and Vijayawada.
            </span>{" "}
            (Please note that lorry freight and delivery charges will be extra.)
          </li>
          <li>
            <span className="MenuHedings">Secure Payments:</span>All payments
            can be made securely through Debit/Credit cards or GPay on our
            website
          </li>
          <li>
            <span className="MenuHedings">Guaranteed Satisfaction:</span> We
            assure you 100% guarantee and full satisfaction for your Diwali
            celebrations and all other festive occasions.
          </li>
        </ul>
      </div>

      <div className="OurMissionSection2">
        <div className="OurMissionContainer">
          <h1>
            Our <span className="HeaderSpan">Mission, Vision & Values</span>
          </h1>
          <div className="OurMissionHeaderSection">
            <img src={OurMissionImg} alt="" />
            <p>Our Mission</p>
          </div>
          <div className="OurMissionContents">
            <p className="MarginTop10">
              <span>Quality First: </span>We are dedicated to providing the
              highest quality fireworks, crafted from premium,
              government-approved chemicals.
            </p>
            <p>
              <span>Customer Value: </span>We strive to offer our customers the
              best value by selling our fireworks at the lowest rates without
              compromising on quality.
            </p>
            <p>
              <span>Compliance and Safety: </span>We strictly adhere to
              government rules and regulations, ensuring all our products meet
              safety standards and guidelines.
            </p>
          </div>
        </div>
        <img className="OfferImg" src={BiggestOfferImg} alt="" />
      </div>

      <div className="OurMissionSection2 gap">
        <img className="OfferImg Background" src={DiwaliSaleImg} alt="" />
        <div className="OurMissionContainer Width">
          <div className="OurMissionHeaderSection">
            <img src={OurVisionImg} alt="" />
            <p>Our Vision</p>
          </div>
          <div className="OurMissionContents">
            <p className="MarginTop10">
              <span>Leadership in Tamil Nadu: </span> To be the leading online
              destination for fireworks in Tamil Nadu, setting the standard for
              quality and affordability.
            </p>
            <p>
              <span>Customer Trust: </span>To earn the trust and loyalty of our
              customers by consistently delivering exceptional products and
              services.
            </p>
            <p>
              <span>Expanding Reach: </span>To reach more customers across Tamil
              Nadu and neighboring states.
            </p>
          </div>
        </div>
      </div>

      <div className="OurMissionSection2">
        <div className="OurMissionContainer">
          <div className="OurMissionHeaderSection">
            <img src={AboutValueImg} alt="" />
            <p>Values</p>
          </div>
          <div className="OurMissionContents">
            <p className="MarginTop10">
              <span>Safety: </span>Recognizing the importance of safety in our
              industry, we prioritize it in every aspect of our operations.
            </p>
            <p>
              <span>Innovation: </span>We strive to consistently introduce new
              and exciting products that captivate our customers.
            </p>
          </div>
        </div>
        <img className="OfferImg Background" src={HappyDiwaliImg} alt="" />
      </div>
      <Footer />
    </>
  );
};

export default About;
