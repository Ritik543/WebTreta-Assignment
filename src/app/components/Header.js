import { useState } from "react";
import Link from "next/link";
import logo from "../../../public/logo.png";
import Image from "next/image";

export default function Navbar({ isDarkMode, onDarkModeToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } shadow-lg fixed w-full z-10 transition-all duration-300`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className={`flex items-center space-x-3 px-2 py-1 rounded-lg ${
            isDarkMode
              ? "bg-gray-800"
              : "bg-black" // Light mode gradient
          }`}
        >
          <Image
            src={logo}
            alt="Logo"
            width={176}
            height={25}
            className="object-contain"
          />
        </div>

        {/* Links for larger screens */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link href="#">
              <span className="cursor-pointer hover:text-indigo-500 transition duration-300 hover:scale-110">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="cursor-pointer hover:text-indigo-500 transition duration-300 hover:scale-110">
                Features
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="cursor-pointer hover:text-indigo-500 transition duration-300 hover:scale-110">
                About
              </span>
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Dark Mode Button */}
          <button
            onClick={onDarkModeToggle}
            className="relative overflow-hidden px-4 py-2 rounded-lg bg-gradient-to-r from-teal-400 via-blue-400 to-indigo-500 text-white transition-all duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 bg-gray-200 dark:bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>

          {/* Download Button */}
          <button
            className="relative overflow-hidden px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white transition-all duration-300 hover:scale-105"
            onClick={() => alert("Download Started!")}
          >
            <span className="absolute inset-0 bg-gray-200 dark:bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            Download
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none hover:scale-110 transition-transform duration-300"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`${
            isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
          } md:hidden transition-all duration-300`}
        >
          <ul className="space-y-4 px-4 py-4">
            <li>
              <Link href="#">
                <span className="cursor-pointer hover:text-indigo-500 transition duration-300">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="cursor-pointer hover:text-indigo-500 transition duration-300">
                  Features
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="cursor-pointer hover:text-indigo-500 transition duration-300">
                  About
                </span>
              </Link>
            </li>
            <li>
              <button
                onClick={onDarkModeToggle}
                className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-300 w-full"
              >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
            <li>
              <button
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full"
                onClick={() => alert("Download Started!")}
              >
                Download
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
