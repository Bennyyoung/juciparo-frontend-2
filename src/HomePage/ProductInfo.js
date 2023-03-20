import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductInfo.css"
import { Icon } from '@iconify/react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { addCart, delCart } from "../redux/action";
import axios from "axios";
import SelectLabels from "./sizeButton";
import { toast } from "react-toastify"

function ProductInfo() {
  const { id } = useParams();
  const [count, setCount] = useState(1)
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate();



  const dispatch = useDispatch();



  const state = useSelector((state) => state.handleCart);

  const response = useSelector((state) => state.auth);

  const token = response?.user.authorisation?.access_token

  const user = localStorage.getItem("user");

  const addProduct = async (product) => {
    setLoading(true);
    const response = await axios.get(`https://admin.juciparo.com/api/v1/cart/add/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if (user === null) {
      toast(`You must be logged in`)
    } else {
      toast(`${response?.data?.message}`)
      setTimeout(() => {
        dispatch(addCart(product));
      }, 500)
    }
  }

  const addItem = (product, count) => {
    setCount(prev => prev + 1)
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    setCount(prev => prev - 1)
    dispatch(delCart(product));
  };



  const getProducts = async () => {
    const response = await axios.get(`https://admin.juciparo.com/api/v1/product/${id}`)
    const { data } = await response?.data
    setProduct(data)
    setIsLoading(false)
  };
  useEffect(() => {
    getProducts();
  }, [id]);

  return (
    <div className='productInfo__container'>
      <div className="flex justify-end text-[#000000] text-[20px] font-[500]">Contact Seller</div>
      <div className='productInfo'>
        <div className='prod_img'>
          <img src={`https://admin.juciparo.com/${product?.photo}`} alt={product.title} />
        </div>
        <div className='productInfo__right'>
          <div className='prod__header'>
            <h3>{product?.title}</h3>
            <h5>{product?.stock > 0 ? 'In stock' : null}</h5>
          </div>
          <div className='prod__amount'>
            {isLoading ? (
              <div className="flex justify-center items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-red-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 100-16 8 8 0 000 16zm-4 4a4 4 0 110-8 4 4 0 010 8z"
                  ></path>
                </svg>
              </div>
            ) : (
              <h4>{`₦ ${(+product?.price).toLocaleString("en-NG")}`}</h4>
            )}
            {isLoading ? (
              <div className="flex justify-center items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-red-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 100-16 8 8 0 000 16zm-4 4a4 4 0 110-8 4 4 0 010 8z"
                  ></path>
                </svg>
              </div>
            ) : (
              <h5 className="line-through text-gray-500">{`₦ ${(+product?.discount).toLocaleString("en-NG")}`}</h5>

            )}

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
            <div>
              <div className='prod__menuIcon'>
                <button
                  onClick={() => {
                    addItem(product, count);
                  }}
                >
                  <Icon icon="ep:arrow-up" />
                </button>
                <button
                  onClick={() => {
                    removeItem(product.id);
                  }}
                >
                  <Icon icon="ep:arrow-down" />
                </button>
              </div>
              {count === 0 ? setCount(1) : count}
            </div>

            <button onClick={() => addProduct(product)}>
              <Icon icon="ant-design:shopping-cart-outlined" />
              <Link to={"/cart/" + product?.slug}>
                Add to Cart
              </Link>

            </button>
            <div className='prod__menuWish'>
              <Icon icon="icon-park-outline:like" />
              <Link to="/wishList">Favourite</Link>
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

