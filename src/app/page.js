"use client";
import { useState } from "react";
import Navbar from "../app/components/Navbar";
import Header from "../app/components/Header";
import Features from "./components/Features";
import Herosection from "./components/Herosection";
import Application from "./components/Application";
import Workingautoclick from "./components/Workingautoclick";
import Differentnformation from "./components/Differentnformation";
import Frequentyqustion from "./components/Frequentyqustion";
import InfoBox from "./components/informationbox";
import Footer from "./components/Footer";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } min-h-screen overflow-hidden`}
    >
      <Navbar isDarkMode={isDarkMode} onDarkModeToggle={toggleDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <Herosection isDarkMode={isDarkMode} />
      <Features isDarkMode={isDarkMode} />
      <div className="p-10 mt-10">
        <Application isDarkMode={isDarkMode} />
      </div>
      <Workingautoclick isDarkMode={isDarkMode} />
      <Differentnformation isDarkMode={isDarkMode} />
      <Frequentyqustion isDarkMode={isDarkMode} />
      <InfoBox isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
