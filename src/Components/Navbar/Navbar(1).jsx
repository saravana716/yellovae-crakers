import React from 'react'
import { BiSearch } from "react-icons/bi";
import { RiHeart3Line } from "react-icons/ri";
import { MdShoppingCartCheckout } from "react-icons/md";
import logo from "../../Assets/Screenshot_2024-08-16_214206-removebg.png"
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
function opendiv(params) {
  let getdiv=document.querySelector(".navbarlist")
  getdiv.classList.add("slider")
  let geticon=document.querySelector(".burgermenu")
  let geticon1=document.querySelector(".burgermenu1")
  geticon.classList.add("close")
  geticon1.classList.add("cl")
}
function closediv(params) {
  let getdiv=document.querySelector(".navbarlist")
  getdiv.classList.remove("slider")
  let geticon=document.querySelector(".burgermenu")
  let geticon1=document.querySelector(".burgermenu1")
  geticon.classList.remove("close")
  geticon1.classList.remove("cl")

  
}
  return (
    <>
    <div className='navbar'>
    <FaBars className='burgermenu'  id='open' onClick={opendiv}/>
    <IoCloseSharp className='burgermenu1'  id='close' onClick={closediv}/>
   <div className='navbarlist1'>
   <div className='navbarTitle'>
      <img src={logo} alt="" />
    </div>
   <div className='navbarlist'>
   <div className='navbarcontent'>
     
   <Link to="/">  <h4>Home</h4></Link>
   <Link to="/about">  <h4>About us</h4></Link>
   <Link to="/products">  <h4>Product</h4></Link>
   <Link to="/contact">  <h4>Contact</h4></Link>
  
    
     
    </div>
    <div className="navbaricons">
              <button>Price List</button>
            </div>
            <div className="navbaricons">
              <button>Price Catlog</button>
            </div>
    
    <div className='po12'> 
   <div className='po'>

    <MdShoppingCartCheckout className='ordericons'/>
    <span><p>0</p></span>
    </div>
    <h5>#0.00</h5>
    </div>
   
   </div>
   </div>
    </div>
    <marquee
        width="100%"
        direction="left"
        height="60px"
        background-color="red"
      >
        <h4>welcome to yellovae crackers</h4>
      </marquee>
    </>
  )
}

export default Navbar