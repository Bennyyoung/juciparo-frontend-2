import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Newsletter from '../Newsletter'
import "./AccountSeller.css"
import { Link } from 'react-router-dom'
import SavedItem from './SavedItem'
import AccountTab from './AccountTab'
import AccountTabOne from './AccountTabOne'
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

function AccountSeller() {
    const { user: currentUser } = useSelector((state) => state.auth);
     if (!currentUser) {
        return <Navigate to="/account-login" />;
     }
    //firstname, lastname, email, phone, password

  return (
    <>
        <Navbar />
        <div className='accountSeller'>
            <h3>Account Information</h3>
            <div className='head'>
                <Link to="/AccountManagement">Account Management</Link>
                <Link to="/AddressBook">Address Book</Link>
            </div>
            <div className='accountSeller__top'>
                <div className='left'>
                    <Link>Account Details</Link>
                    <h5>{currentUser.firstname}</h5> {/* <h5> Olaniyi Abiodun</h5>*/}
                    {/* <h5>{currentUser.email}</h5> <h5> abiodunolaniyi7@gmail.com</h5>  */}
                </div>
                <div className='right'>
                    <Link>Address Book</Link>
                    <h5>Your default shipping aaddress</h5>
                    <h5>Okelerin primary school, Enugu, Enugu state 08037525369</h5>
                </div>
            </div>
            <AccountTab />
            <AccountTabOne />
            <div className='pend'>
                <h4>Pending Review</h4>
            </div>
        </div>
        <SavedItem />
       <Newsletter />
       <Footer />
    </>
    
  )
}

export default AccountSeller


// This page gets current User from Local Storage by getting user in 
// the application state and show user information (with token).



