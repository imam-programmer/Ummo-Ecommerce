import React, { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { productDetail } from '../../../slices/ProductDetailsSlice'
import { useNavigate } from 'react-router'

const SearchOpan = ({ searchOpen, setSearchOpen }) => {
  const Alldata = useSelector((state) => state.AllProduct.Products)
  const [Input, setInput] = useState('')
  const title = Alldata.map((item) => item.title)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const filteredTitles = title.filter((item) => item.toLowerCase().includes(Input.toLowerCase().trim()))
  console.log(filteredTitles)
  function handlesearchlist(item) {
    setInput(item)
    dispatch(productDetail(Alldata.find((product) => product.title === item)))
    navigate("/shopsingle")
    setSearchOpen(!searchOpen)
  }



  return (
    <div className='bg-white w-full px-2.5 xl:px-0 overflow-y-auto  absolute top-21 py-5 border-t border-[#bebebe] z-30 h-2/4  left-0 z-99flex items-center justify-center'>
      <div className='container'>

        <h3 className='text-gray mb-5'>WHAT ARE YOU LOOKING FOR?</h3>
        <div className='border-b-2 flex pb-2 items-center'>
          <input value={Input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Search' className='w-full outline-none' />
          <button className='cursor-pointer'><IoSearchOutline /></button>
        </div>
        <div>
          <h2 className='text-gray text-sm font-medium mt-4 mb-5'>QUICKLINKS</h2>
          <ul>
            {Input==="" ? 
            
            (
              <p className='mb-3 cursor-pointer '>No results found</p>
            ) :
              filteredTitles.map((item) => (
                <p className='mb-3 cursor-pointer ' onClick={() => handlesearchlist(item)}>
                  {item}
                </p>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SearchOpan