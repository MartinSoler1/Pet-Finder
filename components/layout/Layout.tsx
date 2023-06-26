import MainNavigation from "./MainNavigation";
import React, { ReactNode } from "react";
import Providers from "../../Providers";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Providers>
      <MainNavigation />
      <main>{children}</main>
    </Providers>
  );
};

export default Layout;
