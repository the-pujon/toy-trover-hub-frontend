import React, { useEffect, useState } from "react";
import useApi from "../../../Hooks/useApi";
import { useUser } from "../../../Hooks/useUser";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [filterOrders, setFilterOrders] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState("");
  const { loggedUser, logOut, userLoading } = useUser();


  const { get, put } = useApi();

  useEffect(() => {
    get(`orders/${loggedUser?.email}`, "getOrders").then((data) => {
      setOrders(data);
      setFilterOrders(data);
    });
    setRefresh(false);
  }, [refresh]);

  //for search
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //for search
  useEffect(() => {
    let value = search.toLowerCase();

    let searchOrders = orders.filter((data) => {
      const email = data?.userEmail?.toLowerCase();
      const id = data?.userId?.toLowerCase();
      const orderId = data?._id?.toLowerCase();
      return (
        email.startsWith(value) ||
        id.startsWith(value) ||
        orderId.startsWith(value)
      );
    });
    setFilterOrders(searchOrders);
  }, [search]);

  //for search
  const handleSubmit = (e) => {
    e.preventDefault();

    let value = search.toLowerCase();

    //filter search results
    let searchOrders = orders.filter((data) => {
      const email = data?.userEmail?.toLowerCase();
      const id = data?.userId?.toLowerCase();
      const orderId = data?._id?.toLowerCase();
      return (
        email.startsWith(value) ||
        id.startsWith(value) ||
        orderId.startsWith(value)
      );
    });
    setFilterOrders(searchOrders);
  };

  //for sorting
  const handleSort = (e) => {
    if (e.target.value === "price-lowest") {
      const s = [...orders].sort((a, b) => a.totalAmount - b.totalAmount);
      setFilterOrders(s);
    }

    if (e.target.value === "price-highest") {
      const s = [...orders].sort((b, a) => a.totalAmount - b.totalAmount);
      setFilterOrders(s);
    }
  };

  return (
    <div>
      <div className="wrapper min-h-screen text-secondary backdrop-blur-md">
        <div className="overflow-x-auto pt-12 md:pt-[8rem]">
          {/* title */}
          <div className="text-4xl font-thin">My Orders</div>

          {/* filters */}
          <div className="flex items-center justify-between gap-2 mb-4">
            {/* search */}
            <div className="flex items-center space-x-4 text-primary cursor-text">
              <input
                type="text"
                placeholder="Search orders..."
                className="toyBorder focus:outline-none placeholder:text-secondary !cursor-text"
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            </div>

            {/* sorting options */}
            <div className="flex gap-4">
              <select
                className="toyBorder"
                value="{sortOption}"
                onChange={handleSort}
              >
                <option value="" className="bg-primary">
                  Sort By
                </option>

                <option value="price-lowest" className="bg-primary">
                  Price (Lowest to Highest)
                </option>
                <option value="price-highest" className="bg-primary">
                  Price (Highest to Lowest)
                </option>
              </select>
            </div>
          </div>

          {/* table */}
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Order Id</th>
                <th>User Id</th>
                <th>User Email</th>
                <th>Total Items</th>
                <th>Total Amount</th>
                <th>Date</th>
                <th>Payment Status</th>
                <th>Status</th>
                {/*<th>Action</th>*/}
              </tr>
            </thead>
            <tbody>
              {filterOrders.length <= 0 && (
                <>
                  <p className="text-3xl">No Orders</p>
                </>
              )}
              {filterOrders.length > 0 &&
                filterOrders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.userId}</td>
                    <td>{order.userEmail}</td>
                    <td>{order.totalItem}</td>
                    <td>${order.totalAmount.toFixed(2)}</td>
                    <td>{new Date(Number(order.date)).toLocaleString()}</td>
                    <td>
                      <div
                        className={`border-2 w-fit px-3 py-1 rounded-3xl  ${
                          order.paymentInfo === "unpaid"
                            ? "bg-red-600"
                            : "bg-green-500"
                        }`}
                      >
                        {order.paymentInfo}
                      </div>
                    </td>
                    <td>
                      <div
                        className={`border-2 w-fit px-3 py-1 rounded-3xl dropdown dropdown-top ${
                          order.status === "cancel"
                            ? "bg-red-600"
                            : order.status === "complete"
                            ? "bg-green-500"
                            : order.status === "processing"
                            ? "bg-orange-400"
                            : "bg-yellow-400"
                        }`}
                      >
                        {order.status}
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
