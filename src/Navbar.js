import React, { useState, useEffect } from "react"
import "./Navbar.css"
import logo from "../src/Images/logoOne.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
import AccountDropDown from './AccountDropDown';
//import { SidebarData } from './Data/Data';
import axios from 'axios';
import { useSelector } from "react-redux";
import Modal from "./Modal/Modal"
import CategoryBar from "./CategoryBar/CategoryBar"


function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  //Products
  const [products, setProducts] = useState([]);
  const [showProductDiv, setShowProductDiv] = useState(false);
  //Prouct Categories
  const [click, setClick] = useState(false);
  const onClick = () => setShowDiv(!showDiv);
  const [showDiv, setShowDiv] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => setClick(!click);
  const state = useSelector(state => state.handleCart);


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


  const class_style = 'ml-[5rem]'


  return (
    <div className='sticky__nav'>

      <nav className={click ? "nav__container active " : "nav__container"}>
        <div className='nav__contain' >
          <div className="nav__top">
            <Link to="/">
              <img src={logo} alt='logo' />
            </Link>
            <div className='nav__links'>
              <Link className='navLinkOne' to="/intro-page">
                Sell An Item
              </Link>
              <Link className='navLinkTwo' to="/about-us">
                About Us
              </Link>
            </div>

            <Link className='nav__notification'>
              <Icon icon="clarity:notification-line" />
              Notification
            </Link>
          </div>

          <div className='nav__bottom'>
            <button onClick={() => onClick()}>
              Categories
            </button>
            {
              <Modal showDiv={showDiv} onClose={() => onClick()} class_style={class_style}>
                <CategoryBar data={data} showDiv={showDiv}/>
              </Modal>
            }

            <div className='absolute w-[531px] h-[54px] left-[28%] flex'>
              <input
                type="text"
                className="w-[443px] text-[15px] pl-[20px] pt-[25px] pb-[25px] font-[400] text-[#8C8C8C] border border-[#8C8C8C]"
                placeholder="Search for anything"
                value={searchQuery}
                onChange={handleChange}

              />
              <button className='w-[88px] h-[54px] hover:rounded-lg hover:bg-[#D90303] rounded px-[20px] py-[5px] bg-[#EF0000] border border-[#EF0000]' onClick={handleClicked}>
                <Icon
                  icon="ion:ios-search"
                  aria-hidden="true"
                  role="img"
                  className="text-[#FDFDFD]"
                  width="2em"
                  height="2em"
                  viewBox="0 0 512 512"
                />
              </button>
              {
                showProductDiv ?
                  <ul
                    style={{
                      listStyleType: "none",
                      position: "absolute",
                      backgroundColor: "white",
                      left: 0,
                      top: 70,
                      className: "ul-filter",
                      padding: "15px",
                      zIndex: 999,
                      width: 180,
                      height: "50vh",
                      border: "1px solid black",
                      overflow: "hidden"
                    }}
                  >
                    {products.map((product) => (
                      <li key={product.id}>
                        <Link to={"/product/" + product.slug}
                          style={{
                            textDecoration: "none",
                            cursor: "pointer",
                            color: "var(--secondary400)",
                            fontFamily: 'Montserrat',
                            fontstyle: "normal",
                            fontWeight: "400",
                            fontSize: "15px",
                            lineHeight: "18px"
                          }}
                        >
                          {product.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  : null
              }


            </div>
            <div className='nav__bottom__list'>
              <Link to="">
                <AccountDropDown />
              </Link>
              <Link to={`/cart/${state[state.length - 1]?.slug}`}>
                <Icon icon="ant-design:shopping-cart-outlined" />
                <p>
                  {state.length}
                </p>
                Cart
              </Link>
              <Link to="/help">
                <Icon icon="bx:help-circle" />
                Help
              </Link>
            </div>
          </div>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>

      </nav>
    </div>
  )
}

export default Navbar


