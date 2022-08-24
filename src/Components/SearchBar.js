import React from "react";
import image from "../image/search.svg";
import { useDispatch } from "react-redux";
import { searchValue } from "./Redux/Filters/Action";

function SearchBar() {
  const dispatch = useDispatch();

  function handleBounce(value) {
    const handler = setTimeout(() => {
      dispatch(searchValue(value));
    }, 1400);

    return () => {
      clearTimeout(handler);
    };
  }

  return (
    <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <input
        onChange={(e) => handleBounce(e.target.value)}
        className="outline-none border-none bg-gray-50 h-full w-full mr-2"
        type="search"
        name="search"
        placeholder="Search"
      />
      <img className="inline h-6 cursor-pointer" src={image} alt="Search" />
    </div>
  );
}

export default SearchBar;
