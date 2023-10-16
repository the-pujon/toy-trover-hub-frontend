import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Customer/Home/Home";
import Main from "../Layouts/Main";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import AddToy from "../Pages/Seller/AddToy/AddToy";
import SingleToy from "../Pages/Customer/SingleToy/SingleToy/SingleToy";
import AllToys from "../Pages/Seller/AllToys/AllToys/AllToys";
import MyToys from "../Pages/Seller/MyToys/MyToys";
import EditToy from "../Pages/Seller/EditToy/EditToy";
import PrivateRoute from "./PrivateRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/api/toys"),
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
        path: "addToy",
        element: (
          <PrivateRoute>
            <AddToy />
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
        path: "/allToys",
        element: <AllToys />,
      },
      {
        path: "myToys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "editToy/:id",
        element: (
          <PrivateRoute>
            <EditToy />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Routes;
