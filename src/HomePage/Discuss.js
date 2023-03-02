import React from 'react'
import "./Discuss.css"
import man from "../Images/man_with_headset.png"
import disc from "../Images/customer.jpg"
import discu from "../Images/discount.jpg"

function Discuss() {
  return (
    <div className='discuss__container'>
      <div className='discuss__card'>
        <img src={man} alt='customer' />
        <h3>24/7 Customer Service Support</h3>
        <p>We take our customer with high priority</p>
      </div>
      <div className='discuss__card'>
        <img src={disc} alt='customer' />
        <h3>Easy Delivery</h3>
        <p>Delivery agent is available in all loacations, making delivery easier</p>
      </div>
      <div className='discuss__card'>
        <img src={discu} alt='customer' />
        <h3>Discount Sales</h3>
        <p>We give discount sales on  products.</p>
      </div>
    </div>
  )
}

export default Discuss
