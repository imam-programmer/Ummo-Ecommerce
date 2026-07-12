import React from 'react'
import categorydata from "../../../api/categorydata.json"
import Image from '../common/Image'
const Category = () => {
  return (
    <div className='mt-25.25'>
        <div className="container">
           <div className='grid grid-cols-4 gap-7.5'>
      {
        categorydata.map((item)=>(
             <div className={`w-full ${item.id==1? "col-span-2 row-span-2":item.id==2&&"col-span-2"}  `}>
                <Image src={item.image} alt={item.name}/>
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