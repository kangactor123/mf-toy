import React, { Suspense } from "react";

import { RouteObject } from "react-router-dom";
import Layout from "./components/common/layout";
import { AppRoutingManager } from "@mf-toy/shell-router";

const NearbyStoresList = React.lazy(() => import("./pages/list/index"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<div>loading..</div>}>
        <Layout>
          <AppRoutingManager type="app-nearby-stores" />
        </Layout>
      </Suspense>
    ),
    errorElement: <div>error</div>,
    children: [
      { index: true, element: <NearbyStoresList /> },
      {
        path: ":id",
        element: <div>id</div>,
      },
    ],
  },
];
