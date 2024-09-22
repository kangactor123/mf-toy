import React, { PropsWithChildren } from "react";

import { LayoutWrapper } from "./layout.style";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
