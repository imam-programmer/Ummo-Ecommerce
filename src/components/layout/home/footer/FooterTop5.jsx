import React from 'react'
import Image from '../../common/Image'
import footerImage from "../../../../assets/images/footerimage.png"
const FooterTop5 = () => {
  return (
    <div className='mt-12.5 md:mt-0'>
        <h2 className='text-[18px] font-medium'>SUBSCRIBE</h2>
       <p className='w-68.25 text-[14px] font-normal leading-6 text-primary mt-7.5 mb-3.75'>Be the first to get the latest news about trends,
promotions, and much more!</p>
<div className='w-full h-13.75 bg-white flex justify-between px-5 mb-10.25'>
<input className='text-[14px] font-normal leading-6 text-primary' type="email" placeholder='Your email address'/>
<button className='text-[14px] font-medium leading-6 text-primary' >JOIN</button>

</div>
<h3 className='text-primary text-[15px] font-medium mb-2.75'>Secure payments</h3>
<Image src={footerImage} alt="footerimage"/>
    </div>
  )
}

export default FooterTop5