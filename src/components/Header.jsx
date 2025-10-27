import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  // Helper to check active link
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-[#ffffff] flex justify-between items-center sticky top-0 px-4 md:px-20 p-2 z-50">
      <img src={Logo} alt="" className="w-16 md:w-20" />

      {/* Hamburger Button (mobile only) */}
      <button
        className="md:hidden block text-2xl focus:outline-none"
        onClick={() => setNavOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        {/* Put your hamburger icon here */}
        <span>☰</span>
      </button>

      {/* Nav Menu */}
      <ul
        className={`
          flex-col md:flex-row flex gap-8 md:gap-10 text-black
          fixed md:static top-0 left-0 w-2/3 max-w-xs h-full md:h-auto bg-white md:bg-transparent z-40
          transition-transform duration-300 ease-in-out
          ${navOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
          md:flex
        `}
        style={{ fontFamily: "poppins" }}
      >
        <li className="md:hidden flex justify-end p-4">
          <button
            onClick={() => setNavOpen(false)}
            aria-label="Close navigation"
          >
            <span>✕</span>
          </button>
        </li>
        <li
          className={`cursor-pointer border-b-2 pb-2 transition duration-500 ${
            isActive("/")
              ? "text-[#FFBB00] border-[#FFBB00]"
              : "border-transparent hover:text-[#FFBB00] hover:border-[#FFBB00]"
          }`}
        >
          <Link
            to={"/"}
            onClick={() => setNavOpen(false)}
            className="block w-full"
          >
            Home
          </Link>
        </li>
        <li
          className={`cursor-pointer border-b-2 pb-2 transition duration-500 ${
            isActive("/about-us")
              ? "text-[#FFBB00] border-[#FFBB00]"
              : "border-transparent hover:text-[#FFBB00] hover:border-[#FFBB00]"
          }`}
        >
          <Link
            to={"/about-us"}
            onClick={() => setNavOpen(false)}
            className="block w-full"
          >
            About
          </Link>
        </li>

        <li
          className={`cursor-pointer border-b-2 pb-2 transition duration-500 ${
            isActive("/menu")
              ? "text-[#FFBB00] border-[#FFBB00]"
              : "border-transparent hover:text-[#FFBB00] hover:border-[#FFBB00]"
          }`}
        >
          <Link
            to={"/menu"}
            onClick={() => setNavOpen(false)}
            className="block w-full"
          >
            Menu
          </Link>
        </li>

        <li
          className={`cursor-pointer border-b-2 pb-2 transition duration-500 ${
            isActive("/service")
              ? "text-[#FFBB00] border-[#FFBB00]"
              : "border-transparent hover:text-[#FFBB00] hover:border-[#FFBB00]"
          }`}
        >
          <Link
            to={"/service"}
            onClick={() => setNavOpen(false)}
            className="block w-full"
          >
            Service
          </Link>
        </li>
        <li
          className={`cursor-pointer border-b-2 pb-2 transition duration-500 ${
            isActive("/gallery")
              ? "text-[#FFBB00] border-[#FFBB00]"
              : "border-transparent hover:text-[#FFBB00] hover:border-[#FFBB00]"
          }`}
        >
          <Link
            to={"/gallery"}
            onClick={() => setNavOpen(false)}
            className="block w-full"
          >
            Gallery
          </Link>
        </li>
        <li
          className={`cursor-pointer border-b-2 pb-2 transition duration-500 ${
            isActive("/contact-us")
              ? "text-[#FFBB00] border-[#FFBB00]"
              : "border-transparent hover:text-[#FFBB00] hover:border-[#FFBB00]"
          }`}
        >
          <Link
            to={"/contact-us"}
            onClick={() => setNavOpen(false)}
            className="block w-full"
          >
            Contact
          </Link>
        </li>
        <li className="md:hidden flex justify-center p-4">
          <a
            href="https://WA.ME/+33773625823"
            className="text-black"
            target="blank"
          >
            <button className="bg-[#FFBB00] cursor-pointer p-1 px-6 text-[#000000] font-semibold rounded-2xl hover:bg-[#daa000]">
              Book Now!
            </button>
          </a>
        </li>
      </ul>

      {/* Book Now button (desktop only) */}
      <a
        href="https://WA.ME/+33773625823"
        className="text-black hidden md:block"
        target="blank"
      >
        <button className="bg-[#FFBB00] cursor-pointer p-1 px-6 text-[#000000] font-semibold rounded-2xl hover:bg-[#daa000]">
          Book Now!
        </button>
      </a>

      {/* Overlay for mobile nav */}
      {navOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setNavOpen(false)}
        />
      )}
    </header>
  );
}

export default Header;
