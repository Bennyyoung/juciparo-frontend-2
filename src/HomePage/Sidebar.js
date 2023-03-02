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
          console.log(response?.data?.data);
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
        console.log(response?.data?.data)
        setProducts(response?.data?.data)
      })
  };
  useEffect(() => {
    filterProducts();
  }, []);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    console.log(searchQuery);
  }

  const handleClicked = () => {
    const filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setProducts(filteredProducts);
    setShowProductDiv(!showProductDiv);
  }

  //const navigate = useNavigate();

  return (
    <div className='sidebar'>
      {SidebarData.map((item, index) => {
        return (
          <>
            <div className={index ? 'menuItem active' : 'menuItem'}
              key={index}
              onClick={onClick}
            >
              <Icon icon={item.icon} />
              {
                data.filter(el => el.slug === item.slug).map(el => (
                  <Link to={`/CategoriesProd/${el.slug}`}>
                    {item.title}
                  </Link>
                ))
              }
              {/* {data.map((el) => {
              
              return (
                <Link to={`/CategoriesProd/${el.slug}`}>
                  {item.title}
                </Link>
              )
            })} */}
            </div>
            {/* {showDiv ? (
            <div 
              className='categoryList'
            >
              {
                CategoryList.map((list, ind) => {
                  return (
                    <>
                      <ul>
                        <li>{list.headOne}</li>
                        <li>{list.textOneA}</li>
                        <li>{list.textOneB}</li>
                        <li>{list.textOneC}</li>
                        <li>{list.textOneD}</li>
                      </ul>
                      <ul>
                        <li>{list.headTwo}</li>
                        <li>{list.textTwoA}</li>
                        <li>{list.textTwoB}</li>
                        <li>{list.textTwoC}</li>
                        <li>{list.textTwoD}</li>
                      </ul>
                      <ul>
                        <li>{list.headThree}</li>
                        <li>{list.textThreeA}</li>
                        <li>{list.textThreeB}</li>
                        <li>{list.textThreeC}</li>
                        <li>{list.textThreeD}</li>
                      </ul>
                      <ul>
                        <li>{list.headFour}</li>
                        <li>{list.textFourA}</li>
                        <li>{list.textFourB}</li>
                        <li>{list.textFourC}</li>
                        <li>{list.textFourD}</li>
                      </ul>
                    </>  
                  )
                })
              }
            </div>
          )
          : null
        } */}
          </>
        )
      })}
    </div>
  )
}

export default Sidebar
