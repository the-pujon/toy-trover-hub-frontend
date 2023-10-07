import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Customer/Home/Home";
import Main from "../Layouts/Main";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://venture-toy-verse-server.vercel.app/toys"),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path:'signup',
        element:<SignUp/>
      }
    ],
  },
]);

export default Routes;
