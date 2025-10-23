import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "./Layout/HomeLayout.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import Profile from "./Pages/Profile.jsx";
import ViewDetails from "./Pages/ViewDetails.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import ForgotPassword from "./Pages/ForgotPassword.jsx";
import Services from "./Pages/Services.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader:()=>fetch('/WinterCareTips.json'),

      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/view-details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/services.json"),
        
      },
      {
        path:'/forgot-password',
        Component:ForgotPassword,
      },
      {
        path:'/services',
        Component:Services,
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
