import React from 'react'
import '../../Components/HomePage/HomePage.css'
const Card = (props) => {
  return (
    <div className='product-card'>
        <img className='productcard-logo' src={props.logo} alt="" />
        <img className='product-img' src={props.image} alt=""/>
        <h4 className='product-title'>{props.title}</h4>
        <div className='btn-container'>
          <button className='order-btn'>Order Now</button>
        </div>
    </div>
  )
}

export default Card