import React, { useEffect, useState } from 'react'
import "./ProductDetails.css"
import Navbar from '../Navbar'
import Footer from '../Footer'
import Newsletter from "../Newsletter"
import ProductInfo from './ProductInfo'
import ProductImgC from './ProductImgC'
import { Link } from 'react-router-dom'
import ProductDetailsTabs from './ProductSection'
import RecommendsCarousel from './RecommendsCarousel'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { toast } from "react-toastify"

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(`https://admin.juciparo.com/api/v1/product/${id}`)
      setProduct(response?.data?.data)

    } catch (err) {
      toast(err)
    }
  }
  
    useEffect(() => {
      getProducts();
    }, [id]);

    console.log("product: ",product)

    return (
      <>
        <Navbar />
        <div className='productDetails__container'>
          <ProductInfo />
          {/* <ProductImgC
            show={3}
            style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}
          >
            <div>
              <img src={`https://admin.juciparo.com${product?.photo}`} alt={product.title} />
            </div>
          </ProductImgC> */}

          <ProductDetailsTabs product={product} />

          <div className='storeName'>
            <h4>Sold by <Link to="/seller-profile">{product?.vendor?.name}</Link></h4>
          </div>
          <RecommendsCarousel />
          <RecommendsCarousel />
        </div>
        <Newsletter />
        <Footer />
      </>
    )
  }

  export default ProductDetails