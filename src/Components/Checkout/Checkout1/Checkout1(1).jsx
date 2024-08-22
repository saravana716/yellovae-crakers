import React from "react";
import { FaCaretDown } from "react-icons/fa";
import "./Checkout1.css";
const Checkout1 = () => {
  return (
    <>
      <div className="checkOut1">
        <div className="checkOut1inner">
          <div className="checkoutinnerleft">
            <span>
              <p>1</p>
            </span>
            <h4>Login or Signup</h4>
          </div>
          <FaCaretDown className="downicon" />
        </div>
        <h2>
          Create an account <span>| Login</span>
        </h2>
        <div className="checkoutouter">
          <div className="checkname">
            <h3>* Name</h3>
            <input type="tyext" placeholder="Enter your name ..." />
          </div>
          <div className="checkname">
            <h3>* Phone Number</h3>
            <input type="text" placeholder="Enter your phone number ..." />
          </div>
          <div className="checkname">
            <h3>* E-Mail Address</h3>
            <input type="text" placeholder="Enter your mail id ..." />
          </div>
          <div className="checkname">
            <h3>* Password</h3>
            <input type="text" placeholder="Enter your Password ..." />
          </div>
          <div className="checkname">
            <h3>* Confirm Password</h3>
            <input type="text" placeholder="Re-enter your password ..." />
          </div>
          <div className="checkname1">
            <input type="checkbox" />
            <p>I agree to the terms and conditions and the privacy policy </p>
          </div>
          <div className="checkname1">
            <div className="checkoutbtn">
              <button>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout1;
