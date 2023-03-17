import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import logo from "./Images/JuciAlternative.jpg"

function Footer() {
  return (
    <div className='footer__container'>
      <img src={logo} alt='logo' />
      <Link to="/">
        <Icon icon="ant-design:twitter-outlined" />
      </Link>
      <Link to="/"> 
        <Icon icon="ant-design:instagram-outlined" />
      </Link>
      <Link to="/">
        <Icon icon="ei:sc-facebook" />
      </Link>
      <div className='footer__list'>
        <ul>
          <Link to="/Help">Help</Link>
          <Link to="/Privacy">Privacy Policy</Link>
          <Link to="/Help">FAQs</Link>
          <Link to="//contact-us">Contact Us</Link>
        </ul>
        <ul>
          <Link to="/Store">Store</Link>
          <Link to="/">Top Products</Link>
          <Link to="/">Official Store</Link>
          <Link to="/intro-page">Become a seller</Link>
        </ul>
        <ul>
          <Link to="/Support">Support</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/place-order">How To Place Order</Link>
          <Link to="/Terms">Terms and Condition</Link>
        </ul>
      </div>
        
    </div>
  )
}

export default Footer
