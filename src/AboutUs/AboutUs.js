import React from 'react'
import AboutCard from './AboutCard'
import "./AboutUs.css"
import about from "../Images/aboutUs.jpg"
import Discuss from '../HomePage/Discuss'
import Navbar from '../Navbar'
import Newsletter from '../Newsletter'
import Footer from '../Footer'
import img from "../Images/mission.jfif"
import imag from "../Images/vision.png"

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className='about__container'>
        <h2>About Us</h2>
        <div className="about__frame">
            <img src={about} alt='about-img' />
            <div>
              <h4>Company Overview</h4>
              <p>Juciparo is Nigeria's largest online mall. We launched in July 2012 and our mission is to become the engine of commerce and trade in Africa.
                We serve a retail customer base that continues to grow exponentially, offering products that span various categories including Phones, Computers, Clothing, Shoes, Home Appliances, Books, healthcare, Baby Products, personal care and much more.
                Our range of services are designed to ensure optimum levels of convenience and customer satisfaction with the retail process; these services include our lowest price guarantee, 7-day free return policy, order delivery-tracking, dedicated customer service support and many other premium services.
                As we continue to expand the mall, our scope of offerings will increase in variety, simplicity and convenience; join us and enjoy the increasing benefits.
                We are highly customer-centric and are committed towards finding innovative ways of improving our customers' shopping experience with us. For any press related questions, kindly send us an email.
                Thank you and we hope you enjoy your experience with us.
              </p>
            </div>
        </div>
        <div className='about__icon-section'>
          <AboutCard
            img= {imag}
            head= "Vision"
            text= "We are building the most beloved and trusted shopping destination for Africans."
          />
          <AboutCard
            img= {img}
            head= "Mission"
            text= "To be the Engine of Commerce & Trade in Africa."
          />
        </div>
        
        <Discuss />
      </div>
      
      <Newsletter />
      <Footer />
    </>
  )
}

export default AboutUs
