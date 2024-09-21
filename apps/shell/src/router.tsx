import React from "react";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout";
import { appFleaMarketBasename } from "./constants/prefix";
import AppFleaMarket from "./components/app-fleamarket";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={appFleaMarketBasename} />,
      },
      {
        path: `${appFleaMarketBasename}/*`,
        element: <AppFleaMarket />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={browserRouter} />;
};

export default Router;
