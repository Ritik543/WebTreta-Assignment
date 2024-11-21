import logo from "../../../public/imaa.png";
import Image from "next/image";

export default function Header({ isDarkMode }) {
  return (
    <div
      className={`${
        isDarkMode
          ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
          : "bg-gradient-to-r from-gray-100 to-gray-200 text-black"
      } py-20 md:py-28 text-center transition-all duration-500`}
    >
      <h1
        className={`${
          isDarkMode ? "text-white" : "text-black"
        } text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold transition-all duration-500 transform hover:scale-105 typewriter-effect`}
      >
        MT Auto Clicker
      </h1>

      <main className="max-w-4xl mx-auto text-center mt-8 relative px-4 sm:px-8">
        <span
          className={`absolute sm:top-16 left-1/2 transform -translate-x-1/2 ${
            isDarkMode ? "bg-gray-600 text-gray-100" : "bg-gray-200 text-gray-700"
          } text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wider hidden sm:block animate-bounce`}
        >
          Advertisement
        </span>

        <p
          className={`${
            isDarkMode ? "text-gray-300" : "text-gray-800"
          } text-base md:text-lg leading-relaxed mt-8 transition-all duration-500`}
        >
          Streamline tasks with features like auto-clicking, scrolling,
          swiping, form-filling, hotkeys, zoom, screen capture, and more. Easily
          enhance efficiency and productivity.
        </p>

        <div className="relative mt-12 mx-auto flex flex-col items-center">
          <div className="transition-transform duration-500 hover:scale-110">
            <Image
              src={logo}
              alt="MT Auto Clicker Logo"
              className="transition-all duration-500 hover:rotate-[15deg]"
            />
          </div>
          <button className="relative px-8 py-3 font-semibold text-white bg-blue-600 rounded-lg overflow-hidden group">
    {/* Gradient background on hover */}
    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-teal-400 opacity-30 group-hover:opacity-100 transition duration-1000 ease-in-out"></span>
    
    {/* Text stays visible and changes color on hover */}
    <span className="relative z-10 group-hover:text-white text-lg font-semibold transition-all duration-300 ease-out">
      Download
    </span>
    
    {/* Left-to-right color transition animation */}
    <span className="absolute left-0 top-0 w-0 h-full bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-1000 ease-out"></span>
  </button>

         
        </div>
      </main>
    </div>
  );
}
