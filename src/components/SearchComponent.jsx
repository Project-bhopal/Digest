"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const SearchComponent = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  // Toggle search input visibility
  const handleSearchClick = () => {

    setIsSearchOpen((prev) => !prev);
  };

  // Close search input if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button onClick={handleSearchClick} aria-label="Search Icon">
        <FaSearch className="text-black dark:text-white text-lg" />
      </button>
      {isSearchOpen && (
        <div ref={searchRef} className={`absolute top-7 right-0 delay-100`}>
          <div className="bg-[#04031D] py-3 px-5 w-[335px] flex items-center gap-3">
            <FaSearch className="text-white text-lg font-semibold" />
            <form className="w-full flex justify-between">
              <input
                type="text"
                placeholder="Search Headlines, News..."
                className="bg-transparent placeholder:text-sm placeholder:text-gray-300 outline-none text-white"
              />
              <button type="submit">
                <FaRegArrowAltCircleRight className="text-white hover:text-lime duration-100 place-self-end" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
