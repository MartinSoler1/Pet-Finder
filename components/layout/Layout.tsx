import MainNavigation from "./MainNavigation";
import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <MainNavigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
