import React from 'react'
import categorydata from "../../../api/categorydata.json"
import Image from '../common/Image'
import { Link } from 'react-router'
const Category = () => {
  return (
    <div className='xl:mt-25.25 lg:mt-10 mt-3.75 px-3 xl:px-0 mb-3'>
      <div className="container">
        <div className='flex flex-col md:grid md:grid-cols-4 gap-3.75 md:gap-2 lg:gap-7.5'>
          {
            categorydata.map((item) => (
              <div key={item.id} className={`h-71.25 md:h-auto lg:h-auto w-full relative ${item.id == 1 ? "col-span-2 row-span-2" : item.id == 2 && "col-span-2"}  `}>
                <Image className="h-full w-full object-cover object-[80%]" src={item.image} alt={item.name} />
                <div className=' absolute bottom-10 left-10 md:bottom-3 pr-2 md:left-3 lg:left-5 lg:bottom-5 xl:bottom-10 xl:left-10'>
                  <h3 className='uppercase text-sm md:text-[12px] lg:text-sm leading-6 font-normal text-primary '>hot list</h3>
                  <h2 className='uppercase font-medium text-[22px] md:text-[16px] lg:text-[18px] xl:text-[26px] text-primary'><span className='font-bold block lg:inline'>{item.name}</span> collection</h2>
                  {
                    item.id == 4 && <p className='text-[14px] lg:text-sm md:text-[12px] leading-6 lg:leading-6 md:leading-4  font-normal text-primary max-w-53.25 xl:mt-2 mb-4 xl:mb-4 md:mb-1'>Surprise someone with the gift they
                      really want.</p>
                  }
                  <Link className='uppercase text-primary text-sm lg:text-sm md:text-[12px] leading-6 after:content-[""] after:w-0 after:duration-300 hover:after:w-12.5 after:h-0.5 after:bg-primary after:absolute after:bottom-0 relative after:left-0'>
                    {
                      item.id == 4 ? "DISCOVER MORE" : " SHOP NOW"
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