/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import { MdShoppingCartCheckout } from "react-icons/md";
import logo from "../../Assets/12.png";
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartdata = useSelector((state) => state.cartdata);

  function opendiv(params) {
    let getdiv = document.querySelector(".navbarlist");
    getdiv.classList.add("slider");
    let geticon = document.querySelector(".burgermenu");
    let geticon1 = document.querySelector(".burgermenu1");
    geticon.classList.add("close");
    geticon1.classList.add("cl");
  }
  function closediv(params) {
    let getdiv = document.querySelector(".navbarlist");
    getdiv.classList.remove("slider");
    let geticon = document.querySelector(".burgermenu");
    let geticon1 = document.querySelector(".burgermenu1");
    geticon.classList.remove("close");
    geticon1.classList.remove("cl");
  }

  return (
    <>
      <div className="navbar">
        <FaBars className="burgermenu" id="open" onClick={opendiv} />
        <IoCloseSharp className="burgermenu1" id="close" onClick={closediv} />
        <div className="navbarlist1">
          <Link to="/">
            <div className="navbarTitle">
              <img src={logo} alt="" />
            </div>
          </Link>
          <div className="navbarlist">
            <div className="navbarcontent">
              <Link to="/">
                {" "}
                <h4>Home</h4>
              </Link>
              <Link to="/about">
                {" "}
                <h4>About us</h4>
              </Link>
              <Link to="/products">
                {" "}
                <h4>Product</h4>
              </Link>
              <Link to="/contact">
                {" "}
                <h4>Contact</h4>
              </Link>
            </div>
            <div className="navbaricons">
              <button>Price List</button>
            </div>
            <div className="navbaricons">
            <Link to="/products">
                {" "}
                <button>Quick Order</button>
              </Link>
              
            </div>

            <div className="po12">
              <div className="po">
                {cartdata.length !== 0 ? (
                  <Link to="/mycart">
                    <MdShoppingCartCheckout className="ordericons" />
                    <span>
                      <p>{cartdata.length}</p>
                    </span>
                  </Link>
                ) : (
                  <div>
                    <MdShoppingCartCheckout className="ordericons" />
                    <span>
                      <p>0</p>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <marquee
        width="100%"
        direction="left"
        height="60px"
        background-color="red"
      >
        <h4>{marqueevalue}</h4>
      </marquee> */}
    </>
  );
};

export default Navbar;
