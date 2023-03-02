import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Newsletter from '../Newsletter'
import "./PlaceOrder.css"
import HelpCard from './HelpCard'

function Privacy() {
  return (
    <>
        <Navbar />
        <div className="order">
            <h2>How to Place Order</h2>
            <h4>To place an order follow the steps below</h4>
            <HelpCard 
                head = "1."
                para = "Search for an item using the search bar"
            />
            <HelpCard 
                head = "2."
                para = "Compare prices & vendor rating"
            />
            <HelpCard 
                head = "3."
                para = "Add to your cart"
            />
            <HelpCard 
                head = "4."
                para = "Then pay at checkout"
            />
            
        </div>
        <Newsletter />
        <Footer />
    </>
    
  )
}

export default Privacy
