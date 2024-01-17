import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import QuantityUpdate from "../QuantityUpdate/QuantityUpdate";
import { useDispatch, useSelector } from "react-redux";
import {addItemToCart} from "../../features/CartSlice";

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
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleAddCart = (product) => {


    //console.log(cartItems.products)

    //const existingProduct = cartItems.products.filter((product)=>{
    //  return product._id === product._id
    //})
    //console.log(existingProduct)

    const cart = {
      _id: product._id,
      name: product.name,
      image: product.toyImage[0],
      quantity: quantity,
      price: product.price,
      total: quantity * product.price,
      sellerName: product.sellerName,
      sellerEmail: product.sellerEmail,
      subcategory: product.subcategory,
      category: product.category
    };
    console.log(cart);

    dispatch(addItemToCart(cart));

  };

  return (
    <>
      <div className="w-80 rounded-xl bg-[rgba(0,0,0,0.1)] backdrop-blur-sm shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
        <Link
          to={`/toys/${_id}`}
          className="h-48 w-full relative  flex flex-col justify-between bg-cover bg-center rounded-xl"
        >
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
        <div className="p-4 flex flex-col items-center gap-3">
          <p className="text-secondary/60 font-light text-sm italic text-center">
            This toy sells by {sellerName}
          </p>
          <h1 className=" text-center mt-1 text-secondary text-2xl font-semibold">
            {name}
          </h1>
          <p className="text-center text-secondary mt-1 font-semibold">
            $ {price}
          </p>
          <QuantityUpdate
            setQuantity={setQuantity}
            quantity={quantity}
            className="bg-transparent  w-[130px]"
          />

          <button
            onClick={() => handleAddCart(toy)}
            className="py-2 px-4 toyButton mt-4 w-full flex items-center justify-center"
          >
            Add to order
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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
