import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import { useUser } from "../../Hooks/useUser";
import { AiOutlineLogin, AiOutlineSearch } from "react-icons/ai";
import CartDropDownContent from "../CartDropDownContent/CartDropDownContent";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { loggedUser, logOut, userLoading } = useUser();
  const cartItems = useSelector((state) => state.cart);

  const navbarOption = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allToys">All Toys</NavLink>
      </li>
      {loggedUser && (
        <>
          <li>
            <NavLink to="/myToys">My Toys</NavLink>
          </li>
          <li>
            <NavLink to="/addToy">Add Toy</NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleLogOut = (e) => {
    e.preventDefault();
    logOut().then(() => console.log("logout"));
  };

  return (
    <div
      className={`backdrop-blur-md shadow-md  bg-primary/20  text-white fixed z-50 w-full   `}
    >
      <div className="wrapper   ">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black bg-white/5"
              >
                {navbarOption}
              </ul>
            </div>
            <Link to="/" className="normal-case ">
              <h1 className="text-center text-3xl sm:text-6xl font-bold flex items-end">
                TTH
                <span className="text-xl hidden sm:block font-semibold">Toy Trover Hub</span>
              </h1>
            </Link>
          </div>

          <div className="navbar-center w-1/4 sm:w-1/2 flex items-center gap-2 border-b ml-4">
            <div><AiOutlineSearch className="text-xl text-secondary" /></div>
            <input type="search" name="search" placeholder="Search"  className="text-secondary text-base bg-transparent w-full focus:outline-none placeholder:text-secondary" />
          </div>

          <div className="navbar-end">
            <ul className=" menu menu-horizontal px-1 hidden md:flex text-xl font-semibold">
              {/*{navbarOption}*/}
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
            </ul>

            {loggedUser && (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                    <span className="badge badge-sm indicator-item">
                      {cartItems?.products?.length}
                    </span>
                  </div>
                </label>
                {/* cart dropdown */}
                <div
                  tabIndex={0}
                  className="mt-3 z-[1] card card-compact dropdown-content  shadow"
                  style={{
                    background:
                      "linear-gradient(to top, #e7fa40 -50%, #e77f5a 100%)",
                  }}
                >
                  <CartDropDownContent cartItems={cartItems} />
                </div>
              </div>
            )}

            <div className="dropdown dropdown-end text-black">
              {loggedUser ? (
                <>
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-md text-secondary flex flex-col gap-2 !text-2xl rounded-box w-52 "
                    style={{
                      background:
                        "linear-gradient(to top, #e7fa40 -50%, #e77f5a 100%)",
                    }}
                  >
                    {navbarOption}
                    <li
                      className="toyButton rounded-box"
                      onClick={handleLogOut}
                    >
                      <a>Logout</a>
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <ul>
                    <li className="toyButton !p-2 !m-0">
                      <NavLink to="/login" className={" flex items-center"}>
                        <AiOutlineLogin /> Login
                      </NavLink>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
