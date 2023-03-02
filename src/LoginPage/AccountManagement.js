import React from 'react'
import "./AccountManagement.css"
import abc from "../Images/logoOne.jpg"
import CreateHead from './CreateHead'
import AccountManReg from './AccountManReg'

function AccountManagement() {
  return (
    <div className='createAccountMan'>
        <CreateHead 
          img = {abc}
          head = "Account Management"
        />
        <AccountManReg />
    </div>
  )
}

export default AccountManagement
