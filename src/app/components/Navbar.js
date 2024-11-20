"use client"
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#1c2b71] text-white h-[90px]">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-3">
          <Image
            src={logo}
            alt="MT Auto Clicker Logo"
            width={176}
            height={25}
          />
        </div>

        <button
          className="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <nav
          className={`absolute sm:static top-[90px] left-0 sm:flex items-center space-x-8 bg-white sm:bg-transparent w-full sm:w-auto transition-all shadow-lg sm:shadow-none ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 p-4 sm:p-0">
            <li>
              <a
                href="#"
                className="hover:text-cyan-500 transition text-md font-semibold text-black sm:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-cyan-500 transition text-md font-semibold text-black sm:text-white"
              >
                Download
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
