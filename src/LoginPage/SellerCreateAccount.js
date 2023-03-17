import React from 'react'
import "./SellerCreateAccount.css"
import AccountHeader from './AccountHeader';
import SellerRegister from './SellerRegister';

function SellerCreateAccount() {
  return (
    <div className='sellerAccount'>
        {/* <AccountHeader
            img ={abc}
            head = "Create Your Seller Account"
            headFive = "STEP 1"
        /> */}
        <SellerRegister />
    </div>
  )
}

export default SellerCreateAccount;
