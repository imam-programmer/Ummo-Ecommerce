import React from 'react'
import singleimageData from "../../api/singleimageData.json"
import Image from '../layout/common/Image'
import Breadcrumb from '../layout/common/Breadcrumb'
const ProductShow = () => {
  return (
    <div className='container flex gap-[60px] '>
      <div className='flex gap-2.5 w-220.75'>

      <div className='flex flex-col items-start gap-2.5'>
        {
          singleimageData.map((item)=>(
            <Image className=" w-22.5 h-22.5" key={item.id} src={item.image} alt={item.alt}/>
          ))
        }
      </div>
      <div>
        <Image className="w-178 h-175" src='./images/singleBigimage.png' alt="singleBigimage"/>
      </div>
      </div>

      <div className='w-135'>
        <div className=''>
        <Breadcrumb/>
<div className=''>
  <button>
Prev
  </button>
  <button className=''>
Next
  </button> 
</div>

<div>
  <h2 className='text-[26px] font-normal text-primary'>Lightweight Puffer Jacket With a Hood</h2>
  <h3 className='text-[22px] font-medium text-primary'>$449</h3>
  <p className='w-135 text-sm font-normal leading-6'>Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.</p>
</div>
        </div>
      </div>
    
    </div>
  )
}

export default ProductShow