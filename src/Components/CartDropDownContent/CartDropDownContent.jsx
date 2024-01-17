import React from "react";
import { FaOpencart } from "react-icons/fa";

const CartDropDownContent = ({ cartItems }) => {
  return (
    <div className="p-5 w-[22rem] max-h-[30rem] overflow-auto">
      {/* cart header */}
      <div className="flex w-full items-center justify-between border-b border-secondary border-dashed">
        <div className="flex items-center gap-2 p-1">
          <FaOpencart className="text-3xl" />:{" "}
          <span> {cartItems.products.length}</span>
        </div>
        <div className="text-base">Total: {cartItems.totalPrice}</div>
      </div>
      {/* cart item list */}
      <>
        <div className="flex flex-col gap-2">
          {cartItems.products.map((product, i) => (
            <div
              key={i}
              className="flex items-center gap-2 justify-between p-2"
            >
              <div className="w-1/3">
                <img
                  src={product?.image}
                  alt="product image"
                  className="w-16 h-10"
                />
              </div>
              <div className="flex flex-col w-1/3">
                <span className="text-base whitespace-nowrap" >{product.name.length > 10 ? `${product.name}...` : product.name}</span>
                <span className="text-xs whitespace-nowrap"> {product.subcategory.length > 10 ? `${product.subcategory}...` : product.subcategory}</span>
              </div>
              <div className="flex flex-col w-1/3">
                <span>Quantity: {product.quantity}</span>
                <span>Price: {product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </>
      <div>
        <button className="toyButton w-full" >View Cart</button>
      </div>
    </div>
  );
};

export default CartDropDownContent;
