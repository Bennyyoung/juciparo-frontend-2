import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductInfo.css"
import { Icon } from '@iconify/react';
import { Link, useParams } from 'react-router-dom';
import { addCart, delCart } from "../redux/action";
import axios from "axios";
import SelectLabels from "./sizeButton";


const handleClick = (event, key) => {
  console.log(event.target);
  console.log('key index: ', key);
};

function ProductInfo() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const state = useSelector((state) => state.handleCart);

  const addProduct = async () => {
    setLoading(true);
    const response = await axios.get(`https://admin.juciparo.com/api/v1/cart/add/${id}`)
    .then(function() {
        console.log(response?.message);
        console.log(response?.status);
        //setProduct(response?.data?.data);
      })

    dispatch(addCart(product));
    
  }
  
  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const getProducts = async () => {
    //console.log("ajhskahkahk")  
    //console.log(id);
    const response = await axios.get(`https://admin.juciparo.com/api/v1/product/${id}`)
    .then(function(response) {
      //console.log(response?.data?.data);
      console.log(response?.status);
      setProduct(response?.data?.data);
    })
  };
  useEffect(() => {
    getProducts();
  }, [id]);

   // console.log(product);



  return (
    <div className='productInfo__container'>
      <h5>Product Information</h5>
  
      <div className='productInfo'>
        <div className='prod_img' onClick={event => handleClick(event)}>
            <img src={`https://admin.juciparo.com${product?.photo}`} alt={product.title} />
        </div>    
        <div className='productInfo__right'>
              <div className='prod__header'>
                  <h3>{product?.title}</h3>
                  <h5>{product?.stock}</h5>
              </div>
              <div className='prod__amount'>
                  <h4>{product?.price}</h4>
                  <h5>{product?.discount}</h5>
              </div>
              <div className='prod__colors'>
                  <h5>Color</h5>
                  <div className='colors'>
                      <div></div>
                      <div></div>
                  </div>
              </div>
              <div className='prod__size'>
                  <h5>Size</h5>
                  <SelectLabels />

              </div>
              <div className='prod__menu'>
              {cart.map((item) => {
                return (
                  <div>
                    <div className='prod__menuIcon'>
                      <button
                        onClick={() => {
                          addItem(item);
                        }}
                      >
                        <Icon icon="ep:arrow-up" />
                      </button>
                      <button
                        onClick={() => {
                          removeItem(item.id);
                        }}
                      >
                        <Icon icon="ep:arrow-down" />
                      </button>
                    </div>
                    {item.qty}
                  </div>
              )})}

                  <button onClick={addProduct}>
                    <Icon icon="ant-design:shopping-cart-outlined" />
                    <Link to={"/Cart/" + product.slug}>
                        Add to Cart
                    </Link>
                    
                  </button>
                  <div className='prod__menuWish'>
                    <Icon icon="icon-park-outline:like" />
                    <Link to="/wishList">WishList</Link>
                  </div>
              </div>
              <div className='product__socialIcons'>
                <h4>Share This Product</h4>
                <div className='product__social'>
                  <Icon icon="dashicons:facebook-alt" />
                  <Icon icon="teenyicons:instagram-outline" />
                  <Icon icon="brandico:twitter-bird" />
                </div>
              </div>
        </div>
      </div>
        
    </div>
  )
}

export default ProductInfo

//POST
//https://admin.juciparo.com/api/v1/cart/add

