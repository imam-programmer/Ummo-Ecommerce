import React from 'react'
import footerTopHelpData from "../../../../api/footerTopHelpData.json"
import { Link } from 'react-router'
const FooterTop4 = () => {
  return (
   <div>
        <h2 className='text-[18px] font-medium'>HELP</h2>
        <ul className='mt-8 flex flex-col'>
        {footerTopHelpData.map((item)=>(
          <Link to={item.path} className='text-primary leading-10 cursor-pointer after:bg-primary relative text-sm  font-normal after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[""] hover:after:w-[50%]'>{item.name}</Link>
        ))}
        </ul>
    </div>
  )
}

export default FooterTop4