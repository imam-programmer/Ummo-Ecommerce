import React from 'react'
import footerTop3Data from "../../../../api/footerTop3Data.json"
import { Link } from 'react-router'
const FooterTop3 = () => {
  return (
     <div>
        <h2 className='text-[18px] font-medium'>SHOP</h2>
        <ul className='md:mt-8 mt-2.5 flex flex-col'>
        {
          footerTop3Data.map((item)=>(
            <Link key={item.id} to={item.path}  className='text-primary leading-10 cursor-pointer after:bg-primary relative text-sm  font-normal after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[""] hover:after:w-[50%]'>{item.name}</Link>
          ))
        }
        </ul>
    </div>
  )
}

export default FooterTop3