import React from "react";

const ShopCard = ({ toy }) => {
  const { photoURL, name, price, rating, _id } = toy;

  return (
    <div>
      {/*<div className="card card-side bg-base-100 h-64 shadow-xl">
        <figure className=" w-1/2 ">
          <img src={toy.photoURL} alt="Album" className="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toy.name}</h2>
          <div>Price: ${toy.price}</div>
          <div>Rating:{toy.rating}</div>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleClick(toy._id)}
              className="btn bg-[#263238]"
            >
              View Details
            </button>
          </div>
        </div>
      </div>*/}
      <div
        className="w-80  shadow rounded bg-[rgba(255,255,255,0.1)] backdrop-blur-sm"
        //style={{
        //  backgroundImage: "url(data:image/png;base64,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)",
        //  backgroundRepeat: "no-repeat",
        //  backgroundSize: "cover",
        //}}
      >
        <div
          className="h-48 w-full   flex flex-col justify-between bg-cover bg-center"
          //style={{
          //  backgroundImage:
          //    "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
          //}}
        >
          <img src={photoURL} alt="" className="w-80 h-48" />
          {/*<div className="flex justify-between">
            <input type="checkbox" />
            <button className="text-white hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>*/}
          {/*<div>
            <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
              available
            </span>
          </div>*/}
        </div>
        <div className="p-4 flex flex-col items-center">
          <p className="text-gray-400 font-light text-xs text-center">
            Hammond robotics
          </p>
          <h1 className="text-gray-800 text-center mt-1">Item name</h1>
          <p className="text-center text-gray-800 mt-1">€1299</p>
          <div className="inline-flex items-center mt-2">
            <button className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 12H4"
                />
              </svg>
            </button>
            <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
              2
            </div>
            <button className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>

          <button className="py-2 px-4 toyButton mt-4 w-full flex items-center justify-center">
            Add to order
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>

          {/*<div className="flex justify-between w-full mt-4">
            <div className="flex items-center text-gray-500">
              <input id="input1" type="checkbox" className="mr-2" />
              <label for="input1" className="select-none cursor-pointer">
                Compare
              </label>
            </div>
            <div>
              <button className="py-1 px-4 bg-white text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center">
                Add to List
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
