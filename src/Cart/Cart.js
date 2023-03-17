import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Newsletter from '../Newsletter'
import "./Cart.css"
import CartOne from './CartOne'
import Shopping from './Shopping'
import Summary from './Summary'


//use material ui badge
//use react-redux for cart

function Cart() {
  
  return (
    <>
      <Navbar />
      <div className='cart__section'>
        <div className='cart__container'>
          <CartOne />
          <Summary 
            head = "Cart Summary"
            subTotal = "SubTotal"
            total = "Total"
            price = "100000"
            delivery = "Delivery"
            status = "Not yet added"
          />
        </div>
        <Shopping />
      </div>
      <Newsletter />
      <Footer />
    </>
    
  )
}

export default Cart
