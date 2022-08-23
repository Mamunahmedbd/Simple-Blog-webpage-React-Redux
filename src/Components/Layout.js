import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Posts from "./Posts";

function Layout() {
  return (
    <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <Header />
        <Posts />
        <Footer />
      </div>
    </section>
  );
}

export default Layout;
