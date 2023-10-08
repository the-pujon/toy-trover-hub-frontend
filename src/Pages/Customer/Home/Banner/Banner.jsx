import React from "react";
import img from "../../../../assets/about.jpg";
import "./Banner.scss"

const Banner = () => {
  return (
    <div className="h-screen" >
      {/*<div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>*/}
      <header class="mainHeading ">
        <div class="mainHeading__content wrapper text-white">
          <article class="mainHeading__text backdrop-blur-md rounded-e-3xl">
            <p class="mainHeading__preTitle">Toy Store</p>
            <h2 class="mainHeading__title">Toy Trove Hub</h2>
            <p class="mainHeading__description">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button class="cta">know more</button>
          </article>




          <figure class="mainHeading__image">
            <img
              src={img}
              alt=""
            />
          </figure>
        </div>
      </header>
    </div>
  );
};

export default Banner;
