import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import "./Summary.css"
import BasicTabs from './BasicTabs';

function Summary(props) {
  //const { id } = useParams();
  //const [product, setProduct] = useState([]);

  const state = useSelector((state) => state.handleCart);
  let subtotal = 0;
  let deliveryFee = 30.0;
  let totalItems = 0;
  state.map((item) => {
    return (subtotal += item.price * item.qty);
  });

  state.map((item) => {
    return (totalItems += item.qty);
  });

  return (
    <div>
      <div className='cartSummary'>
        <div>
          <h4>{props.head}</h4>
          <div className='cartSummary__row'>
            <div>
              <h5>{props.subTotal} ({totalItems}) :</h5>
              <h4><b>₦{(Math.round(+subtotal)).toLocaleString("en-NG")}</b></h4>
            </div>
            <div className="my-[1rem]">
              <h5>{props.delivery} :</h5>
              <h5><b>₦{(+deliveryFee).toLocaleString("en-NG")}</b></h5>
            </div>
            <div>
              <h5>{props.total} :</h5>
              <h5><b>₦{(Math.round(+(subtotal + deliveryFee)).toLocaleString("en-NG"))}</b></h5>
            </div>
          </div>
        </div>
        <Link to="/CheckoutOne" >
          Checkout
        </Link>
      </div>
    </div>
  )
}

export default Summary
