import React from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1e3c72] to-[#2a5298] text-white py-16 mt-8">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo and Description Section */}
          <div className="text-center sm:text-left">
            <Image src={logo} alt="MT Auto Clicker" width={176} height={25} />
            <p className="text-lg text-gray-200 leading-relaxed mt-4">
              MT Auto Clicker automates repetitive tasks like clicks, scrolls, and data entry across apps and websites,
              with customizable, recordable automations to enhance productivity.
            </p>
            <div className="flex justify-center sm:justify-start mt-6 space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <h3 className="font-semibold text-xl mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105">
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Policy Pages */}
          <div>
            <h3 className="font-semibold text-xl mb-4 text-white">Policy Pages</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h3 className="font-semibold text-xl mb-4 text-white">Legal Pages</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105">
                  Legal Notice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105">
                  GDPR Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105">
                  EU Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105">
                  DMCA Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12"></div>

        {/* Call-to-action and Copyright */}
        <div className="flex justify-between items-center mt-6 sm:flex-row flex-col text-center sm:text-left">
          <div className="text-gray-400 text-sm font-medium">
            © 2024 mtautoclicker.com. All rights reserved.
          </div>

          {/* Call-to-action button */}
          <a href="#download" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold text-lg transition duration-300">
            Get Started
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

