// MainLayout.jsx
import React from "react";
import Footer from "../components/footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header className="flex-shrink-0">{/* Add header content here */}</header>
      <main className="flex-grow overflow-auto">{children}</main>
      <Footer className="flex-shrink-0" />
    </div>
  );
};

export default MainLayout;
