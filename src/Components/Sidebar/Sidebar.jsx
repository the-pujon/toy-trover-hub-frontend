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
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex min-h-screen justify-between flex-col w-56 bg-transparent overflow-hidden border-r border-white/40">
      <div className="flex flex-col  ">
        <div className="flex items-center justify-center flex-col gap-10 mt-5">
          <h1 className="text-5xl font-semibold uppercase text-secondary ">TTH</h1>

          <div className="flex flex-col items-center pb-5 -mx-2">
            <img
              className="object-cover w-24 h-24 mx-2 rounded-full"
              //  TODO: Admin picture
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="avatar"
            />
            <h4 className="mx-2 mt-2 font-medium text-secondary  ">John Doe</h4>
            <p className="mx-2 mt-1 text-sm font-medium text-secondary ">
              john@example.com
            </p>
          </div>
        </div>
        <ul className="flex flex-col py-4">
          <li>
            <NavLink
              to="/dashboard"
              className="!outline-none !border-none flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
                <MdOutlineDashboard />
              </span>
              <span className="text-base text-secondary font-medium">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <Link
              to="/dashboard/allToys"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
                <FaProductHunt />
              </span>
              <span className="text-base font-medium">Products</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/allOrders"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
                <FaShoppingCart />
              </span>
              <span className="text-base font-medium">Orders</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
                <FaRegUser />
              </span>
              <span className="text-base font-medium">Customers</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
                <FaShippingFast />
              </span>
              <span className="text-base font-medium">Shipping</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
                <MdOutlineCategory />
              </span>
              <span className="text-base font-medium">Category</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
                <MdPayment />
              </span>
              <span className="text-base font-medium">All Payments</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
                <FaShoppingBag />
              </span>
              <span className="text-base font-medium">Shop</span>
            </Link>
          </li>
        </ul>
      </div>
      <button className="toyButton flex items-center gap-4">
        <MdOutlineLogout className="text-2xl" /> Log out
      </button>
    </div>
  );
};

export default Sidebar;
