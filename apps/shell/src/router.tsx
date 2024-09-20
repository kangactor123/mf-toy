import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const browerRouter = createBrowserRouter([
  {
    path: "/",
    element: <div>root</div>,
    children: [],
  },
]);

const Router = () => {
  return <RouterProvider router={browerRouter} />;
};

export default Router;
