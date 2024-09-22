import React, { Suspense } from "react";

import { RouteObject } from "react-router-dom";
import Layout from "./components/common/layout";
import { AppRoutingManager } from "@mf-toy/shell-router";

const Home = React.lazy(() => import("./pages/list"));
const Detail = React.lazy(() => import("./pages/list/detail"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense>
        <Layout>
          <AppRoutingManager type="app-fleamarket" />
        </Layout>
      </Suspense>
    ),
    errorElement: <div>error</div>,
    children: [
      { index: true, element: <Home /> },
      {
        path: ":id",
        element: <Detail />,
      },
    ],
  },
];
