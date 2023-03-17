import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "../Seller/SellerNext.css"
import right from "../Images/right.svg"
import left from "../Images/left.svg"
import "react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <img src={right} alt="right" />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className,  onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <img src={left} alt="left" />
    </div>
    
  );
}

function ProductsCarousel (props) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;

  const getProducts = async () => {
    const response = await axios.get("https://admin.juciparo.com/api/v1/products")
    .then(function(response) {
      setData(response?.data?.data)
    })
    //https://fakestoreapi.com/products?limit=5
    if (componentMounted) {
      setData(await response.clone().json());
      setFilter(await response.json());
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  
  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  }

  var settings = {
      dots: false,
      infinite: false,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            infinite : true
          }
        }
      ]
    };
    

    return (
      <div className="seller-carousel-container">
        <div className="seller-carousel-wrapper">
          <div className='wrappers-text'>
            <h4> Products</h4>
            <Link to="/category">
                <h5>See All</h5>
            </Link>
          </div>
          <Slider {...settings}>

          {data?.map((product) => {
            return (
              <div key={product.id}>
                    <button className='cardbtn'>{product.condition}</button>
                <div className="img">
                  <img src={`https://admin.juciparo.com${product.photo}`} alt="placeholder"  /> 
                </div>
                <div className='products-text'>
                  <Link to={"/product/" + product.id} onClick={() => navigate(product.route)}>
                    {product.title}
                  </Link>
                  <div>
                      <h5>{product.price}</h5>
                      <p style={{ textDecoration: "line-through" }}>{product.discount}</p>
                  </div>
                </div>
              </div>
            )
          })}
         
          </Slider>
        </div>
      </div>
    );
  
}

export default ProductsCarousel

