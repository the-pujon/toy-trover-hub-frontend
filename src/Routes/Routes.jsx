import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Customer/Home/Home";
import Main from "../Layouts/Main";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import SingleToy from "../Pages/Customer/SingleToy/SingleToy/SingleToy";
import PrivateRoute from "./PrivateRoute";
import Shop from "../Pages/Customer/Shop/Shop";
import Cart from "../Pages/Customer/Cart/Cart";
import SuccessPayment from "../Pages/Customer/SuccessPayment";
import DashboardLayout from "../Layouts/DashboardLayout";
import AllOrders from "../Pages/AdminDashBoard/AllOrders/AllOrders";
import ManageCustomers from "../Pages/AdminDashBoard/ManageCustomers/ManageCustomers";
import AllTransactions from "../Pages/AdminDashBoard/AllTransactions/AllTransactions";
import Dashboard from "./../Pages/AdminDashBoard/Dashboard/Dashboard";
import MyOrders from "../Pages/Customer/MyOrders/MyOrders";
import MyTransactions from "../Pages/Customer/MyTransactions/MyTransactions";
import AllToys from "../Pages/AdminDashBoard/AllToys/AllToys/AllToys";
import EditToy from "./../Pages/AdminDashBoard/EditToy/EditToy";
import AdminRoute from "./AdminRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`${import.meta.env.VITE_BASE_URL}/api/toys`),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "toys/:id",
        element: (
          <PrivateRoute>
            <SingleToy />
          </PrivateRoute>
        ),
      },
      {
        path: "paymentSuccess/:orderId",
        element: (
          <PrivateRoute>
            <SuccessPayment />
          </PrivateRoute>
        ),
      },
      {
        path: "myOrders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "myTransactions",
        element: (
          <PrivateRoute>
            <MyTransactions />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <AdminRoute>
          <DashboardLayout />
        </AdminRoute>
      </PrivateRoute>
    ),
    children: [
      {
        path: "overview",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "allToys",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllToys />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "allOrders",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllOrders />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "customers",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageCustomers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "transactions",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllTransactions />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "editToy/:id",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <EditToy />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Routes;
