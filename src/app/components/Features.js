"use client";
import Head from "next/head";
import { MdOutlineTouchApp } from "react-icons/md";
import { MdOutlineZoomIn } from "react-icons/md";
import { TbCapture } from "react-icons/tb";
import { MdOutlineToggleOn } from "react-icons/md";
import { MdAutorenew } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";
import { IoCheckboxOutline } from "react-icons/io5";

export default function Features({ isDarkMode }) {
  return (
    <>
      <Head>
        <title>Features of MT Auto Clicker</title>
      </Head>
      <main
        className={`min-h-screen flex items-center justify-center px-4 ${
          isDarkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <section className="max-w-7xl w-full">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 ${
              isDarkMode ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Features of MT Auto Clicker
            <hr
              className={`my-4 border-t-2 ${
                isDarkMode ? "border-blue-600" : "border-gray-300"
              }`}
            />
          </h1>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            <FeatureCard
              icon={<LuClock3 size={50} />}
              title="Auto Click"
              description="Automate mouse clicks, target multiple areas for repetitive tasks, ensure precision with area-wise clicking, and empower users to create personalized auto-clicking events."
              isDarkMode={isDarkMode}
            />
            <FeatureCard
              icon="♾️"
              title="Auto Scroller"
              description="Navigate through content effortlessly with the auto-scroll feature, a seamless tool that automates scrolling actions."
              isDarkMode={isDarkMode}
            />
            <FeatureCard
              icon={<MdOutlineToggleOn size={50} />}
              title="Auto Swipe"
              description="Immerse yourself in a world of interactive ease with auto swipe. This feature transforms swiping tasks into automated actions, enhancing your app and content exploration."
              isDarkMode={isDarkMode}
            />
            <FeatureCard
              icon="🔃"
              title="Auto Hotkey"
              description="Empower your keyboard with Auto Hotkey, a dynamic feature that automates critical sequences. From executing complex commands to streamlining repetitive tasks, Auto Hotkey adds a layer of efficiency to your keyboard interactions, making every keystroke count."
              isDarkMode={isDarkMode}
            />
            <FeatureCard
              icon={<MdAutorenew size={50} />}
              title="Auto Refreshing"
              description="Keep your content up-to-date effortlessly with the Auto Refreshing feature. Whether monitoring live feeds, tracking data, or staying current on web pages, this automated refresh tool ensures you're always presented with the latest information without manual intervention."
              isDarkMode={isDarkMode}
            />
            <FeatureCard
              icon={<IoCheckboxOutline size={50} />}
              title="Auto Fill"
              description="Auto Fill feature is for user convenience to automate Data submission work like Data entry, Profile registration."
              isDarkMode={isDarkMode}
            />
            <FeatureCard
              icon={<MdOutlineZoomIn size={50} />}
              title="Zoom In and Zoom Out"
              description="Precision meets simplicity with the Zoom In and Zoom Out features. Dive into details or get a broader perspective effortlessly by automating the zoom functions."
              isDarkMode={isDarkMode}
            />
            <FeatureCard
              icon={<MdOutlineTouchApp size={50} />}
              title="Touch and Hold"
              description="Unleash the power of prolonged interactions with the Touch and Hold feature. Perfect for tasks requiring extended presses, this feature automates the touch-and-hold action."
              isDarkMode={isDarkMode}
            />
            <FeatureCard
              icon={<TbCapture size={50} />}
              title="Capturing Screenshots"
              description="Capture screenshots based on user needs, allowing simultaneous use during tasks without disruption. Utilize this feature alongside other functions for a seamless multitasking experience."
              isDarkMode={isDarkMode}
            />
          </div>
        </section>
      </main>
    </>
  );
}

function FeatureCard({ icon, title, description, isDarkMode }) {
  return (
    <div
      className={`p-6 rounded-lg shadow-2xl flex flex-col justify-between h-[300px] 
        ${isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}
        hover:scale-105 transition-all duration-300 ${
          isDarkMode
            ? "hover:bg-blue-700 hover:text-blue-300"
            : "hover:bg-blue-500 hover:text-white"
        }`}
    >
      <div className="text-4xl mb-4 flex items-center justify-center">{icon}</div>
      <h3 className="text-xl sm:text-2xl mx-auto text-center font-semibold mb-2">
        {title}
      </h3>
      <p className="text-sm sm:text-md text-center leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );
}
