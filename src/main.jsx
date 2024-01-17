import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes.jsx";
import { AuthProvider } from "./Context/AuthContext";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
   <Toaster />
    <AuthProvider>
      <RouterProvider router={Routes} />
    </AuthProvider>
  </Provider>
);
