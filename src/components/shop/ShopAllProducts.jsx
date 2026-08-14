import React, { useEffect, useState } from 'react'
import Breadcrumb from '../layout/common/Breadcrumb'
import axios from 'axios'
import Product from "../layout/common/Product"
const ShopAllProducts = () => {
    const [products, setProducts] = useState([])
    const [item, setitem] = useState(null)
    useEffect(() => {
        axios.get('https://dummyjson.com/products?limit=200').then((res => {
          setProducts(res.data.products)

        })).catch((err) => {
            console.log(err)
        })


    }, [])
   
    function handleview(hup){
      setitem(hup)
    }
   
  return (
    <div className='w-full '>
      <div className='flex'>

      <Breadcrumb />

      {/*  dropdown sorting */}

      <select className=" w-35   border-b-2 !focus:border-b-2 text-sm font-medium text-primary rounded-base cursor-pointer  uppercase">
        <option  >Default Select</option>
        <option value="US" >high to low</option>
        <option value="CA" >low to high</option>

      </select>
      <div className='border-l-4 ml-7.5 border-[#e4e4e4] pl-7.5'>
        <ul className='flex font-medium text-sm text-primary uppercase gap-2.75 '>
          <li >view</li>
          <li onClick={()=>handleview(2)} className='cursor-pointer'>2</li>
          <li onClick={()=>handleview(3)} className='cursor-pointer'>3</li>
          <li onClick={()=>handleview(4)} className='cursor-pointer'>4</li>
        </ul>
      </div>
      </div>
      <div className={`grid ${item==2?"grid-cols-2":item==4?"grid-cols-4":"grid-cols-3"}  justify-center gap-x-10`} >

{
  products.map((item)=>(
    <Product item={item} key={item.id}/>
  ))
}
      </div>


    </div>
  )
}

export default ShopAllProducts