import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'

const SearchOpan = () => {
  const Alldata=useSelector((state)=>state.AllProduct.Products)
  
  const title=Alldata.map((item)=>item.title)
  console.log(title)

  return (
    <div className='bg-white w-full overflow-y-auto  absolute top-21 py-5 border-t border-[#bebebe] z-30 h-2/4  left-0 z-99flex items-center justify-center'>
      <div className='container'>

        <h3 className='text-gray mb-5'>WHAT ARE YOU LOOKING FOR?</h3>
        <div className='border-b-2 flex pb-2 items-center'>
          <input type="text" placeholder='Search' className='w-full outline-none' />
          <button className='cursor-pointer'><IoSearchOutline /></button>
        </div>
        <div>
          <h2 className='text-gray text-sm font-medium mt-4 mb-5'>QUICKLINKS</h2>
          <ul>
       {title.map((item)=>(
        <p className='leading-[35px]'>{item}</p>
       ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SearchOpan