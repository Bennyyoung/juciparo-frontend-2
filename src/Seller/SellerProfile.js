import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Newsletter from '../Newsletter'
import Profile from './Profile'
import "./SellerProfile.css"
import SellerNext from './SellerNext'
import { ProductCarouselData } from '../Data/Data'
import { Link, Navigate } from 'react-router-dom'


function SellerProfile() {
  return (
    <>
      <Navbar /> 
      <div className='sellerProfile'>
        <Profile /> 
        <div className='sellerProfile__products'>
          <SellerNext
            show={3} 
            style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}
          >
            {ProductCarouselData.map((product) => {
              return (
                <div key={product.id}>
                  <button className=''>{product.btn}</button>
                  <div className="img">
                    <img src={product.img} alt="placeholder"  /> 
                  </div>
                  <div className='seller-text'>
                  <Link to="/productDetails" onClick={() => Navigate(product.route)}>
                {/*   <Link onClick={handleDes}>  */}
                      {product.pText}
                    </Link>
                    <div>
                      <h5>{product.Hprice}</h5>
                      <p style={{ textDecoration: "line-through" }}>{product.Pprice}</p>
                    </div>
                  </div>
                </div>
              )
            })}
        
          </SellerNext>
        </div>
        
      </div>
      
      <Newsletter />
      <Footer />
    </>
  )
}

export default SellerProfile
