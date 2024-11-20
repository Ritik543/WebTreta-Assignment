import React from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-8">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          
          <div className="text-center sm:text-left">
            <Image src={logo} alt="MT Auto Clicker"  width={176}
            height={25} />
            <p className="text-sm text-gray-400 leading-relaxed">
              MT Auto Clicker automates repetitive tasks like clicks, scrolls, and data entry across apps and websites,
              with customizable, recordable automations to enhance productivity.
            </p>
          </div>

          
          <div className="col-span-2 sm:col-span-1 lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div>
                <h3 className="font-semibold text-lg mb-4 text-white">Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                      Download
                    </a>
                  </li>
                </ul>
              </div>

              
              <div>
                <h3 className="font-semibold text-lg mb-4 text-white">Policy Pages</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>

              
              <div>
                <h3 className="font-semibold text-lg mb-4 text-white">Legal Pages</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                      Legal Notice
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                      GDPR Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                      EU Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                      DMCA Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-700 mt-12"></div>

        
        <div className="text-center mt-6 text-gray-500 text-sm">
          © 2024 mtautoclicker.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
