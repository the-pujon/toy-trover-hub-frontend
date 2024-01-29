import React from "react";
import img from "../../../../assets/about.jpg";
import "./Banner.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="wrapper mx-auto banner h-screen flex items-center justify-center min-h-screen !pt-20">
      <aside class="responsive-banner second relative flex justify-between w-full flex-row gap-4">
        <div className="flex-1  text-white flex items-center lg:items-start text-center lg:text-start flex-col justify-center gap-4">
          <div className="text-7xl font-bold" >Best <span className="text-transparent banner-text-stroke" >Kids Store</span> & Online Shop</div>
          <div className="text-3xl font-medium" >Give The Gift Of Your Children Everyday</div>
          <button className="toyButton w-fit" >Shop now</button>
        </div>
        <div className="flex-1 lg:flex items-center justify-center hidden">
          {/*<div className=" bg-black/5 flex items-center justify-center w-[950px] border-rad h-[950px]">*/}
          <div className=" bg-black/10 flex items-center justify-center w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] xl:w-[850px] border-rad xl:h-[850px]">
            <Swiper
              pagination={false}
              modules={[Pagination]}
              className="mySwiper shadow-inner  w-[300px] lg:w-[500px] bg-black/5  border-rad h-[300px] lg:h-[500px] xl:w-[750px] xl:h-[750px] flex items-center justify-center"
            >
              <SwiperSlide className="swiper-slide">
                <img src={img} className="w-[300px] lg:w-[500px] border-rad h-[300px] lg:h-[500px] xl:w-[750px] xl:h-[750px] " />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img} className="w-[300px] lg:w-[500px] border-rad h-[300px] lg:h-[500px] xl:w-[750px] xl:h-[750px] " />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img} className="w-[300px] lg:w-[500px] border-rad h-[300px] lg:h-[500px] xl:w-[750px] xl:h-[750px] " />
              </SwiperSlide>
            </Swiper>
          </div>
          {/*</div>*/}
        </div>
          <svg className="circle-a" height="200" width="200">
            <circle cx="100" cy="100" r="100" />
          </svg>
          <svg className="circle-b" height="200" width="200">
            <circle cx="80" cy="80" r="80" />
          </svg>
          <svg className="circle-c" height="200" width="200">
            <circle cx="80" cy="80" r="80" />
          </svg>
          <svg className="circle-d" height="60" width="60">
            <circle cx="30" cy="30" r="30" />
          </svg>
      </aside>
    </div>
  );
};

export default Banner;
