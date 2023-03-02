import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "./RecommendsCarousel.css"
import right from "../Images/right.svg"
import left from "../Images/left.svg"
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

function RecommendsCarousel () {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;

  
  const getProducts = async () => {
    //setLoading(true);
   
    const response = await axios.get("https://admin.juciparo.com/api/v1/products")
    .then(function(response) {
      console.log(response?.data?.data);
      setData(response?.data?.data)
    })
    //https://fakestoreapi.com/products?limit=5
    if (componentMounted) {
      setData(await response.clone().json());
      setFilter(await response.json());
      //console.log(filter);
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
      speed: 500,
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
            initialSlide: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
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
      <div className="recommends-carousel-container">
        <div className="recommends-carousel-wrapper">
          <div className='wrappers-text'>
            <h4>Recommended For You</h4>
            <h5>See All</h5>
          </div>
          <Slider {...settings}>

          {data?.map((product) => {
            return (
              <div key={product.id}>
                {product.condition === 'default' ? null : <button className=''>{product.condition}</button>}

                <div className="img">
                  <img src={` https://admin.juciparo.com${product.photo}`} alt="placeholder"  /> 
                </div>
                <div className='recommends-text'>
                  <Link to={"/productDetails/" + product.slug}>
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

export default RecommendsCarousel

