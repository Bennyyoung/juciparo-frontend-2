import React from 'react'
import "./CheckoutOne.css"
import logo from "../Images/JuciLogo.jpg"
import CartOne from './CartOne'
import Summary from './Summary'
import { Link } from 'react-router-dom'
import BasicTabs from './BasicTabs'

function CheckoutOne() {
  return (
    <div className='checkoutOne'>
      <Link to="/" className='header'>
        <img src={logo} alt='logo' />
        <h4>Checkout</h4>
      </Link>
      <h4>Review Order</h4>
      <div className='cart__container'>
        <CartOne 
          productName = "HP LAPTOP: 12INCHES WITH 1TB AND 64BITS OS "
          productPrice = "100000"
        />
        <Summary 
          head = "Order Summary"
          subTotal = "SubTotal:"
          total = "Total "
          delivery = "DeliveryFee"
          price = "100000"
          status = "Add your delivery address to  check out, in order to see delivery fee"
        />
        <Link>
          Modify Cart
        </Link>
      </div>
      {/* <BasicTabs /> */}
    </div>
  )
}

export default CheckoutOne


