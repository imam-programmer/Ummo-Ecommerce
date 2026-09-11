import React from 'react'
import aboutpagedata from "../../api/aboutpagedata.json"
import Image from '../layout/common/Image'
const AboutBrands = () => {
  return (
    <div className='container px-2 lg:px-0'>
        <div className='flex justify-between items-center flex-wrap gap-2'>

        {aboutpagedata.map((item)=>(
            <Image src={item.image}/>
        ))}
        </div>
    </div>
  )
}

export default AboutBrands