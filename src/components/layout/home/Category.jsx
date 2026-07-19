import React from 'react'
import categorydata from "../../../api/categorydata.json"
import Image from '../common/Image'
import { Link } from 'react-router'
const Category = () => {
  return (
    <div className='mt-25.25'>
      <div className="container">
        <div className='grid grid-cols-4 gap-7.5'>
          {
            categorydata.map((item) => (
              <div className={`w-full relative ${item.id == 1 ? "col-span-2 row-span-2" : item.id == 2 && "col-span-2"}  `}>
                <Image src={item.image} alt={item.name} />
                <div className=' absolute bottom-10 left-10'>
                  <h3 className='uppercase text-sm leading-6 text-primary '>hot list</h3>
                  <h2 className='uppercase font-medium text-[26px] text-primary'><span className='font-bold'>{item.name}</span> collection</h2>
                  <Link className='uppercase text-primary text-sm leading-6 after:content-[] after:w-12.5 after:h-0.5 after:bg-primary after:absolute after:bottom-0 relative after:left-0'>
                  {
                    item.id==4? "DISCOVER MORE":" "
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