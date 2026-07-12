import React from "react";
import bannerData from "../../../api/bannerdata.json";
import Image from "../common/Image";
const Banner = () => {
  console.log(bannerData);
  return (
    <section className="flex">
 


      {bannerData.map((item) => (
        <Image className="w-full" src={item.image} alt="banner" />
      ))}

    </section>
  );
};

export default Banner;
