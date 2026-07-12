import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import bannerData from "../../../api/bannerdata.json";
import Image from "../common/Image";
import 'swiper/css';
import 'swiper/css/pagination';
const Banner = () => {
  console.log(bannerData);
  return (
    <section className="flex">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {bannerData.map((item) => (
          <SwiperSlide>
            <Image className="w-full" src={item.image} alt="banner" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
