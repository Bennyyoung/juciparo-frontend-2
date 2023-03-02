import React from 'react'
import { Link } from 'react-router-dom'
import "./SellerLanding.css"
import storeImg from "../Images/storeImage.jpg"

function SellerLanding() {
  return (
    <div className='sellerLanding'>
       <div>
        <h3>Own An Online store</h3>
        <h5>Reach millions of customers with your online store</h5>
        <Link to="/SellerCreate">Register Now</Link>
       </div>
       <img src={storeImg} alt="storeImg" />
    </div>
  )
}

export default SellerLanding
