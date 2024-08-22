/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import "./LoginSign.css";
const LoginSignin = () => {
  return (
    <>
      <div className="Register">
        <div className="RegisterHead">
          <h1>Register Account</h1>
          <p>
            If you already have an account, please login at the 
            <span>login page</span>.
          </p>
        </div>
        <div className="Personalinfo">
          <div className="checkoutouter">
            <h3>Personal Information</h3>

            <div className="checkname">
              <h3>* Name</h3>
              <input type="tyext" placeholder="Enter your name ..." />
            </div>
            <div className="checkname">
              <h3>* Phone Number</h3>
              <input type="text" placeholder="Enter your phone number ..." />
            </div>
          </div>
          <div className="checklogin">
            <div className="checkoutouter">
              <h3>Sign-in Information</h3>

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
                <h3></h3>
                <input type="checkbox" />
                <p>
                  I agree to the terms and conditions and the privacy policy{" "}
                </p>
              </div>
              <div className="checkname1">
                <h3></h3>
                <div className="checkoutbtn">
                  <button>Continue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignin;
