import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex flex-row">
      <div className="w-56 min-h-screen max-h-screen overflow-auto sticky">
        <Sidebar />
      </div>
      <div className="flex-1 max-h-screen overflow-auto sticky">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
