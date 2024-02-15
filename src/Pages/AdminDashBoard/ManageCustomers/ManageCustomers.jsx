import React, { useEffect, useState } from "react";
import useApi from "../../../Hooks/useApi";
import { MdClose } from "react-icons/md";

const ManageCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [filterCustomers, setFilterCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(false);
  const { get, del } = useApi();

  useEffect(() => {
    const getUsers = () => {
      get("users")
        .then((data) => {
          const customerDetailsArray = [];

          data.map((d) => {
            let totalSpent;
            let totalPaid;
            let totalUnpaid;

            get(`orders/${d.email}`, "getOrders").then((ordersData) => {
              if (ordersData.length !== 0) {
                totalSpent = ordersData.reduce((accumulator, currentValue) => {
                  return accumulator + currentValue.totalAmount;
                }, 0);

                const filterPaidOrders = ordersData.filter(
                  (order) => order.paymentInfo === "paid"
                );
                if (filterPaidOrders.length !== 0) {
                  totalPaid = filterPaidOrders.reduce(
                    (accumulator, currentValue) => {
                      return accumulator + currentValue.totalAmount;
                    },
                    0
                  );
                }

                const filterUnpaidOrders = ordersData.filter(
                  (order) => order.paymentInfo === "unpaid"
                );
                //console.log(filterUnpaidOrders.length)
                if (filterPaidOrders.length !== 0) {
                  totalUnpaid = filterUnpaidOrders.reduce(
                    (accumulator, currentValue) => {
                      return accumulator + currentValue.totalAmount;
                    },
                    0
                  );
                }
              }

              const newCustomerDetails = {
                userData: d,
                totalPaid: totalPaid === undefined ? 0 : totalPaid,
                totalSpent: totalSpent === undefined ? 0 : totalSpent,
                totalUnpaid: totalUnpaid === undefined ? 0 : totalUnpaid,
              };

              customerDetailsArray.push(newCustomerDetails);
            });
          });

          setCustomers(customerDetailsArray);
          setFilterCustomers(customerDetailsArray);
        })
        .catch((e) => console.log(e));
    };

    getUsers();
    setRefresh(false);

  }, [refresh]);

  //for search
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //for search
  useEffect(() => {
    let value = search.toLowerCase();

    let searchCustomers = customers.filter((data) => {
      const email = data?.userData.email?.toLowerCase();
      const name = data?.userData.name?.toLowerCase();
      const userId = data?.userData._id?.toLowerCase();
      return (
        email.startsWith(value) ||
        name.startsWith(value) ||
        userId.startsWith(value)
      );
    });
    setFilterCustomers(searchCustomers);
  }, [search]);

  //for search
  const handleSubmit = (e) => {
    e.preventDefault();
    let value = search.toLowerCase();
    let searchCustomers = customers.filter((data) => {
      const email = data?.userData.email?.toLowerCase();
      const name = data?.userData.name?.toLowerCase();
      const userId = data?.userData._id?.toLowerCase();
      return (
        email.startsWith(value) ||
        name.startsWith(value) ||
        userId.startsWith(value)
      );
    });
    setFilterCustomers(searchCustomers);
  };

  //for sorting
  const handleSort = (e) => {
    if (e.target.value === "price-lowest") {
      const s = [...customers].sort((a, b) => a.totalSpent - b.totalSpent);
      setFilterCustomers(s);
    }

    if (e.target.value === "price-highest") {
      const s = [...customers].sort((b, a) => a.totalSpent - b.totalSpent);
      setFilterCustomers(s);
    }
  };

  //for delete user
  const handleDelete = (id) => {
    del(`users/${id}`, "CategoryDelete").then(() => {
      setRefresh(true);
    });
  };

  //console.log(customers);
  return (
    <div>
      <div className="wrapper min-h-screen text-secondary backdrop-blur-md">
        <div className="overflow-x-auto pt-[8rem]">
          <div className="text-4xl font-thin">All Customers</div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4 text-primary cursor-text">
              <input
                type="text"
                placeholder="Search orders..."
                className="toyBorder focus:outline-none placeholder:text-secondary !cursor-text"
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
                  Total Spent (Lowest to Highest)
                </option>
                <option value="price-highest" className="bg-primary">
                  Total Spent (Highest to Lowest)
                </option>
              </select>
            </div>
          </div>

          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Customer Id</th>
                <th>Customer Name</th>
                <th>Customer Email</th>
                <th>Total Spent (Paid + Unpaid)</th>
                <th>Total Paid</th>
                <th>Total Unpaid</th>
                {/*<th>Payment Status</th>
                <th>Status</th>*/}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filterCustomers.map((customer) => (
                <tr key={customer.userData._id}>
                  <td>{customer.userData._id}</td>
                  <td>{customer.userData.name}</td>
                  <td>{customer.userData.email}</td>
                  <td>{customer.totalSpent}</td>
                  <td>{customer.totalPaid}</td>
                  <td>{customer.totalUnpaid}</td>
                  <td>
                    <button
                      className="cursor-pointer text-3xl"
                      onClick={() => handleDelete(customer.userData._id)}
                    >
                      <MdClose />
                    </button>
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

export default ManageCustomers;
