import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "../../../features/CartSlice";
import { toast } from "react-hot-toast";
import {Link} from "react-router-dom";
import {MdKeyboardBackspace} from "react-icons/md";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  // Create a state object to track quantity for each product
  const [quantities, setQuantities] = useState({});

  // Update quantities when cartItems change
  useEffect(() => {
    const newQuantities = {};
    cartItems.products.forEach((product) => {
      newQuantities[product._id] = product.quantity || 1; // Set default to 1 if quantity is not present
    });
    setQuantities(newQuantities);
  }, [cartItems]);

  const handleQuantity = (productId, type) => {
    // Make a copy of quantities object
    const newQuantities = { ...quantities };

    if (type === "minus" && newQuantities[productId] > 1) {
      newQuantities[productId] -= 1;
    }
    if (type === "plus") {
      newQuantities[productId] = (newQuantities[productId] || 0) + 1;
    }

    // Update the state with the new quantities
    setQuantities(newQuantities);
  };

  const handleDelete = (id) => {
    dispatch(removeItemFromCart(id));
    toast.success("Remove Successfully");
  };

  return (
    <div className="wrapper min-h-screen pt-32 text-secondary">
      <div className="flex gap-2">
        <div className="basis-3/4 ">
          <div className="flex flex-col gap-2 border-b border-dotted">
            {/* headers */}
            <div className="grid grid-cols-4 border-b border-dotted p-2">
              <div className="flex items-center justify-start">Products</div>
              <div className="flex items-center justify-start">
                Seller Details
              </div>
              <div className="flex items-center justify-start">Quantity</div>
              <div className="flex items-center justify-start">Price</div>
            </div>

            {/* products */}
            <div className="max-h-[30rem]">
              {cartItems.products.length <= 0 ? (
                <div className="h-[20rem] flex flex-col items-center justify-center">
                  <p className="text-2xl">You didn't selected any products yet</p>
                <Link to={'/shop'} className="toyButton flex items-center gap-2"> <MdKeyboardBackspace className="text-2xl" />Shop now</Link>
                </div>
              ) : (
                cartItems.products.map((product) => (
                  <div className="grid grid-cols-4 p-2">
                    <div className=" flex items-center gap-5 relative">
                      <div>
                        <img
                          src={product.image}
                          alt="product image"
                          className="w-20 h-16 rounded-md"
                        />
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="flex flex-col">
                          <span>{product.name}</span>
                          <span className="text-sm">{product.subcategory}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="absolute bg-secondary text-primary p-1 cursor-pointer rounded-full flex items-center justify-center -top-2  shadow-lg -left-3  "
                      >
                        <AiOutlineClose className="text-primary text-sm" />
                      </button>
                    </div>
                    <div className="flex items-center justify-start">
                      <div className="flex flex-col">
                        <span>{product.sellerName}</span>
                        <span className="text-sm">{product.sellerEmail}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-start">
                      <div className="flex items-center gap-5">
                        <div
                          className={`flex items-center justify-center gap-2 border py-3 px-5 rounded-50 bg-transparent text-secondary `}
                        >
                          <button
                            className="text-base"
                            onClick={(e) => {
                              e.preventDefault();
                              handleQuantity(product._id, "minus");
                            }}
                          >
                            <AiOutlineMinus />
                          </button>
                          <input
                            type="number"
                            readOnly
                            value={quantities[product._id] || 1}
                            id={`productQuantity_${product._id}`}
                            name={`productQuantity_${product._id}`}
                            className="bg-transparent  text-center text-secondary font-bold text-sm outline-none w-12"
                          />
                          <button
                            className="text-base"
                            onClick={(e) => {
                              e.preventDefault();
                              handleQuantity(product._id, "plus");
                            }}
                          >
                            <AiOutlinePlus />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start">
                      {product.price}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-span-3">
              Total Quantity: {cartItems.totalItem}
            </div>
            <div className="flex flex-col gap-2">
              <span className="border-b border-dotted py-2">
                Delivery Cost: 50
              </span>
              <span>Subtotal: {cartItems.totalPrice + 50}</span>
            </div>
          </div>
        </div>
        <div>Checkout Details</div>
      </div>
    </div>
  );
};

export default Cart;
