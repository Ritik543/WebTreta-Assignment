import Head from "next/head";
import { AiFillInfoCircle } from "react-icons/ai";
import { TbCapture } from "react-icons/tb";
import { BiSolidMouseAlt } from "react-icons/bi";
import { FaRegHandPaper } from "react-icons/fa";
import { BsLayersFill } from "react-icons/bs";
import { GoLightBulb } from "react-icons/go";
import { GiGears } from "react-icons/gi";
import { FcCustomerSupport } from "react-icons/fc";

export default function Application() {
  return (
    <>
      <Head>
        <title>Applications of MT Auto Clicker</title>
      </Head>
      <main className="bg-gray-50 min-h-screen flex items-center justify-center px-4">
        <section className="max-w-7xl w-full">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Applications of MT Auto Clicker
            <hr className="my-4 border-t-2 border-gray-300 dark:border-blue-600" />
          </h1>


          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            
            <FeatureCard
              icon={<AiFillInfoCircle size={50} />}
              title="Auto Form Filling"
              description="Automate form-filling processes by setting up precise click intervals, reducing manual efforts, and ensuring accurate and efficient data input."
            />
            
            <FeatureCard
              icon={<TbCapture size={50} />}
              title="Capturing Screenshots"
              description="Set up automated clicks to initiate and capture screenshots at predefined intervals, perfect for time-lapse projects, monitoring changes, or documenting dynamic content."
            />
            
            <FeatureCard
              icon={<BiSolidMouseAlt size={50} />}
              title="Automated Clicking"
              description="Use it to automate repetitive tasks in day-to-day or gaming scenarios, ensuring optimal performance, faster progression, and minimizing the strain on your fingers."
            />
            
            <FeatureCard
              icon={<FaRegHandPaper size={50} />}
              title="Hands-free Browsing"
              description="Optimize your reading experience; Program automated scrolling at customizable speeds to browse long web pages, documents, or feeds hands-free."
            />
            
            <FeatureCard
              icon={<BsLayersFill size={50} />}
              title="Customizable Shortcuts"
              description="Customize shortcuts to automate software functions. Set up efficient hotkey combinations tailored to your specific needs and usage requirements."
            />
            
            <FeatureCard
              icon={<GoLightBulb size={50} />}
              title="Real-time Status Updates"
              description="Initiate automated clicks at set intervals to refresh pages, ensuring you have the most current information, notifications, and status changes."
            />
            
            <FeatureCard
              icon={<GiGears size={50} />}
              title="App Automation"
              description="Automate left/right swipes in-app program sequences to efficiently flip through shopping, dating, or digital catalog/magazine app content."
            />
            
            <FeatureCard
              icon={<FcCustomerSupport size={50} />}
              title="Accessibility Assistant"
              description="Adjust magnification precisely. Customize automated zooming to toggle between overview and detail, enabling closer inspection per your requirements."
            />
          </div>
        </section>
      </main>
    </>
  );
}

function FeatureCard({ icon, title, description, dark }) {
  return (
    <div
      className={`p-6 rounded-lg shadow-2xl ${dark ? "bg-blue-900 text-white hover:bg-blue-700 hover:text-blue-200" : "bg-white text-gray-900 hover:text-gray-300 hover:bg-blue-900"} hover:scale-105 transition-all duration-300`}
    >
      <div
        className={`text-4xl ${dark ? "text-blue-200" : "text-blue-600"} mb-4 flex items-center justify-center`}
      >
        {icon}
      </div>
      <h3 className="text-xl mx-auto text-center font-semibold mb-2">{title}</h3>
      <p className="text-md text-center leading-relaxed">{description}</p>
    </div>
  );
}
