import React, { useState } from 'react'
import Image from "../layout/common/Image"
import shopBg from "../../assets/images/shopBanner.png"
import ShopBannerData from "../../api/ShopBannerData.json"
const ShopBanner = () => {
    const [first, setfirst] = useState(null)
    return (
        <div className='px-15 relative'>
            <Image className="w-full" src={shopBg} alt="shopbg" />
            <div className='absolute top-2/4 left-2/4 -translate-2/4 text-center '>
                <h2 className='font-bold text-[60px] text-primary uppercase'>{first==1?"#STAYHOME":first==2?"NEW IN":first==3?"JACKETS":first==4?"HOODIES":first==5?"MEN":first==6?"WOMEN":first==7?"TROUSERS":first==8?"ACCESSORIES":"SHOES"}</h2>
                <ul className='flex justify-center gap-7.5'>
                    {ShopBannerData.map((item)=>(
                    <li key={item.id} onClick={()=>setfirst(item.id)} className='font-medium text-base text-primary whitespace-nowrap cursor-pointer'>{item.name}</li>
                    ))}
                  
                </ul>
            </div>
        </div>
    )
}

export default ShopBanner