import React from "react";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout";
import {
  appFleaMarketBasename,
  appNearbyStoresBasename,
} from "./constants/prefix";
import AppFleaMarket from "./components/app-fleamarket";
import AppNearbyStores from "./components/app-nearby-stores";

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
      {
        path: `${appNearbyStoresBasename}/*`,
        element: <AppNearbyStores />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={browserRouter} />;
};

export default Router;
