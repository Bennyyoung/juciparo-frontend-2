import { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import StarRating from "../component/starrating/StarRating"


function ProductGrid({products}) {

  return (
    <div className="grid h-screen place-items-center md:grid-cols-4 sm:grid-cols-2 grid-cols-1 pl-80 pr-80 sm:pl-10 sm:pr-10 ml-20 mr-20">
      {
        products.map((product, index) => {
          return (<div className="h-80 bg-white-100 shadow-lg px-[2rem] w-[12rem]" key={index}>
            <div className="bg-red-500 w-20 rounded">
              <button className="text-white text-sm p-2">{product.condition}</button>
            </div>
            <div className="p-1 -mt-1">
              <img src={`https://admin.juciparo.com${product.photo}`} alt="laptop" />
            </div>
            <div>
              <p className="text-sm text-left mx-2 mt-2">{product.title}</p>
            </div>
            <div className="flex mt-2">
              <Link className="no-underline" to={`/product/${product.slug}`}>
                <p className="text-sm text-left mx-2">&#8358;
                <span className="text-red-500">
                  {product.price}
                  </span>
                </p>
              </Link>
              <p className="text-sm text-left mx-2"><span className="line-through text-gray-400">&#8358;{product.discount}</span></p>
            </div>
            <div className="flex mt-2">
              <StarRating />
            </div>
          </div>)
        })
      }

    </div>
  );
}

export default ProductGrid;
