import React, { useEffect, useState } from 'react'
import Breadcrumb from '../layout/common/Breadcrumb'
import axios from 'axios'

const ShopAllProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/products?limit=200').then((res => {
          setProducts(res.data.products)

        })).catch((err) => {
            console.log(err)
        })


    }, [])
   
  return (
    <div className='w-full '>
      <div className='flex'>

      <Breadcrumb />

      {/*  dropdown sorting */}

      <select className=" w-35  border-b-2 !focus:border-b-2 text-sm font-medium text-primary rounded-base cursor-pointer  uppercase">
        <option  >Default Select</option>
        <option value="US" >high to low</option>
        <option value="CA" >low to high</option>

      </select>
      <div className='border-l-4 ml-7.5 border-[#e4e4e4] pl-7.5'>
        <ul className='flex font-medium text-sm text-primary uppercase gap-2.75 '>
          <li>view</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
      </div>


    </div>
  )
}

export default ShopAllProducts