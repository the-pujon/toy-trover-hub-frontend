//import React from "react";
//import img from "../../../../assets/about.jpg";
//import "./Banner.scss"

//const Banner = () => {
//  return (
//    <div className="h-screen" >
//      {/*<div className="hero min-h-screen bg-base-200">
//        <div className="hero-content flex-col lg:flex-row-reverse">
//          <img
//            src={img}
//            className="max-w-sm rounded-lg shadow-2xl"
//          />
//          <div>
//            <h1 className="text-5xl font-bold">Box Office News!</h1>
//            <p className="py-6">
//              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
//              et a id nisi.
//            </p>
//            <button className="btn btn-primary">Get Started</button>
//          </div>
//        </div>
//      </div>*/}
//      <header class="mainHeading ">
//        <div class="mainHeading__content wrapper text-secondary">
//          <article class="mainHeading__text backdrop-blur-md rounded-e-3xl">
//            <p class="mainHeading__preTitle">Toy Store</p>
//            <h2 class="mainHeading__title">Toy Trove Hub</h2>
//            <p class="mainHeading__description">
//              Far far away, behind the word mountains, far from the countries
//              Vokalia and Consonantia, there live the blind texts.
//            </p>
//            <button class="cta">know more</button>
//          </article>

//          <figure class="mainHeading__image">
//            <img
//              src={img}
//              alt=""
//            />
//          </figure>
//        </div>
//      </header>
//    </div>
//  );
//};

//export default Banner;

import React from "react";
import img from "../../../../assets/about.jpg";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="wrapper mx-auto max-h-screen" >
      <aside class="responsive-banner second">
      <div className="bg-black/5 flex items-center justify-center w-[1000px] rounded-full h-[1000px]" >
             <img src={img} className="w-[900px] rounded-full h-[900px] -z-10" />
      </div>
        <div class="container-envelope">
          <svg class="circle-a" height="200" width="200">
            <circle cx="100" cy="100" r="100" />
          </svg>
          <svg class="circle-b" height="200" width="200">
            <circle cx="80" cy="80" r="80" />
          </svg>
          {/*<svg class="circle-c" height="1000" width="1000">
            <circle cx="400" cy="400" r="400" />
          </svg>*/}
          {/*<svg class="cirle-d" height="60" width="60">
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
        </div>
      </aside>

    </div>
  );
};

export default Banner;
