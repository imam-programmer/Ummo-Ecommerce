import React from 'react'

const FooterTop3 = () => {
  return (
     <div>
        <h2 className='text-[18px] font-medium'>SHOP</h2>
        <ul className='mt-11.5 '>
            <li className='text-primary  cursor-pointer after:bg-primary relative text-sm leading-6 font-normal after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[""] hover:after:w-[50%]'>New Arrivals</li>
            <li className='text-primary leading-10 cursor-pointer after:bg-primary relative text-sm  font-normal after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[""] hover:after:w-[50%]'>Accessories</li>
            <li className='text-primary leading-10 cursor-pointer after:bg-primary relative text-sm  font-normal after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[""] hover:after:w-[50%]'>Men</li>
            <li className='text-primary leading-10 cursor-pointer after:bg-primary relative text-sm  font-normal after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[""] hover:after:w-[50%]'>Women</li>
            <li className='text-primary leading-10 cursor-pointer after:bg-primary relative text-sm  font-normal after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[""] hover:after:w-[50%]'>Shop All</li>
        </ul>
    </div>
  )
}

export default FooterTop3