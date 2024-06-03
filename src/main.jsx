import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import LogIn from "./components/AuthHere/LogIn";
import Registration from "./components/AuthHere/Registration";
import AuthProvider from "./components/AuthHere/AuthProvider";
import Home from "./components/Home/Home";
import "@radix-ui/themes/styles.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomeCardDetails from "./components/Home/HomeCardDetails";
import { Theme } from "@radix-ui/themes/dist/cjs/index.js";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/homeCardDetails/:id",
        element: <HomeCardDetails></HomeCardDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Theme>
          <RouterProvider router={router} />
        </Theme>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
