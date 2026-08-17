import React, { useEffect, useState } from 'react'
import Breadcrumb from '../layout/common/Breadcrumb'
import axios from 'axios'
import Product from "../layout/common/Product"
import Pagination from './Pagination'

const ShopAllProducts = () => {
  const [products, setProducts] = useState([])
  const [view, setview] = useState(3)
  const [loading, setloading] = useState(true)
    const [CurrPage, setCurrPage] = useState(1);
    const [ProductPerPage, setProductPerPage] = useState(9)
 
    
  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=200').then((res => {
      setProducts(res.data.products)
setloading(false)
    })).catch((err) => {
      setloading(false)
      console.log(err)
    })


  }, [])

     const lastIdx=CurrPage * ProductPerPage;
    const firstIdx=lastIdx-ProductPerPage

const SliceData=products.slice(firstIdx,lastIdx)
console.log(SliceData)


  function handleview(hup) {
    setview(hup)
  }
  if(loading){
    return (
      <div className='grid grid-cols-3  gap-5 content-start'>
      {Array.from({length:6},(hup,idx)=>(

<div key={idx}
  role="status"
  className="w-80 h-75 p-4 border-5 border-[#3333332a] rounded-2xl shadow-xs animate-pulse md:p-6"
>
  <div
    role="status"
    className="flex items-center justify-center h-40 w-full bg-neutral-quaternary rounded-base animate-pulse mb-4 sm:mb-6"
  >
    <svg
      className="w-11 h-11 text-fg-disabled"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM9 12h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Zm5.697 2.395v-.733l1.269-1.219v2.984l-1.268-1.032Z"
      />
    </svg>
    <span className="sr-only">Loading...</span>
  </div>
  <div className="h-2.5 bg-[#33333375] rounded-full w-48 mb-4" />
  <div className="h-2 bg-[#33333375]  rounded-full mb-2.5" />
  <div className="h-2 bg-[#33333375]  rounded-full mb-2.5" />
  <div className="h-2 bg-[#33333375]  rounded-full" />
 
</div>
      ))}


      </div>

    )
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
            <li onClick={() => handleview(2)} className='cursor-pointer'>2</li>
            <li onClick={() => handleview(3)} className='cursor-pointer'>3</li>
            <li onClick={() => handleview(4)} className='cursor-pointer'>4</li>
          </ul>
        </div>
      </div>
      <div style={view == 2 ? { display: "grid", gridTemplateColumns: "1fr 1fr" } : view == 4 ? { display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", columnGap: "20px" } : { display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>

        {
          SliceData.map((item) => (
            <Product item={item} key={item.id} />
          ))
        }
      </div>
<div className='mt-5 text-center'>
<button onClick={()=>setCurrPage(CurrPage-1)}>pre</button>
<button onClick={()=>setCurrPage(CurrPage+1)}>next</button>
<Pagination item={products}/>
</div>
    </div>
  )
}

export default ShopAllProducts