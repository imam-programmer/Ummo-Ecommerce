import React, { useState } from 'react'
import Image from "../layout/common/Image"
// import shopBg from "../../assets/images/shopBanner.png"
import ShopBannerData from "../../api/ShopBannerData.json"
const ShopBanner = () => {
    const [first, setfirst] = useState(9)
    return (
        <div className='px-15 relative'>

            {/*  =======dynamically image showing============= */}
            <Image className="w-full" src={first==9?"./images/Shopbanner-Image-1.png":first==3?"./images/Shopbanner-Image-2.png":first==2?"./images/Shopbanner-Image-3.png":first==1?"./images/Shopbanner-Image-4.png":first==4?"./images/Shopbanner-Image-5.png":first==5?"./images/Shopbanner-Image-6.png":first==6?"./images/Shopbanner-Image-7.png":first==7?"./images/Shopbanner-Image-8.png":"./images/Shopbanner-Image-9.png"} alt="shopbg" />



            <div className='absolute top-2/4 left-2/4 -translate-2/4 text-center '>
                <h2 className='font-bold text-[60px] text-black uppercase'>{first==1?"#STAYHOME":first==2?"NEW IN":first==3?"JACKETS":first==4?"HOODIES":first==5?"MEN":first==6?"WOMEN":first==7?"TROUSERS":first==8?"ACCESSORIES":"SHOES"}</h2>
                <ul className='flex justify-center gap-7.5'>
                    {ShopBannerData.map((item)=>(
                    <li key={item.id} onClick={()=>setfirst(item.id)} className='font-bold text-base text-black whitespace-nowrap cursor-pointer shoplist  '>{item.name}</li>
                    ))}
                  
                </ul>
            </div>
        </div>
    )
}

export default ShopBanner