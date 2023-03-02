import React from 'react'
import "./ContactUs.css"
import Navbar from "../Navbar" 
import Footer from '../Footer'
import Newsletter from '../Newsletter'
import contactImg from "../Images/cont.jpg"

function ContactUs() {
  return (
    <>
      <Navbar />
      <div className='contact'>
        <h2>Contact Us</h2>
        <div>
            <img src={contactImg} alt="a" />
            <div className='details'>
                <h2>0806852456</h2>
                <h4>We are available Monday to Sunday from 8am to 8pm</h4>
            </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export default ContactUs

