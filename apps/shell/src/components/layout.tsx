import React from "react";

import { useShellNavigateListener } from "@mf/shell-router";
import { Outlet } from "react-router-dom";

const Layout = () => {
  useShellNavigateListener();

  return (
    <div>
      <header>header</header>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
