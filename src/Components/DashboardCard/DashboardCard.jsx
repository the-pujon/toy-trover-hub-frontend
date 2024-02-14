import React from "react";
import "./DashboardCard.scss";

const DashboardCard = ({ name, amount, link, paid, unPaid }) => {
  return (
    <div className="dashboardCard">
      <div>Total {name}</div>
      <div className="text-3xl" >
        {name === "earnings" && '$'} {amount}
      </div>
      <div>see all {name}</div>
    </div>
  );
};

export default DashboardCard;
