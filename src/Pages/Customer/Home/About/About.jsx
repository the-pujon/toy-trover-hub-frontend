import React from "react";
import "./About.scss";
import aboutImage from "../../../../assets/about.jpg";

const About = () => {
  return (
    <div className="h-[50rem] flex items-center justify-center">
      {/*<div className="sm:flex sm:flex-col md:relative wrapper">
        <div className="text-7xl sm:mb-6 sm:text-center md:absolute md:top-28 md:left-4 text-[#263238]">
          About us
        </div>
        <img
          src={image}
          alt=""
          className="md:w-3/5 md:absolute md:right-12 md:top-[4.5rem]"
        />

        <div className="md:absolute md:w-2/6 p-8  md:h-fit md:z-20 md:top-60 md:left-36 md:backdrop-blur-sm md:rounded-md bg-[#a8adafd7] flex justify-center items-center">
          Welcome to Venture Toy Verse, the ultimate destination for toy
          enthusiasts and collectors. Our e-commerce website is a haven for
          adventure seekers, offering an unparalleled collection of toys from
          various genres and universes. Step into a world of limitless
          possibilities as you explore our vast catalog, featuring action
          figures, board games, collectibles, and more. Immerse yourself in the
          thrilling narratives of iconic franchises, from epic superhero sagas
          to fantastical realms and galactic battles. With stunning visuals,
          detailed descriptions, and customer ratings, Venture Toy Verse is your
          gateway to endless fun and excitement. Unleash your imagination and
          embark on unforgettable adventures with Venture Toy Verse.
        </div>
      </div>*/}
      <div className=" inset-0   flex flex-col items-center justify-center wrapper">
          <div
            className="shadow-2xl rounded-lg w-4/5 h-[30rem] bg-cover bg-center "
            style={{
              backgroundImage: `url(${aboutImage})`,
            }}
          >
            <div className="grid grid-cols-12 gap-1">
              <div className="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                <div className="border-l-4 border-white py-36 px-5 mx-5 absolute left-0">
                  <p className="italic text-white text-xl md:text-4xl lg:text-6xl uppercase text-center  font-semibold ">
                    The Mysteries Of Toy Trove Hub
                  </p>
                </div>
                {/*<div className="text-gray-400 font-semibold text-xl mb-4">
                  07
                </div>*/}
                <div className="absolute border-white border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
              </div>
              <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                <div className="relative flex items-center justify-center bg-black h-full md:h-[30rem] w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                  <div className="p-8">
                    <p className="text-white text-xs md:text-sm lg:text-xl mb-4">
                      Forests are truly amazing places. Combining impressive
                      biodiversity with natural beauty, the woods of the world
                      can be both captivating and perplexing. A hike through a
                      forest can be a relaxing way to pass an afternoon or,
                      sometimes, a glimpse into the unknown.
                    </p>
                    {/*<div className="bottom-0 absolute p-2 right-0">
                      <button className="opacity-75 bg-gray-100 hover:bg-pink-900 hover:text-white text-sm font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>LEARN MORE</span>
                      </button>
                    </div>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


    </div>
  );
};

export default About;
