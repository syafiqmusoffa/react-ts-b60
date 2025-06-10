import React from "react";
import RightBar from "./components/RightBar";
import LeftBar from "./components/LeftBar";

interface AppLayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: AppLayoutProps) {
  return (
    <div className="flex  ">
      {/* sidebar kiri */}
      <LeftBar />

      {/* sidebar utama */}
      <section className="flex-1 ">{children}</section>

      {/* sidebar kanan */}
      <RightBar />
    </div>
  );
}

export default Layout;
