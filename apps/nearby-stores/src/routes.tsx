import React, { Suspense } from "react";

import { RouteObject } from "react-router-dom";
import Layout from "./components/common/layout";
import { AppRoutingManager } from "@mf-toy/shell-router";

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
    children: [{ index: true, element: <>home</> }],
  },
];
