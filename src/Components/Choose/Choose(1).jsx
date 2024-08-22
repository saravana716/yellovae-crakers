import React from "react";
import "./Choose.css";
import chooseimg from "../../Assets/images/Group.svg";
import chooseimg5 from "../../Assets/images/banner1y-01 1.png";
import chooseimg1 from "../../Assets/images/Vector (1).png";
import chooseimg2 from "../../Assets/images/Vector (2).png";
import chooseimg3 from "../../Assets/images/Vector (3).png";
import chooseimg4 from "../../Assets/images/Vector.png";
const Choose = () => {
  return (
    <div className="Choose">
      <div className="Choose1">
        <h1>
          Why <span>Choose Us</span>
        </h1>
        <div className="Choose2">
          <div className="choose3">
            <div className="choosecon">
              <div className="chimg">
                <img src={chooseimg} alt="" className="ch1" />
                <img src={chooseimg1} alt="" className="ch2" />
              </div>
              <div className="choosecon1">
                <h2>Innovative Range of Crackers</h2>
                <h3>
                  We offer crackers that redefine fireworks with inventive
                  designs and dazzling effects.
                </h3>
              </div>
            </div>
            <div className="choosecon">
              <div className="chimg">
                <img src={chooseimg} alt="" className="ch1" />
                <img src={chooseimg2} alt="" className="ch2" />
              </div>
              <div className="choosecon1">
                <h2>Supreme Quality, Affordable Prices</h2>
                <h3>
                  All our products are of supreme quality and are available at
                  affordable prices to everyone.
                </h3>
              </div>
            </div>
            <div className="choosecon">
              <div className="chimg">
                <img src={chooseimg} alt="" className="ch1" />
                <img src={chooseimg3} alt="" className="ch2" />
              </div>

              <div className="choosecon1">
                <h2>Best Fireworks Brand in India</h2>
                <h3>
                  We are the best fireworks brand in fountains & children fancy
                  category with large varieties.
                </h3>
              </div>
            </div>
            <div className="choosecon">
              <div className="chimg">
                <img src={chooseimg} alt="" className="ch1" />
                <img src={chooseimg4} alt="" className="ch2" />
              </div>

              <div className="choosecon1">
                <h2>Customer Satisfaction:</h2>
                <h3>
                  We prioritize your satisfaction, ensuring the best shopping
                  experience possible..
                </h3>
              </div>
            </div>
          </div>
          <div className="choose4">
            <img src={chooseimg5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
