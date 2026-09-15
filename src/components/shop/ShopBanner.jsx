import React, { useState } from 'react'
import Image from "../layout/common/Image"
import shopBg from "../../assets/images/shopBanner.png"
import ShopBannerData from "../../api/ShopBannerData.json"
const ShopBanner = () => {
    const [first, setfirst] = useState(9)
    return (
        <div className='xl:px-15 relative'>
            <Image className="w-full hidden lg:block" src={shopBg} alt="shopbg" />

            <div className='lg:absolute relative  lg:top-2/4 lg:left-2/4 lg:-translate-2/4 text-center '>
                <h2 className='font-bold text-[30px] lg:text-[60px] text-black uppercase'>{first == 1 ? "#STAYHOME" : first == 2 ? "NEW IN" : first == 3 ? "JACKETS" : first == 4 ? "HOODIES" : first == 5 ? "MEN" : first == 6 ? "WOMEN" : first == 7 ? "TROUSERS" : first == 8 ? "ACCESSORIES" : "SHOES"}</h2>
                <ul className='flex  justify-center  flex-wrap gap-x-2 lg:gap-x-0'>
                    {ShopBannerData.map((item) => (
                        <li key={item.id} onClick={() => setfirst(item.id)} className='font-bold text-[12px] lg:ml-4 lg:mt-2 xl:mt-0 xl:m-3   lg:text-base text-black whitespace-nowrap cursor-pointer shoplist  '>{item.name}</li>
                    ))}

                </ul>
            </div>
        </div>
    )
}

export default ShopBanner