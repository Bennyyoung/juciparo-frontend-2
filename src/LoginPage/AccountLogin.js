import React from 'react'
import "./AccountLogin.css"
import AccountHeader from './AccountHeader'
import abc from "../Images/logoOne.jpg"
import MainLogin from './MainLogin'

function AccountLogin(props) {
  return (
    <div className='accountLogin'>
      <AccountHeader 
        img ={abc}
        head = "Welcome Back"
        headFive = "Welcome back! Please enter your details"
      />
      <MainLogin />
    </div>
  )
}

export default AccountLogin


