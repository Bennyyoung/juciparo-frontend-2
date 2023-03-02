import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./DeliveryMethod.css"

export default function DeliveryMethod() {
  return (
    <div className='delivery__container'>
      <h4>How do you want your order to be delivered? </h4>
      <div className='haed'>
        <div>
          <div className="circle">
            <div></div>
          </div>
          <p>Door Step Delivery</p>
        </div>
        <p>Delivered between Friday 11 Nov and Tuesday 15 Nov for<span> ₦ 4,970</span></p>
      </div>
      <div className='center'>
          <p>- Large items (e.g. Freezers) may arrive 2 business days later than other products.</p>
          <p>-Ensure your address is current as Delivery Agents would only deliver to the stated address.</p>
          <p>-Package may arrive before the delivery date. Payment must be made before collection as Delivery agents are not allowed to open a packag</p>
          <p>- On delivery day, delivery time may vary due to possible eventualities.</p>
      </div>
      <Link>Save & Continue</Link>
    </div>
  )
}



