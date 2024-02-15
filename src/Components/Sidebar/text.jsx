import React from 'react'

const text = () => {
  return (
    <div>

<nav className="flex flex-col py-4 sidebar">
          {/*<li>*/}
            <NavLink
              to="/dashboard"
              className="!outline-none !border-none flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
                <MdOutlineDashboard />
              </span>
              <span className="text-base text-secondary font-medium">Dashboard</span>
            </NavLink>
          {/*</li>*/}
          {/*<li>*/}
            <NavLink
              to="/dashboard/allToys"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
                <FaProductHunt />
              </span>
              <span className="text-base font-medium">Products</span>
            </NavLink>
          {/*</li>*/}
          {/*<li>*/}
            <NavLink
              to="/dashboard/allOrders"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
                <FaShoppingCart />
              </span>
              <span className="text-base font-medium">Orders</span>
            </NavLink>
          {/*</li>*/}
          {/*<li>*/}
            <NavLink
              to="/dashboard/customers"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
                <FaRegUser />
              </span>
              <span className="text-base font-medium">Customers</span>
            </NavLink>
          {/*</li>*/}
          {/*<li>
            <Link
              to="/dashboard"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
                <FaShippingFast />
              </span>
              <span className="text-base font-medium">Shipping</span>
            </Link>
          </li>*/}
          {/*<li>
            <Link
              to="/dashboard"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
                <MdOutlineCategory />
              </span>
              <span className="text-base font-medium">Category</span>
            </Link>
          </li>*/}
          {/*<li>*/}
            <NavLink
              to="/dashboard/transactions"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
                <MdPayment />
              </span>
              <span className="text-base font-medium">All Transactions</span>
            </NavLink>
          {/*</li>*/}
          <li>
            <Link
              to="/shop"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-secondary"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-secondary">
                <FaShoppingBag />
              </span>
              <span className="text-base font-medium">Shop</span>
            </Link>
          </li>
        </nav>
    </div>
  )
}

export default text