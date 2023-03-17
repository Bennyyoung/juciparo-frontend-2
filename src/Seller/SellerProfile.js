import { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify";
import Footer from '../Footer'
import Navbar from '../Navbar'
import Newsletter from '../Newsletter'
import Profile from './Profile'
import "./SellerProfile.css"
import SellerNext from './SellerNext'
import { ProductCarouselData } from '../Data/Data'
import { Link, Navigate } from 'react-router-dom'
import ProductGrid from "../category/ProductGrid";


function SellerProfile() {
  const [products, setProducts] = useState([])


  const getProducts = async () => {
    try {
      const response = await axios.get('https://admin.juciparo.com/api/v1/products')
      const { data } = await response
      setProducts(data?.data)

    } catch (err) {
      toast(err)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <Navbar />
      <div className='sellerProfile'>
        <Profile />
        <ProductGrid products={products} />

      </div>

      <Newsletter />
      <Footer />
    </>
  )
}

export default SellerProfile
