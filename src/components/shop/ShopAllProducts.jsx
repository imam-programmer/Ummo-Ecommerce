import React, { useEffect, useState } from 'react'
import Breadcrumb from '../layout/common/Breadcrumb'
import axios from 'axios'
import Product from "../layout/common/Product"
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../slices/productSlice'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
const ShopAllProducts = ({ currentPage, setCurrentPage }) => {
  const [products, setProducts] = useState([])
  const [view, setview] = useState(3)
  const [loading, setloading] = useState(true)
  const FilterProduct = useSelector((state) => state.Products.filter)
  const [totalPages, settotalPages] = useState(0)
  const [Dropdown, setDropdown] = useState("Default Select")
  const [Dropshowhide, setDropshowhide] = useState(false)

  console.log(FilterProduct)
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=200').then((res => {
      setProducts(res.data.products)
      settotalPages(FilterProduct.length > 0 ? Math.ceil(FilterProduct.length / 12) : Math.ceil(res.data.products.length / 12))
      dispatch(addProduct(res.data.products))
      setloading(false)

    })).catch((err) => {
      setloading(false)
      console.log(err)
    })


  }, [FilterProduct])



  let fasttidx = (currentPage - 1) * 12;
  let lastidx = fasttidx + 12


  console.log(currentPage)

  function handleview(hup) {
    setview(hup)
  }


  // Product loading animation here===================================================================
  if (loading) {
    return (
      <div className='grid grid-cols-3  gap-5 content-start'>
        {Array.from({ length: 6 }, (hup, idx) => (

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
  // Product loading animation here===================================================================
  return (
    <div className='w-full '>
      <div className='flex'>

        <Breadcrumb />

        {/*  dropdown sorting */}
        <div className='relative'>

        <div onClick={()=>setDropshowhide(!Dropshowhide)} className='flex cursor-pointer  items-center w-35 border-b-2  justify-between'>
          <button className='cursor-pointer text-sm font-medium uppercase whitespace-nowrap font-jost ' >{Dropdown}</button>
          <span>

            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.64332 5.84071C4.83765 6.05309 5.16231 6.05309 5.35713 5.84071L9.85239 0.940372C10.0492 0.725269 10.0492 0.376431 9.85239 0.161873C9.65557 -0.0532294 9.33589 -0.0532294 9.13908 0.161873L5 4.67294L0.861423 0.161327C0.664109 -0.0537752 0.344925 -0.0537752 0.147611 0.161327C-0.0492043 0.37643 -0.0492044 0.725267 0.147611 0.939826L4.64332 5.84071Z" fill="#222222" />
            </svg>

          </span>
        </div>
{Dropshowhide&&
        <div className=' bg-[#bebebe]  px-2 absolute w-full z-10 py-2'>
          <h3 className='cursor-pointer  font-medium  whitespace-nowrap font-jost' onClick={()=>{setDropdown("Default Select")
            setDropshowhide(false)
          }}>Default Select</h3>
       
          <h3 className='cursor-pointer  font-medium  whitespace-nowrap font-jost' onClick={()=>{setDropdown("low to high")
            setDropshowhide(false)
          }}>low to high</h3>
          <h3 className='cursor-pointer  font-medium  whitespace-nowrap font-jost' onClick={()=>{setDropdown("high to low")
            setDropshowhide(false)
          }}>high to low</h3>
        </div>
}
        </div>

{/* =====================dropdown done======================================== */}

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

        {FilterProduct.length > 0 ?

          FilterProduct.slice(fasttidx, lastidx).map((item) => (
            <Product item={item} key={item.id} />
          )) :
          products.slice(fasttidx, lastidx).map((item) => (
            <Product item={item} key={item.id} />
          ))


        }
      </div>
      <div className='mt-10 text-center'>

        {/* in this way i will set pagination*/}
        <ResponsivePagination current={currentPage} total={totalPages} onPageChange={setCurrentPage} />
      </div>
    </div>
  )
}

export default ShopAllProducts