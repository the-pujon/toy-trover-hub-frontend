import React, { useEffect, useState } from "react";
import DashboardCard from "../../../Components/DashboardCard/DashboardCard";
import useApi from "../../../Hooks/useApi";
import SummaryChart from "../../../Components/SummaryChart/SummaryChart";
import EarningsvsOrders from "../../../Components/EarningvsOrders/EarningvsOrders";

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [ordersDetails, setOrdersDetails] = useState([[]]);

  const { get } = useApi();
  useEffect(() => {
    get("users", "getUsers").then((data) => {
      setTotalUsers(data.length);
    });

    get("toys", "getToys").then((data) => {
      setTotalProducts(data.length);
    });

    get("orders", "getOrders").then((data) => {
      setOrdersDetails(data);
      setTotalOrders(data.length);
    });

    get("orders", "getOrders").then((data) => {
      let earnings = data.reduce((acc, currVal) => acc + currVal.totalAmount, 0);
      setTotalEarnings(earnings);
    });
  }, []);

  return (
    <div className=" px-6 h-[100vh] min-h-screen max-h-screen w-full overflow-auto">
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <DashboardCard name="users" amount={totalUsers} />
        <DashboardCard name="products" amount={totalProducts} />
        <DashboardCard name="orders" amount={totalOrders} />
        <DashboardCard name="earnings" amount={totalEarnings} />
      </div>

      <div className=" flex flex-col lg:flex-row lg:items-center overflow-auto justify-center flex-wrap mt-10">
        <div className="flex-1">
          <h1 className="text-4xl my-5 text-white" >Earnings and Orders Overview</h1>
          <EarningsvsOrders orders={ordersDetails} />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl my-5 text-white">Users & Products & Orders Overview</h1>
          <SummaryChart
            users={totalUsers}
            products={totalProducts}
            orders={totalOrders}
            earnings={totalEarnings}
          />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
