import React from "react";
import img from "../../../../assets/about.jpg";
import "./Banner.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="wrapper mx-auto h-full max-h-screen !pt-20">
      <aside class="responsive-banner second relative flex justify-between w-full flex-row gap-4">
        <div className="flex-1 banner text-white flex items-center text-center flex-col justify-center gap-4">
          <div className="text-7xl font-bold" >Best <span className="text-transparent banner-text-stroke" >Kids Store</span> & Online Shop</div>
          <div className="text-3xl font-medium" >Give The Gift Of Your Children Everyday</div>
          <button className="toyButton w-fit" >Shop now</button>
        </div>
        <div className="flex-1 md:flex items-center justify-center hidden">
          {/*<div className=" bg-black/5 flex items-center justify-center w-[950px] border-rad h-[950px]">*/}
          <div className=" bg-black/10 flex items-center justify-center w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] xl:w-[850px] border-rad xl:h-[850px]">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper w-[300px] lg:w-[500px] bg-black/5  border-rad h-[300px] lg:h-[500px] xl:w-[750px] xl:h-[750px] flex items-center justify-center"
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
        {/*<div class="container-envelope">*/}
          <svg className="circle-a" height="200" width="200">
            <circle cx="100" cy="100" r="100" />
          </svg>
          <svg className="circle-b" height="200" width="200">
            <circle cx="80" cy="80" r="80" />
          </svg>
          {/*<svg className="circle-c" height="1000" width="1000">
            <circle cx="400" cy="400" r="400" />
          </svg>*/}
          {/*<svg className="cirle-d" height="60" width="60">
            <circle cx="30" cy="30" r="30" />
          </svg>*/}
          {/*<img src={img} />*/}
          {/*<div class="col-xs-12">
            <p>Live Sites using our WordPress Themes</p>
            <a
              target="_blank"
              href="https://www.silocreativo.com/en/showcase/"
              class="more-link"
            >
              Get inspired
            </a>
          </div>*/}
        {/*</div>*/}
      </aside>
    </div>
  );
};

export default Banner;
