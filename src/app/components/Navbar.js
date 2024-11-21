"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";

export default function Navbar({ onDarkModeToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDarkModeToggle = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);

    if (onDarkModeToggle) {
      onDarkModeToggle(newDarkModeState);
    }
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

        <div className="flex sm:hidden items-center space-x-3">
          
          <button
            onClick={handleDarkModeToggle}
            className="p-2 bg-transparent hover:text-cyan-500 transition sm:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="none"
            >
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
            </svg>
          </button>

          
          <button
            onClick={toggleMenu}
            className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        
        <nav
          className={`absolute sm:static top-[90px] left-0 sm:flex items-center bg-white sm:bg-transparent w-full sm:w-auto transition-all shadow-lg sm:shadow-none ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0 p-4 sm:p-0">
            <li>
              <a
                href="#"
                className="text-black sm:text-white text-md font-semibold hover:text-cyan-500 transition"
              >
                Home
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <a
                href="#"
                className="text-black sm:text-white text-md font-semibold hover:text-cyan-500 transition"
              >
                Download
              </a>

              
              <button
                onClick={handleDarkModeToggle}
                className="p-2 bg-transparent hover:text-cyan-500 transition hidden sm:block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
