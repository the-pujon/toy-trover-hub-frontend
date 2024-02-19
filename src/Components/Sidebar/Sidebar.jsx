import React from "react";
import {
  FaProductHunt,
  FaRegUser,
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";
import { MdOutlineDashboard, MdOutlineLogout, MdPayment } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";
import { useUser } from "../../Hooks/useUser";

const Sidebar = () => {
  const { loggedUser } = useUser();

  return (
    <div className="flex min-h-screen justify-between flex-col w-16 md:w-56 bg-transparent overflow-hidden border-r border-white/40">
      <div className="flex flex-col  ">
        <div className="flex items-center justify-center flex-col gap-10 mt-5">
          <Link to={'/'} className="md:text-5xl font-semibold uppercase text-secondary ">
            TTH
          </Link>

          <div className="flex flex-col items-center pb-5 -mx-2">
            <img
              className="object-cover w-12 h-12 md:w-24 md:h-24 mx-2 rounded-full"
              src={loggedUser?.photoURL}
              alt="avatar"
            />
            <h4 className="mx-2 mt-2 text-xs md:text-base font-medium text-secondary  ">
              {loggedUser?.displayName}
            </h4>
            <p className="mx-2 mt-1 text-sm font-medium text-secondary hidden sm:block">
              {loggedUser?.email}
            </p>
          </div>
        </div>
        <nav className="text-secondary sidebar">
          <NavLink
            to="/dashboard/overview"
            className="!outline-none !border-none flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
              <MdOutlineDashboard />
            </span>
            <span className="text-base font-medium hidden md:block">
              Dashboard
            </span>
          </NavLink>

          <NavLink
            to="/dashboard/allToys"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
              <FaProductHunt />
            </span>
            <span className="text-base font-medium hidden md:block">
              Products
            </span>
          </NavLink>

          <NavLink
            to="/dashboard/allOrders"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
              <FaShoppingCart />
            </span>
            <span className="text-base font-medium hidden md:block">
              Orders
            </span>
          </NavLink>

          <NavLink
            to="/dashboard/customers"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
              <FaRegUser />
            </span>
            <span className="text-base font-medium hidden md:block">
              Customers
            </span>
          </NavLink>

          <NavLink
            to="/dashboard/transactions"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
              <MdPayment />
            </span>
            <span className="text-base font-medium hidden md:block">
              All Transactions
            </span>
          </NavLink>

          <Link
            to="/shop"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
              <FaShoppingBag />
            </span>
            <span className="text-base font-medium hidden md:block">Shop</span>
          </Link>
        </nav>
      </div>
      <button className="md:toyButton justify-center text-white py-2 md:w-full flex items-center gap-4">
        <MdOutlineLogout className="text-2xl" />
        {/*<MdLogout />*/}
        <span className="hidden md:block"> Log out</span>
      </button>
    </div>
  );
};

export default Sidebar;
