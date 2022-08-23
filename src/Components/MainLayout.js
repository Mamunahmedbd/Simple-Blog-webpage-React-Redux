import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

function MainLayout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
