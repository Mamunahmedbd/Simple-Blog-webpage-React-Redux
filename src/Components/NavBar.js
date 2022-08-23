import React from "react";
import { Link } from "react-router-dom";
import image from "../image/lws.svg";

function NavBar() {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
        <Link to="/" href="index.html">
          <img className="h-10" src={image} alt="Learn with Sumit" />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
