import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [],
  },
]);

const Router = () => {
  return <RouterProvider router={browserRouter} />;
};

export default Router;
