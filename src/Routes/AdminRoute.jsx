import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "./../Hooks/useUser";
import Loading from "../Components/Loading/Loading";

const AdminRoute = ({ children }) => {
  const { loggedUser, userLoading } = useUser();

  if (userLoading) {
    return (
      <div className="h-screen flex items-center justify-center  backdrop-blur-lg">
        <Loading/>
      </div>
    );
  }

  if (loggedUser && loggedUser?.role === "admin") {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default AdminRoute;
