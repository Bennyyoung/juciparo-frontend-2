import React from 'react'
import "./SellerCreateTwo.css"
import abc from "../Images/logoOne.jpg"
import AccountHeader from './AccountHeader';
import SellerRegisterTwo from './SellerRegisterTwo';

function SellerCreateTwo() {
  return (
    <div className='sellerTwo'>
        <AccountHeader
            img ={abc}
            head = "Create Your Seller Account"
            headFive = "STEP 2"
        />
        <SellerRegisterTwo />
    </div>
  )
}

export default SellerCreateTwo;
