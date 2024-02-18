import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes.jsx";
import { AuthProvider } from "./Context/AuthContext";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./app/store.js";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
   <Toaster
   toastOptions={{
    className: 'text-primary',
    style: {
      background:
      "linear-gradient(to top, #e7fa40 -50%, #e77f5a 100%)",
    },
  }}
   />
    <AuthProvider>
      <RouterProvider router={Routes} />
    </AuthProvider>
  </Provider>
);
