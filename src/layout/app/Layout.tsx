import React, { FC } from "react";
import Sidebar from "./Sidebar";

interface App {
  children: any;
}

const Layout: FC<App> = ({ children }) => {
  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      <div className="h-screen w-64">
        <Sidebar />
      </div>
      <main className="overflow-y-scroll w-full">{children}</main>
    </div>
  );
};

export default Layout;
