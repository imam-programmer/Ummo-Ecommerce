import React from 'react'
import categorydata from "../../../api/categorydata.json"
import Image from '../common/Image'
import { Link } from 'react-router'
const Category = () => {
  return (
    <div className='md:mt-25.25 mt-3.75'>
      <div className="container">
        <div className='flex flex-col md:grid md:grid-cols-4 gap-3.75 md:gap-7.5'>
          {
            categorydata.map((item) => (
              <div key={item.id} className={`h-71.25 md:h-auto w-full relative ${item.id == 1 ? "col-span-2 row-span-2" : item.id == 2 && "col-span-2"}  `}>
                <Image className="h-full w-full object-cover object-[80%]" src={item.image} alt={item.name} />
                <div className=' absolute bottom-10 left-10'>
                  <h3 className='uppercase text-sm leading-6 font-normal text-primary '>hot list</h3>
                  <h2 className='uppercase font-medium text-[22px] md:text-[26px] text-primary'><span  className='font-bold block md:inline'>{item.name}</span> collection</h2>
                  {
                    item.id==4&& <p className='text-[14px] leading-6 font-normal text-primary max-w-53.25 md:mt-2 mb-4'>Surprise someone with the gift they 
really want.</p>
                  }
                  <Link className='uppercase text-primary text-sm leading-6 after:content-[""] after:w-0 after:duration-300 hover:after:w-12.5 after:h-0.5 after:bg-primary after:absolute after:bottom-0 relative after:left-0'>
                  {
                    item.id==4? "DISCOVER MORE":" SHOP NOW"
                  }
                  </Link>
                </div>
              </div>
            )

            )
          }
        </div>
      </div>
    </div>
  )
}

export default Category