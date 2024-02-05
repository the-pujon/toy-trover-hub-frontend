import React, { useEffect, useState } from "react";
import useApi from "../../../Hooks/useApi";

const AllTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const { get, put } = useApi();

  useEffect(() => {
    get("payments", "getPayments").then((data) => {
      setTransactions(data.payments);
      setFilteredTransactions(data.payments);
    });
  }, []);

  //for search
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //for search
  useEffect(() => {
    let value = search.toLowerCase();
    let searchTransactions = transactions.filter((data) => {
      const email = data?.email?.toLowerCase();
      const orderId = data?.orderId?.toLowerCase();
      const sessionId = data?.sessionId?.toLowerCase();
      const userId = data?.userId?.toLowerCase();
      return (
        email.startsWith(value) ||
        orderId.startsWith(value) ||
        userId.startsWith(value) ||
        sessionId.startsWith(value)
      );
    });
    setFilteredTransactions(searchTransactions);
  }, [search]);

  //for search
  const handleSubmit = (e) => {
    e.preventDefault();
    let value = search.toLowerCase();
    let searchTransactions = transactions.filter((data) => {
      const email = data?.email?.toLowerCase();
      const orderId = data?.orderId?.toLowerCase();
      const sessionId = data?.sessionId?.toLowerCase();
      const userId = data?.userId?.toLowerCase();
      return (
        email.startsWith(value) ||
        orderId.startsWith(value) ||
        userId.startsWith(value) ||
        sessionId.startsWith(value)
      );
    });
    setFilteredTransactions(searchTransactions);
  };

  //for sorting
  const handleSort = (e) => {
    if (e.target.value === "price-lowest") {
      const s = [...transactions].sort((a, b) => a.date - b.date);
      setFilteredTransactions(s);
    }

    if (e.target.value === "price-highest") {
      const s = [...transactions].sort((b, a) => a.date - b.date);
      setFilteredTransactions(s);
    }
  };

  return (
    <div>
      <div className="wrapper min-h-screen text-secondary backdrop-blur-md">
        <div className="overflow-x-auto pt-[8rem]">
          <div className="text-4xl font-thin">All Transactions</div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4 text-primary cursor-text">
              <input
                type="text"
                placeholder="Search Transaction..."
                className="toyBorder focus:outline-none placeholder:text-secondary !cursor-text w-72"
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            </div>
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
                  Date (Oldest to Earliest)
                </option>
                <option value="price-highest" className="bg-primary">
                  Date (Earliest to Oldest)
                </option>
              </select>
            </div>
          </div>

          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Session Id</th>
                <th>Order Id</th>
                <th>User Id</th>
                <th>User Email</th>
                <th>Payment Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions?.map((transaction) => (
                <tr key={transaction._id}>
                  <td>{transaction.sessionId}</td>
                  <td>{transaction.orderId}</td>
                  <td>{transaction.userId}</td>
                  <td>{transaction.email}</td>
                  <td>
                    <div
                      className={`border-2 w-fit px-3 py-1 rounded-3xl  ${
                        transaction.status === "unpaid"
                          ? "bg-red-600"
                          : "bg-green-500"
                      }`}
                    >
                      {transaction.status}
                    </div>
                  </td>
                  <td>{new Date(Number(transaction.date)).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllTransactions;
