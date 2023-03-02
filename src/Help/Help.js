import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Newsletter from '../Newsletter'
import "./Help.css"
import HelpCard from './HelpCard'

function Help() {
  return (
    <>
        <Navbar />
        <div className="help">
            <h2>Help</h2>
            <h4>Frequeuntly Asked Questions</h4>
            <HelpCard 
                head = "Can I buy in bulk ?"
                para = "For all your Corporate Procurement, Gift Vouchers and Consumer Promotion Activities, please contact us on 081 3045 4455 or 084 5244 5266 email us at juciparo@gmail.com. "
            />
            <HelpCard 
                head = "Will all of the items in my order arrive in a single package ?"
                para = "If your order consists of items from more than one seller, your items will arrive separately. If your order consists of items from a single seller, your items may arrive together or separately. If your orders arrive separately, be rest assured that the remaining item(s) will be delivered shortly."
            />
            <HelpCard 
                head = "Why do I see different prices for the same product ?"
                para = "Juciparo is your trusted online marketplace that supports Nigerian entrepreneurs and we have many different sellers competing for business. Therefore, you may see the same product offered by different sellers at different prices. We believe that by supporting these 'third-party' sellers, we can offer you a wider product selection, more choice, increased convenience, and better pricing."
            />
            <HelpCard 
                head = "What is the estimated delivery time ?"
                para = "Juciparo delivers products to customers all over Nigeria. Lagos 2-5, Rivers 3-7, Abuja 3-8 & other states 4-9 days. "
            />
            <HelpCard 
                head = "Why does the estimated delivery time vary ?"
                para = "Juciparo is a true online marketplace that empowers Nigerians across the country. This means that not all products on Juciparo are sold or delivered by Juciparo. In addition, Konga buyers and sellers are found in every state in Nigeria. Given the various factors involved (the time it takes a seller to ship, the courier company used, the distance between buyer and seller, and more) delivery times may vary."
            />
            <HelpCard 
                head = "Who will deliver my order ?"
                para = "Your order may be delivered by Juciparo agents, by other courier companies, or by the seller or the seller's agents, depending on whether the item was sold by Konga or a third-party seller and on the delivery method chosen by a third-party seller. You may be called prior to or on the same day as delivery to see if you are available to receive your order."
            />
            <div className='lastCard'>
                <h4>Who will deliver my order ?</h4>
                <p>To track your order visit: <span>Juciparo.com</span></p>
            </div>
        </div>
        <Newsletter />
        <Footer />
    </>
    
  )
}

export default Help
