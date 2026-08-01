import React from 'react'
import { Link } from "react-router";
import footerTop2Data from "../../../../api/footerTop2Data.json"
const FooterTop2 = () => {
  return (
    <div>
        <h2 className='text-[18px] font-medium'>COMPANY</h2>
        <ul className='md:mt-8 mt-2.5 flex flex-col'>
            
            {
              footerTop2Data.map((item)=>(
                <Link key={item.id} to={item.path} className='text-primary leading-10 cursor-pointer after:bg-primary relative text-sm  font-normal after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[""] hover:after:w-[50%]'>{item.name}</Link>
                
              ))
            }
            
        </ul>
    
    </div>
  )
}

export default FooterTop2