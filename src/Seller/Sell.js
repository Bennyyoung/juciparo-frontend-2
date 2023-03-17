import React from 'react'
import "./Sell.css"
import { Link } from 'react-router-dom'
import appliance from "../Images/appliance.jpg"

function Sell() {
  return (
    <div className='sell'>
      <div>
        <h4>Start</h4>
        <p>Selling Today</p>
        <Link to="/seller-create">
            Get Started
        </Link>
      </div>
      <img src={appliance} alt='img' />
    </div>
  )
}

export default Sell
