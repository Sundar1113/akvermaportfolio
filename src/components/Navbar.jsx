import { useState } from "react";
import {close, menu } from "../assets";
import { navLinks } from "../constants";
import { scrollToSection } from "../lib/helperFunctions";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 px-8 py-4 flex justify-between items-center navbar bg-black shadow-md">
      <a href="#home" className="text-white font-bold text-2xl">
        Abhinav Kumar Verma
      </a>

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 space-x-8">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-teal-200"
            onClick={() => scrollToSection(nav.id)}
          >
            {nav.title}
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black absolute top-16 right-4 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col items-center space-y-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="font-poppins font-normal cursor-pointer text-[16px] text-white"
                onClick={() => {
                  scrollToSection(nav.id);
                  setToggle(false); // Close menu after selection
                }}
              >
                {nav.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
