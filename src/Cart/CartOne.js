import { Icon } from '@iconify/react'
import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCart, delCart } from "../redux/action";
//import imgB from "../Images/product2.jpg"
import "./CartOne.css"

function CartOne() {
  const state = useSelector((state) => state.handleCart);
  
  const dispatch = useDispatch();

  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
  };
 
//



  return (
    <div className='cartOne__container'>
      <h4>Cart ({state.length})</h4>
      {state.map((item) => {
        return (
      <div className='cartBox' key={item.id}>
        <div className='cart__left'>
          <img src={`https://admin.juciparo.com${item?.photo}`} alt={item.title} />
          <h5>{item.title}</h5>
          {/* <div>{item.title}</div> */}
        </div>
        <div className='cart__right'>
          <div>
            <div className='cart__menuIcon'>
              <button
                onClick={() => {
                  addItem(item);
                }}
              >
                <Icon icon="ep:arrow-up" />
              </button>
              <button
                onClick={() => {
                  removeItem(item);
                }}
              >
                <Icon icon="ep:arrow-down" />
              </button>
            </div>
            {item.qty}
          </div>
          <h4>₦{(+item.price).toLocaleString("en-NG")}</h4>
          <button
                onClick={() => {
                  removeItem(item);
                }}
              >
                <Icon 
                  icon="iconoir:cancel" 
                  width="25"
                  height="25"
                />
              </button>
          
        </div>

      </div>
      )})}
    </div>
  )
}

export default CartOne


