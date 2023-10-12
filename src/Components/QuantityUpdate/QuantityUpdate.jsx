import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const QuantityUpdate = ({ quantity, setQuantity, className }) => {
  const handleQuantity = (type) => {
    if (type === "minus" && quantity > 1) {
      setQuantity(quantity - 1);
    }
    if (type === "plus") {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="flex items-center gap-5">
      <div
        className={`flex items-center justify-center gap-2 border py-3 px-5 rounded-50 bg-white w-[182px] ${className}`}
      >
        <button
          className="text-base"
          onClick={(e) => {
            e.preventDefault();
            handleQuantity("minus");
          }}
        >
          <AiOutlineMinus />
        </button>
        <input
          type="number"
          readOnly
          value={quantity}
          id="productQuantity"
          name="productQuantity"
          className="bg-transparent  text-center text-black text-sm outline-none  font-normal w-24"
        />
        <button
          className="text-base"
          onClick={(e) => {
            e.preventDefault();
            handleQuantity("plus");
          }}
        >
          <AiOutlinePlus />
        </button>
      </div>

      {/*<p className="font-medium text-base text-gray-400">
        By{" "}
        <a href="amazon.com" className="underline text-[#6EAFB3]">
          amazon.com
        </a>
      </p>*/}
    </div>
  );
};

export default QuantityUpdate;
