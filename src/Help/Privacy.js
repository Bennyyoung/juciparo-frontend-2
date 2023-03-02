import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Newsletter from '../Newsletter'
import "./Privacy.css"
import HelpCard from './HelpCard'

function Privacy() {
  return (
    <>
        <Navbar />
        <div className="privacy">
            <h2>Privacy Policy</h2>
            <h4>Please read this Privacy Policy carefully as it will help you make informed decisions about sharing your personal information with us.</h4>
            <HelpCard 
                head = "Consent"
                para = "By using this site, you have consented to our Privacy Policy and that you have the legal capacity to give consent. Otherwise, you may discontinue and log out at this stage. "
            />
            <HelpCard 
                head = "Collection of Personally Identifiable Information"
                para = "We collect personally identifiable information (including but not limited to email address, name, phone number, physical address, location, photo, banking details (when you make purchases), online identifiers, etc.) from you when you set up a free account on our website. While you can browse some sections of our site without being a registered member, certain activities (such as placing an order) do require registration. We do use your contact information to send you offers based on your previous orders and your interests. The information and personal data are as freely provided by you to us using any technology at the material time e.g. JWT, web tokens etc."
            />
            <HelpCard 
                head = "Use of Demographic and Profile Data"
                para = "We use personal information to market to you, we will provide you the ability to opt-out of such uses. We use your personal information to resolve disputes; troubleshoot problems; help promote a safe service; collect fees owed; measure consumer interest in our products and services, inform you about online and offline offers, products, services, and updates; customize your experience; detect and protect us against error, fraud and other criminal activity; and as otherwise described to you at the time of collection. In our efforts to continually improve our product and service offerings, we collect and analyse demographic and profile data about our users' activity on our website. "
            />
            <HelpCard 
                head = "Your Privacy Rights"
                para = "It is important that the personal data we hold about you is accurate and current. Please keep us informed if your personal data changes during your relationship with us.Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to access, correct or erase your personal data, object to or restrict processing of your personal data, and unsubscribe from our emails and newsletters."
            />
            <HelpCard 
                head = "Links to Other Sites"
                para = "Our site links to other websites that may collect personally identifiable information about you. Konga.com is not responsible for the privacy practices or the content of those linked websites."
            />
            <HelpCard 
                head = "Further Details"
                para = "If you are looking for more information on how we process your personal data, or you wish to exercise your legal rights in respect of your personal data, please contact us"
            />
            
        </div>
        <Newsletter />
        <Footer />
    </>
    
  )
}

export default Privacy
