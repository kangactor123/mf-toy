import React from "react";

import { useShellNavigateListener } from "@mf-toy/shell-router";
import { Outlet } from "react-router-dom";
import Header from "./header";
import styled from "styled-components";

const Layout = () => {
  useShellNavigateListener();

  return (
    <div>
      <Header />
      <GlobalContainer>
        <Outlet />
      </GlobalContainer>
    </div>
  );
};

const GlobalContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 64px;
`;

export default Layout;
