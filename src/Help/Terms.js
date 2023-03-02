import React from 'react'
import "./Terms.css"
import Footer from '../Footer'
import Newsletter from '../Newsletter'
import Navbar from "../Navbar"
import TermsCard from './TermsCard'
import TermsUse from './TermsUse'
import TermsCardTwo from './TermsCardTwo'

function Terms() {
  return (      
    <>
      <Navbar />
      <div className='termsC'>
        <h2>Terms and Conditions</h2>
        <h4>These Terms of Service ("Terms") are a binding legal agreement between you and Juciparo that govern your right to use the websites, applications, and other offerings from Juciparo (collectively, the "Juciparo Services"). When used in these Terms, "Juciparo," "we," "us," or "our" refers to the Juciparo Group when speaking about any of our services.</h4>
        <div className='term--top'>
            <TermsCard 
                head = "Customer Service"
                text = "Juciparo services offer an online venue that enables users <i>Members</i> to sell, place order, offer, search for, and subscribe to any of our services. Members who publish and offer services are VENDORS and Members who search for, place order, book, or use services are CUSTOMERS Vendors are to post what they are selling i.e Physical goods, services, digital products, non-tangible goods such as real estate, other services collectively, HOST SERVICES and each Host Service offering, a LISTING. You may be required to register an account to access and use many features of the Juciparo website, and you must keep your account information accurate. As the provider of the Juciparo platform, Juciparo does not own, control, offer or manage any Goods or Services directly. We are a marketplace open to any legit business that wants to gain visibility through our website."
              subText = "Juciparo is not a party to the contracts entered into directly between Vendors and Buyers, nor is Juciparo a manufacturer, real estate broker, travel agency, or insurer. Juciparo is not acting as an agent in any capacity for any Member except as specified in the Payments Terms of Service PAYMENT TERMS. We maintain other terms and policies that supplement these Terms, like our Privacy Policy, which describes our collection and use of personal data, and our Payments Terms, which govern any payment services provided to Members by the Juciparo payment entities. If you are a Vendor, you are responsible for understanding and complying with all laws, rules, regulations, and contracts with third parties as applied within the Juciparo terms and conditions. "
            />
            <TermsCard 
                head = "VENDORS TERMS"
                text = "Posting on Juciparo.com : As a vendor, Juciparo offers you the right to use the Juciparo platform to sell your goods, services, and offers without our vibrant community of customers and loyal buyers- and earn money doing so. The Juciparo has a marketplace where you easily create your store and start selling. You are in control of how you sell as long as you follow our posting guidelines - set your price, availability, and rules for each good, service, or offer you create. Beyond offering stores to our vendors, we also render other services that will enhance your business and boost your income on a short-term and long-term basis. Those other services include; warehousing, logistics, microfinance, and real estate. You are free to use these services. We are encouraging you to harness these services for your benefit."
                subText = "Contracting with buyers : You enter into a contract directly with the buyer when you accept an order request or receive an order confirmation through the Juciparo platform. You are responsible for providing what the customer ordered under the terms and at the price and specification indicated by the customer. You also agree to pay applicable fees like Juciparo services fee (as indicated and appropriate taxes for each order) Juciparo Payments will deduct amounts you owe from your payout unless you and we agree to a different method. Any terms, policies, or conditions you include in any supplemental contract with Guests must: (i) be consistent with these Terms, our Additional Legal Terms, Policies, and the information provided in your Listing, and (ii) be prominent to disclose in your Listing description."
                subTextOne = "Independence of vendors : Your relationship with Juciparo is that of an independent individual or entity and not an employee, agent, joint venturer, or partner of Juciparo, except that Juciparo Payments acts as a payment collection agent as described in the Payments Terms. Juciparo does not direct or control your goods(service/offers), and you agree that you have complete discretion whether and when to provide Host Services, and at what price and on what terms to offer them."
                subTextTwo = "Creating and Managing Your Stores : The Juciparo Platform provides tools that make it easy to set up and manage your store(s). Your store must include complete and accurate information about your goods; your price, color and other specifications, additional fees, and any rules or requirements that apply to your customers or offers. Suppose you did not subscribe to our warehouse; you are responsible for keeping your Listing information (including stock availability) and content (like photos) up-to-date and accurate at all times. However, if you subscribe to our warehouse, we will manage your stock and update your store. We recommend obtaining appropriate insurance for your offers if you did not subscribe to our warehousing service. We suggest you carefully review policy terms and conditions, including coverage details and exclusions."
                subTextThree = "Cancellations, Travel Issues, and Booking Modifications : In general, if a Guest cancels an order, the vendor must comply with Juciparo as stated under the buyer's return/refund policy, especially when payment for the goods has been made."
                subTextFour = "Booking Modifications : Vendors and buyers are responsible for any order Modifications they agree to make via the Juciparo Platform or direct Juciparo customer service to make on their behalf and agree to pay any additional amounts, fees, or taxes associated with a Booking Modification."
                subTextFive = "Vendors Taxes : As a vendor, you are responsible for determining and fulfilling your obligations under applicable laws to report, collect, remit, or include in your price any applicable VAT or other indirect taxes, occupancy taxes, tourist, income, or other taxes TAXES."
            />
            <TermsCard 
                head = "BUYER'S TERMS"
                text = "Purchases : Suppose you wish to purchase products or services made available on the Juciparo Platform; you will be requested to supply information relevant to your purchase, including your full name, phone number, shipping address, Email, Country, State, and City."
                subText = "Links To Other Web Sites : Our services may contain links to third-party websites or services not owned or controlled by Juciparo (Nig) Services. Juciparo has no control over and assumes no responsibility for the contents, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that Juciparo shall not be responsible or liable, directly or indirectly, for damages or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services."
                subTextOne = "Return & Refund Policy : Thanks for using Juciparo. We're here to help if you are unsatisfied with our services. For Returns, you have seven calendar days to return an item from the date you received it. To be eligible for a return; -your item must be unused and in the same condition that you received it. -your item must be in the original packaging -your item needs to have a receipt or proof of purchase."
                subTextThree = "For Refunds;  we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you of the status of your refund after inspecting the item. If your return is approved, we will initiate a refund to your account (or original payment method). You will receive the credit within a few days, depending on your bank's policies."
                subTextFour = "For  Shipping; You will be responsible for your shipping costs for returning your item. Shipping costs are non-refundable unless otherwise stated. If you receive a refund, the cost of return shipping will be deducted from your refund."
                subTextFive = "Contact Us : If you have any questions on how to return your item to us, contact us."
            />
            <TermsCard 
                head = "GENERAL TERMS"
                text = "Changes : At our sole discretion, we reserve the right to modify or replace these Terms at any time. If a revision is a material, we will provide at least seven days' notice before any new terms take effect. What constitutes a material change will be determined at our sole discretion."
                subText = "Contact Us : If you have any questions about these Terms, don't hesitate to get in touch with us."
                subTextOne = "Reviews : After each successful purchase and delivery, vendors and buyers will have an opportunity to review each other. Your Review must be accurate and may not contain discriminatory, offensive, defamatory, or different language that violates our Content Policy or Review Policy. Reviews are only sometimes verified by Juciparo for accuracy and may need to be corrected or more accurate."
                subTextThree = "Fees : Juciparo may charge fees (and applicable Taxes) to Vendors and Buyers for the right to use the Juciparo Platform. You can find more information about when service fees apply and how they are calculated on our Service Fees page. Except as otherwise provided on the Juciparo Platform, service fees are non-refundable. Juciparo reserves the right to change the service fees at any time and will provide Members notice of any fee changes before they become effective. Fee changes will not affect bookings made before the effective date of the fee change. You may terminate this agreement anytime if you disagree with a fee change."
                subTextFour = "Content : Parts of the Juciparo Platform enable you to provide feedback, text, photos, audio, video, information, and other content (collectively, CONTENT). By providing Content, in whatever form and through whatever means, you grant Juciparo a non-exclusive, worldwide, royalty-free, irrevocable, perpetual, sub-licensable and transferable license to copy, modify, prepare derivative works of, distribute, publish and otherwise exploit that Content, without limitation. If Content includes personal information, our Privacy Policy describes how we use that personal information. Where Juciparo pays for content creation or facilitates its creation, Juciparo may own that Content, in which case supplemental terms or disclosures will say that. You are solely responsible for all Content that you provide and warrant that you either own it or are authorized to grant Juciparo the rights described in these Terms. You are accountable and liable if any of your Content violates or infringes any third party's intellectual property or privacy rights. Content must comply with our Content Policy and Nondiscrimination Policy, which prohibit, among other things, discriminatory, obscene, harassing, deceptive, violent, and illegal content. You agree that Juciparo may make available services or automated tools to translate Content and that your Content may be translated using such services or tools. Juciparo does not guarantee the accuracy or quality of translations, and Members are responsible for confirming the accuracy of such translations."
            />
        </div>

        <div className='termsUse--section'>
          <TermsUse />
        </div>
        
       
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export default Terms


