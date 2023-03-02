import React from 'react'
import "./Why.css"
import am from "../Images/imge1.jpg"
import im from "../Images/imge2.jpg"
import gm from "../Images/imge3.jpg"

function Why() {
  return (
    <div className='why__container'>
      <h3>Why Sell on Juciparo ?</h3>
      <div>
        <img  src={am} alt="" />
        <h3>Connect with more buyers</h3>
        <p>By connecting with more buyers, you earn more on a daily basis with our platform.</p>
      </div>
      <div>
        <img  src={im} alt="" />
        <h3>Power Commision</h3>
        <p>By connecting with more buyers, you earn more on a daily basis with our platform.</p>
      </div>
      <div>
        <img  src={gm} alt="" />
        <h3>Low Commission</h3>
        <p>By connecting with more buyers, you earn more on a daily basis with our platform.</p>
      </div>
    </div>
  )
}

export default Why
