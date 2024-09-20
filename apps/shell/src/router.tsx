import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";

const browerRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [],
  },
]);

const Router = () => {
  return <RouterProvider router={browerRouter} />;
};

export default Router;
