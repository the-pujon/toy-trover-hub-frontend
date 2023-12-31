import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShopCard = ({ toy }) => {
  const {
    name,
    sellerName,
    sellerEmail,
    toyImage,
    category,
    subcategory,
    inStock,
    description,
    price,
    _id,
  } = toy;

  return (
    <>
      <div className="w-80 rounded-xl bg-[rgba(0,0,0,0.1)] backdrop-blur-sm shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
        <Link  to={`/toys/${_id}`} className="h-48 w-full relative  flex flex-col justify-between bg-cover bg-center rounded-xl">
          <img src={toyImage[0]} alt="" className="w-80 h-48 rounded-t-xl" />
          <div
            className={`absolute bottom-3 right-2 text-white p-[.15rem_.65rem] backdrop-blur-md rounded-full border border-transparent bg-primary`}
          >
            {" "}
            <span className="flex items-center gap-2">
              <FaStar />
              0.0
            </span>{" "}
          </div>
        </Link>
        <div className="p-4 flex flex-col items-center">
          <p className="text-secondary/60 font-light text-sm italic text-center">
          This toy sells by  {sellerName}
          </p>
          <h1 className=" text-center mt-1 text-secondary text-2xl font-semibold">{name}</h1>
          <p className="text-center text-secondary mt-1 ">${price}</p>
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
        </div>
      </div>
    </>
  );
};

export default ShopCard;
