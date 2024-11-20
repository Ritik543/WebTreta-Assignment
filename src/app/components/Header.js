import logo from "../../../public/imaa.png";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-white py-10 md:py-16 text-center">
      <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-[#1c2b71]">
        MT Auto Clicker
      </h1>

      <main className="max-w-4xl mx-auto text-center mt-8 relative px-4 sm:px-8">
        <span className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-gray-300 text-gray-600 text-xs px-3 py-1 rounded-full uppercase">
          Advertisement
        </span>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-8">
          Streamline tasks with features like auto-clicking, scrolling,
          swiping, form-filling, hotkeys, zoom, screen capture, and more. Easily
          enhance efficiency and productivity.
        </p>

        <div className="relative mt-8 mx-auto flex flex-col items-center">
          <Image
            src={logo}
            alt="MT Auto Clicker Logo"
            
          />

          <button
            className="mt-8 bg-[#1c2b71] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#2a3e7d] transition duration-200 text-sm md:text-base"
          >
            Download
          </button>
        </div>
      </main>
    </div>
  );
}
