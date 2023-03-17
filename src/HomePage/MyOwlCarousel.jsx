//import React, { Component } from 'react';
import React, { useEffect, useState } from 'react'
import "./MyOwlCarousel.css"
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import { toast } from "react-toastify"

function IndividualIntervalsExample() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;

  const getProducts = async () => {
    try{
      const response = await axios.get("https://admin.juciparo.com/api/v1")
      if(componentMounted) {
        setData(response?.data?.data?.banners)
      }
    } catch(err) {
      toast(err)
    }
    // .then(function(response) {
    //   setData(response?.data?.data?.banners)
    // })
    // if (componentMounted) {
    //   setData(await response.clone().json());
    //   setFilter(await response.json());
    // }
  };

  useEffect(() => {
    getProducts();
  }, []);
  
  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  }

  return (
    <Carousel>
      {data?.map((product, index) => {
        return (
          <Carousel.Item interval={1000} key={index}>
            <Carousel.Caption>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <button>Shop Now</button>
            </Carousel.Caption>
            <img
              className="d-block w-100"
              src={`https://admin.juciparo.com${product.photo}`} 
              alt="slides"
            />
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}

export default IndividualIntervalsExample;

