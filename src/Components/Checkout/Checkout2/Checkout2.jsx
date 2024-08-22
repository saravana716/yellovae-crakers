/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Checkout2.css";
import { useDispatch, useSelector } from "react-redux";
import { storeAction } from "../../../Store/Store";

const Checkout2 = () => {
  const userdata = useSelector((state) => state.userdata);
  const dispatch = useDispatch();
  const [formdata, setformdata] = useState({
    name: "",
    phone: "",
    address: "",
    address1: "",
    state: "",
    pincode: "",
    country: "India",
  });
  const [formdataerror, setformdataerror] = useState({
    name: false,
    phone: false,
    address: false,
    address1: false,
    state: false,
    pincode: false,
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata((values) => ({ ...values, [name]: value }));
  };
  const continubtn = () => {
    setformdataerror({
      name: false,
      phone: false,
      address: false,
      address1: false,
      state: false,
      pincode: false,
    });
    if (formdata.name.length == 0) {
      setformdataerror((values) => ({ ...values, name: true }));
    } else if (formdata.phone.length == 0) {
      setformdataerror((values) => ({ ...values, phone: true }));
    } else if (formdata.address.length == 0) {
      setformdataerror((values) => ({ ...values, address: true }));
    } else if (formdata.state.length == 0) {
      setformdataerror((values) => ({ ...values, state: true }));
    } else {
      setformdataerror({
        name: false,
        phone: false,
        address: false,
        address1: false,
        state: false,
        pincode: false,
      });
      dispatch(storeAction.userdataHandler({ userdata: formdata }));
      dispatch(storeAction.stepHandler({ step: 2 }));
    }
  };
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
  useEffect(() => {
    Getalldata();
  }, []);
  const Getalldata = () => {
    if (userdata !== null) {
      setformdata({
        name: userdata.name,
        phone: userdata.phone,
        address: userdata.address,
        address1: userdata.address1,
        state: userdata.state,
        pincode: userdata.pincode,
        country: "India",
      });
    }
  };
  return (
    <>
      <div className="checkOut1">
        <div className="checkOut1inner">
          <div className="checkoutinnerleft">
            <span>
              <p>1</p>
            </span>
            <h4>Billing and Shipping Details</h4>
          </div>
          {/* <FaCaretDown className="downicon" /> */}
        </div>
        <h2>
          <span>Shipping Details</span>
        </h2>
        <div className="checkoutouter">
          <div className="checkname">
            <h3>Name *</h3>
            <input
              type="tyext"
              placeholder="Enter your name ..."
              name="name"
              onChange={handlechange}
              defaultValue={formdata.name}
            />
          </div>
          {formdataerror.name && <p className="errormsg">Please Enter Name</p>}
          <div className="checkname">
            <h3>Phone Number *</h3>
            <input
              type="text"
              placeholder="Enter your phone number ..."
              name="phone"
              onChange={handlechange}
              defaultValue={formdata.phone}
            />
          </div>
          {formdataerror.phone && (
            <p className="errormsg">Please Enter Phone Number</p>
          )}

          <div className="checkname">
            <h3>Country *</h3>
            <input
              type="text"
              placeholder="Enter your country ..."
              name="country"
              disabled
              onChange={handlechange}
              defaultValue={formdata.country}
            />
          </div>
          <div className="checkname">
            <h3>Address 1 *</h3>
            <input
              type="text"
              placeholder="Re-enter your address ..."
              name="address"
              onChange={handlechange}
              defaultValue={formdata.address}
            />
          </div>
          {formdataerror.address && (
            <p className="errormsg">Please Enter Address 1</p>
          )}

          <div className="checkname">
            <h3>State *</h3>
            <select
              name="state"
              onChange={handlechange}
              defaultValue={formdata.state}
            >
              <option value="">Select State</option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          {formdataerror.state && (
            <p className="errormsg">Please Enter State</p>
          )}
          <div className="checkname">
            <h3>Pincode *</h3>
            <input
              type="text"
              placeholder="Re-enter your Pincode..."
              name="pincode"
              onChange={handlechange}
              defaultValue={formdata.pincode}
            />
          </div>
          {formdataerror.pincode && (
            <p className="errormsg">Please Enter Pincode</p>
          )}
          <div className="checkname1">
            <div className="checkoutbtn">
              <button onClick={continubtn}>Continue </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout2;
