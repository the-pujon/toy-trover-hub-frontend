import React from "react";
import {
  FaProductHunt,
  FaRegUser,
  FaShippingFast,
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";
import {
  MdOutlineCategory,
  MdOutlineDashboard,
  MdOutlineLogout,
  MdPayment,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div class="flex min-h-screen justify-between flex-col w-56 bg-transparent overflow-hidden border-r border-white/40">
      {/*<div class="min-h-screen flex flex-row bg-gray-100">*/}
      <div class="flex flex-col  ">
        <div class="flex items-center justify-center flex-col gap-10 mt-5">
          <h1 class="text-5xl font-semibold uppercase text-secondary ">TTH</h1>

          <div class="flex flex-col items-center pb-5 -mx-2">
            <img
              class="object-cover w-24 h-24 mx-2 rounded-full"
            //  TODO: Admin picture
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="avatar"
            />
            <h4 class="mx-2 mt-2 font-medium text-secondary  ">John Doe</h4>
            <p class="mx-2 mt-1 text-sm font-medium text-secondary ">
              john@example.com
            </p>
          </div>
        </div>
        <ul class="flex flex-col py-4">
          <li>
            <Link
              href="/dashboard"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
            >
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
                <MdOutlineDashboard />
              </span>
              <span class="text-base font-medium">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
            >
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
                <FaProductHunt />
              </span>
              <span class="text-base font-medium">Products</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
            >
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
                <FaShoppingCart />
              </span>
              <span class="text-base font-medium">Orders</span>
            </Link>
          </li>{" "}
          <li>
            <Link
              href="/dashboard"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
            >
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
                <FaRegUser />
              </span>
              <span class="text-base font-medium">Customers</span>
            </Link>
          </li>{" "}
          <li>
            <Link
              href="/dashboard"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
            >
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
                <FaShippingFast />
              </span>
              <span class="text-base font-medium">Shipping</span>
            </Link>
          </li>{" "}
          <li>
            <Link
              href="/dashboard"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
            >
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
                <MdOutlineCategory />
              </span>
              <span class="text-base font-medium">Category</span>
            </Link>
          </li>{" "}
          <li>
            <Link
              href="/dashboard"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
            >
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
                <MdPayment />
              </span>
              <span class="text-base font-medium">All Payments</span>
            </Link>
          </li>{" "}
          <li>
            <Link
              href="/dashboard"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
            >
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
                <FaShoppingBag />
              </span>
              <span class="text-base font-medium">Shop</span>
            </Link>
          </li>
        </ul>
      </div>
      {/*</div>*/} <button className="toyButton flex items-center gap-4"><MdOutlineLogout className="text-2xl" /> Log out</button>
    </div>
  );
};

export default Sidebar;
