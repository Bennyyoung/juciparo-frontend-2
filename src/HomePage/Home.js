import React, { useEffect, useState } from 'react'
import "./Home.css"
import Landing from './Landing'
import FirstCarousel from './FirstCarousel'
import { GadgetData } from '../Data/Data'
//import ProductCarousel from "../HomePage/ProductCarousel"
import RecommendsCarousel from './RecommendsCarousel'
import Gadget from './Gadget'
import SellingCarousel from './SellingCarousel'
import Brand from './Brand'
import Discuss from './Discuss'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Newsletter from "../Newsletter"
import { Link, useNavigate } from 'react-router-dom'
import ProductsCarousel from './ProductsCarousel'
import axios from 'axios'
import UserService from "../services/user.service";

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [content, setContent] = useState("")
  let componentMounted = true;

  const getProducts = async () => {
    const response = await axios.get("https://admin.juciparo.com/api/v1/categories")
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

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);
  console.log("data from home", data)
  return (
    <>
      <div className='chief__container'>
        <Navbar /> 
        <div className='home__container'>
          <Landing />
          <FirstCarousel 
            show={3} 
            style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: '15rem' }}
          >
            {data?.map((product) => {
            // console.log(product.slug)
              return (
                <div>
                  <div className="img">
                    <img src={`https://admin.juciparo.com${product.photo}`} alt="placeholder"  /> 
                  </div>
                  <p
                    onClick={() => navigate(`/CategoriesProd/${product.slug}`)}
                  >
                    {product.title}
                  </p>
                </div>
              )
            })}
            
          </FirstCarousel>
        
        
          <ProductsCarousel />
          <RecommendsCarousel />
          <Gadget
              show={3} 
              style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}
          >
            {
                GadgetData.map((product) => {
                  return (
                    <div>
                      <div className='gadget-right'>
                        <div className='gadget-text'>
                            <h5>{product.header}</h5>
                            <p>{product.para}</p>
                        </div>
                        <Link to="/productDetails" onClick={() => navigate(product.route)}>
                  {/*     <Link onClick={handleDes}>  */}
                          {product.btn}
                        </Link>
                      </div>
                      <div className="img">
                        <img src={product.img} alt="placeholder"  /> 
                      </div>
                    </div>
                  )
                })
            }

          </Gadget>

          <SellingCarousel />
          
          <Discuss />

          <Brand />

        </div>
        <Newsletter />
        <Footer />
      </div>
      
    </>
  )
}

export default Home


