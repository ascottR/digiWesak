// screen where users see
import React from "react";
import Footer from "../components/footer";

const FilledLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header className="flex-shrink-0">{/* Add header content here */}</header>
      <main className="flex-grow overflow-hidden">{children}</main>
      <Footer className="flex-shrink-0" />
    </div>
  );
};

export default FilledLayout;
