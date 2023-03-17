import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import Navbar from '../Navbar'


function CategoriesProd() {
  const [data, setData] = useState([]);
  const { test } = useParams();

  const getProduct = () => {
    axios.get(`https://admin.juciparo.com/api/v1/categories/${test}`)
      .then(function (response) {
        setData(response?.data?.data);
      })
  }

  useEffect(() => {
    getProduct();
  }, [test])
  return (
    <>
      <Navbar /> 

      <div className='prodCategories'>
        {/* map the data */}
        <div key={data?.id}>
          <button className=''>{data?.condition}</button>
          <div className="img">
            <img src={`https://admin.juciparo.com${data?.photo}`} alt="placeholder" />
          </div>
          <div className='products-text'>
            <Link to={"/product/" + data.slug}>
              {data?.title}
            </Link>
            <div>
              <h5>{data?.price}</h5>
              <p style={{ textDecoration: "line-through" }}>{data?.discount}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoriesProd


