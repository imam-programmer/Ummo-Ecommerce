import React from 'react'
import Image from "../layout/common/Image"
import shopBg from "../../assets/images/shopBanner.png"
const ShopBanner = () => {
    return (
        <div className='px-15 relative'>
            <Image className="w-full" src={shopBg} alt="shopbg" />
            <div className='absolute top-2/4 left-2/4 -translate-2/4 text-center '>
                <h2 className='font-bold text-[60px] text-primary uppercase'>shoes</h2>
                <ul className='flex justify-center gap-7.5'>
                    <li className='font-medium text-base text-primary'>#STAYHOME</li>
                    <li className='font-medium text-base text-primary'> NEW IN</li>
                    <li className='font-medium text-base text-primary'> JACKETS</li>
                    <li className='font-medium text-base text-primary'>HOODIES</li>
                    <li className='font-medium text-base text-primary'>MEN</li>
                    <li className='font-medium text-base text-primary'>WOMEN</li>
                    <li className='font-medium text-base text-primary'>TROUSERS</li>
                    <li className='font-medium text-base text-primary'>ACCESSORIES</li>
                    <li className='font-medium text-base text-primary'>SHOES</li>
                </ul>
            </div>
        </div>
    )
}

export default ShopBanner