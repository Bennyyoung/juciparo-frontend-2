import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
function CategoriesProd() {
    const [data, setData] = useState([]);
    const {test} = useParams();

    const getProduct = () => {
        axios.get(`https://admin.juciparo.com/api/v1/categories/${test}`)
        .then(function (response) {
             //console.log(response?.data?.data);
            setData(response?.data?.data);
        })
    }

    console.log("data from categories: ",data)
    useEffect(() => {
        getProduct();
    },[test])
  return (
    <div className='prodCategories'>
    {/* map the data */}
      <div key={data?.id}>
        <button className=''>{data?.condition}</button>      
        <div className="img">
          <img src={`https://admin.juciparo.com${data?.photo}`} alt="placeholder"  /> 
        </div>
        <div className='products-text'>
          <Link to={"/productDetails/" + data.slug}>
            {data?.title}
          </Link>
          <div>
            <h5>{data?.price}</h5>
            <p style={{ textDecoration: "line-through" }}>{data?.discount}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesProd


