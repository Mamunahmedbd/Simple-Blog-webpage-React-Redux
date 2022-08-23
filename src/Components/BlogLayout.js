import React from "react";
import Header from "./Header";
import MainLayout from "./MainLayout";
import SearchBar from "./SearchBar";

function BlogLayout({ children }) {
  return (
    <MainLayout>
      <SearchBar />
      <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <Header />
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {children}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default BlogLayout;
