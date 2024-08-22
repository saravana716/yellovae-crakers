import React from 'react'
import Homecart from '../HomeCart/Homecart'
import { IoIosArrowForward } from "react-icons/io";
import "./Listcart.css"
const Listcart = () => {
  return (
    <div className='listcart'>
      <div className='listinner'>
      <div className='listcart1'>
        <button>View All <span><IoIosArrowForward /></span></button>
       </div>
       <div className='listcart2'>
        <Homecart/>
        <Homecart/>
        <Homecart/>
        <Homecart/>
        <Homecart/>
        <Homecart/>
        <Homecart/>
        <Homecart/>
       </div>
      </div>
    </div>
  )
}

export default Listcart