import React, { useState, useEffect } from 'react'
import "./Sidebar.css"
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { CategoryList, SidebarData } from "../Data/Data"
import axios from 'axios';

//import { List } from '@mui/material';


function Sidebar() {
  const [showDiv, setShowDiv] = useState(false);
  const onClick = () => setShowDiv(!showDiv);
  const [searchQuery, setSearchQuery] = useState('');
  const [showProductDiv, setShowProductDiv] = useState(false);


  const [data, setData] = useState([]);
  //Products
  const [products, setProducts] = useState([]);

  //Product Categories API Call
  const getProducts = async () => {
    const response = await axios.get("https://admin.juciparo.com/api/v1/categories")
      .then(
        function (response) {
          setData(response?.data?.data);
        })
  };
  useEffect(() => {
    getProducts();
  }, []);


  //Product Lists API Call
  const filterProducts = async () => {
    const response = await axios.get("https://admin.juciparo.com/api/v1/products")
      .then(function (response) {
        setProducts(response?.data?.data)
      })
  };
  
  useEffect(() => {
    filterProducts();
  }, []);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleClicked = () => {
    const filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setProducts(filteredProducts);
    setShowProductDiv(!showProductDiv);
  }

  return (
    <div className='sidebar'>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div className={index ? 'menuItem active' : 'menuItem'}

              onClick={onClick}
            >
              <Icon icon={item?.icon} />
              {
                data.filter(el => el.slug === item?.slug).map((el, index) => (
                  <Link to={`/categories-product/${el.slug}`} key={index}>
                    {item?.title}
                  </Link>
                ))
              }
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar
