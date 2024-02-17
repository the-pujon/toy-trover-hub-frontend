import React, { useEffect, useState } from "react";
import DashboardCard from "../../../Components/DashboardCard/DashboardCard";
import useApi from "../../../Hooks/useApi";
import SummaryChart from "../../../Components/SummaryChart/SummaryChart";

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);

  const { get } = useApi();
  useEffect(() => {
    get("users", "getUsers").then((data) => {
      console.log(data.length);
      setTotalUsers(data.length);
    });

    get("toys", "getToys").then((data) => {
      console.log(data.length);
      setTotalProducts(data.length);
    });

    get("orders", "getOrders").then((data) => {
      console.log(data.length);
      setTotalOrders(data.length);
    });

    get("payments", "getPayments").then((data) => {
      console.log(data.payments.length);
      setTotalEarnings(data.payments.length);
    });
  }, []);

  return (
    <div className="px-6 h-[100vh] min-h-screen max-h-screen w-full overflow-auto">
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <DashboardCard name="users" amount={totalUsers} />
        <DashboardCard name="products" amount={totalProducts} />
        <DashboardCard name="orders" amount={totalOrders} />
        <DashboardCard name="earnings" amount={totalEarnings} />
      </div>
      <div>
        <div>
<SummaryChart/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
