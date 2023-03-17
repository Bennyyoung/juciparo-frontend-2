import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';


const CategoryBar = ({data, showDiv}) => {

  const navigate = useNavigate()
  return (
    <div className={showDiv ? "absolute z-1 w-[220px] h-[543px] top-[70px] left-[135px] gap-x-[45px] flex items-center flex-col bg-white border border-black rounded-[5px]": "hidden"}>
      {data?.map((item, index) => {
        return (
            <div className='relative items-center py-3 px-0 w-[190px] transition duration-300 ease-in-out rounded-lg flex flex-row justify-start hover:cursor-pointer hover:bg-[#EF0000] hover:text-white hover:py-3 hover:w-[220px]'
              key={index}
            >
              <Icon icon={item?.icon} />
              <p className="" onClick={() => navigate(`/categories-product/${item.slug}`)}>
                {item?.title}
              </p>

            </div>
        )
      }
      )}
    </div>
  )
}

export default CategoryBar