import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "../../../features/CartSlice";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import { loadStripe } from "@stripe/stripe-js";
import { useUser } from './../../../Hooks/useUser';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const {loggedUser } = useUser()

  console.log(loggedUser?.email)

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

  const handleCheckout =async (e) =>{
    e.preventDefault()

    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);


    const form  = e.target
    const shippingDetails = {
      name : form.name.value,
      email : form.email.value,
      phone : form.phone.value,
      address: form.address.value,
      country: form.country.value,
      city: form.city.value,
      postal : form.postal.value
    }

    const order = {...cartItems, shippingDetails, email: loggedUser?.email}

    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/checkout`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(order),
      }
    );

    const session = await response.json();

    console.log(session)

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    console.log(result)

    if (result.error) {
      console.log(result.error);
    }
  }

  return (
    <div className="wrapper min-h-screen pt-32 text-secondary py-5">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className=" lg:basis-3/4 border-r pr-5 border-dotted w-full overflow-auto">
          <div className="text-4xl font-semibold pb-4" >Cart</div>
          <div className="flex flex-col gap-2 border-b border-dotted w-[60rem] lg:w-full overflow-auto">
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
            <div className="max-h-[30rem] overflow-auto">
              {cartItems.products.length <= 0 ? (
                <div className="h-[20rem] flex flex-col items-center justify-center">
                  <p className="text-2xl">
                    You didn't selected any products yet
                  </p>
                  <Link
                    to={"/shop"}
                    className="toyButton flex items-center gap-2"
                  >
                    {" "}
                    <MdKeyboardBackspace className="text-2xl" />
                    Shop now
                  </Link>
                </div>
              ) : (
                cartItems.products.map((product) => (
                  <div className="grid grid-cols-4 p-2" key={product._id}>
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
                        className="absolute bg-secondary text-primary p-1 cursor-pointer rounded-full flex items-center justify-center -top-2  shadow-lg -left-2  "
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
          <div className="grid grid-cols-4 w-[60rem] lg:w-full overflow-auto">
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
        <div className="basis-1/4" >
        <div className="text-4xl font-semibold pb-0" >Shipping details</div>
          <form onSubmit={handleCheckout}>
            {/* Name */}
            <div className="form-control relative my-6 w-full">
              <input
                autoComplete="off"
                id="name"
                name="name"
                type="name"
                className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
                placeholder="name"
                required
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-3.5 text-secondary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-sm"
              >
                Name
              </label>
            </div>

            {/* email */}
            <div className="form-control relative my-6">
              <input
                autoComplete="off"
                id="email"
                name="email"
                type="email"
                className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
                placeholder="email"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-secondary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-sm"
              >
                Email
              </label>
            </div>

            {/* Phone */}
            <div className="form-control relative my-6">
              <input
                autoComplete="off"
                id="phone"
                name="phone"
                type="tel"
                className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
                placeholder="phone"
                required
              />
              <label
                htmlFor="phone"
                className="absolute left-0 -top-3.5 text-secondary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-sm"
              >
                Phone
              </label>
            </div>

            {/* address */}
            <div className="form-control relative my-6">
              <input
                autoComplete="off"
                id="address"
                name="address"
                type="text"
                className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
                placeholder="address"
                required
              />
              <label
                htmlFor="address"
                className="absolute left-0 -top-3.5 text-secondary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-sm"
              >
                Address
              </label>
            </div>

            {/* country */}
            <div className="form-control relative my-6">
              <input
                autoComplete="off"
                id="country"
                name="country"
                type="text"
                className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
                placeholder="country"
                required
              />
              <label
                htmlFor="country"
                className="absolute left-0 -top-3.5 text-secondary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-sm"
              >
                Country
              </label>
            </div>
            <div className="flex gap-2" >

              {/* City */}
              <div className="form-control relative my-6">
                <input
                  autoComplete="off"
                  id="city"
                  name="city"
                  type="text"
                  className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
                  placeholder="city"
                  required
                />
                <label
                  htmlFor="city"
                  className="absolute left-0 -top-3.5 text-secondary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-sm"
                >
                  City
                </label>
              </div>

              {/* postal code */}
              <div className="form-control relative my-6">
                <input
                  autoComplete="off"
                  id="postal"
                  name="postal"
                  type="name"
                  className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
                  placeholder="postal"
                  required
                />
                <label
                  htmlFor="postal"
                  className="absolute left-0 -top-3.5 text-secondary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-sm"
                >
                  Postal Code
                </label>
              </div>
            </div>

            <button className="toyButton w-full" >Checkout and place order</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
