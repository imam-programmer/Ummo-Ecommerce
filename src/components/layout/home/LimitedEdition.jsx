import React, { useEffect, useState } from 'react'
import Title from '../common/Title'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Product from '../common/Product';
const LimitedEdition = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/products?limit=10').then((res => {
            setProducts(res.data.products)

        })).catch((err) => {
            console.log(err)
        })


    }, [])
  
    return (
        <section className='md:mt-22.75 mt-9.25 px-2 md:px-0 '>
            <div className="container ">
                <Title name="LIMITED" namebold="EDITION" />
                <div className='relative'>
 
                 <Swiper id="my-class"
             
                  modules={[Pagination,Navigation]}
                   navigation={true}
                     pagination={{clickable:true}}
                 breakpoints={{
                        300: {
                            
          slidesPerView: 2,
          spaceBetween: 30,
          allowTouchMove: false,
        },
                          600: {
          slidesPerView: 3,
          spaceBetween: 30,
          allowTouchMove: false,
        },
              1000: {
          slidesPerView: 4,
          spaceBetween: 30,
          allowTouchMove: false,
        },
                 }}
       navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }} className="mySwiper">

                {
                    products.map((item) => (
                        <SwiperSlide>
                            <Product item={item} key={item.id} />
                        </SwiperSlide>
                    ))
                }
                 </Swiper>
                  <div className=''>
                    <button className='z-50 bg-white md:bg-transparent rounded-full p-3 md:p-0 custom-prev absolute top-2/4 translate-y-[-50%] left-0 md:-left-6 cursor-pointer'  >
<svg  className='md:w-6.25 md:h-6.25 w-4' viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.98293 11.6078L17.2253 0.369152C17.7186 -0.12291 18.5179 -0.12291 19.0124 0.369152C19.5057 0.861216 19.5057 1.66045 19.0124 2.15252L8.66176 12.4994L19.0112 22.8463C19.5045 23.3384 19.5045 24.1376 19.0112 24.631C18.5179 25.123 17.7174 25.123 17.2241 24.631L5.98168 13.3924C5.49595 12.9054 5.49595 12.0936 5.98293 11.6078Z" fill="#767676"/>
</svg>
</button>
                    <button  className='z-50 p-3 bg-white md:bg-transparent md:p-0 rounded-full custom-next  absolute top-2/4 translate-y-[-50%] right-0 md:-right-6 cursor-pointer'>
<svg className='md:w-6.25 md:h-6.25 w-4'  viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.017 13.3923L7.77464 24.631C7.28133 25.123 6.48209 25.123 5.98753 24.631C5.49423 24.1389 5.49423 23.3397 5.98753 22.8476L16.3382 12.5007L5.98878 2.15376C5.49547 1.66169 5.49547 0.862455 5.98878 0.369148C6.48209 -0.122915 7.28257 -0.122915 7.77588 0.369148L19.0183 11.6078C19.5041 12.0948 19.5041 12.9066 19.017 13.3923Z" fill="#767676"/>
</svg>
</button>
                  </div>
                </div>
            </div>
        </section>
    )
}

export default LimitedEdition