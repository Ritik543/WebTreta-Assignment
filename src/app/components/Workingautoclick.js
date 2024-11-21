import { MdFlashOn } from "react-icons/md"; 

export default function Workingautoclick({ isDarkMode }) {
  return (
    <>
      <div className="p-10">
        <h2
          className={`text-3xl font-semibold mx-auto text-center mb-3 transform transition-all duration-500 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          How Does MT Auto Clicker Work?
        </h2>

        <hr
          className={`my-4 border-t-2 border-gray-300 transition-all duration-500 ${
            isDarkMode ? "border-blue-600" : "border-gray-300"
          } w-[88%] mx-auto`}
        />
      </div>

      <div className="space-y-8 w-full md:mx-16 mx-auto px-4 lg:px-10">
        <div className="flex items-center mb-4 w-full mx-auto">
          <p
            className={`text-[1rem] transition-all duration-500 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            MT Auto Clicker makes automating repetitive tasks simple through customizable feature sets. Here's a quick rundown:
          </p>
        </div>

        {[{
            title: "Define Automation Workflows",
            description:
              "Easily record multi-step automation sequences with varying actions, data entry, zooming, etc.",
          },
          {
            title: "Customize Playback Settings",
            description:
              "Configure intervals, repeated cycles, speeds, and more to control automation execution per your needs.",
          },
          {
            title: "Accurate Hands-free Operation",
            description:
              "Reliably performs the defined automated workflows in the background without manual intervention.",
          },
          {
            title: "Use Shortcuts for Quick Access",
            description:
              "Set keyboard hotkeys to trigger predefined task routines for instant one-shot activation.",
          },
          {
            title: "Seamless Application Integration",
            description:
              "Plugs into apps, sites, games, and programs to remove repetitive work across digital experiences.",
          },
          {
            title: "Accessible to All Skill Levels",
            description:
              "Intuitive drag-and-drop workflow designer enables basic and advanced custom automation sequences.",
          },
          {
            title: "Resource Optimized",
            description:
              "Lightweight software enhances productivity without overloading the device with strain for overall performance.",
          },
        ].map(({ title, description }, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 w-full mx-auto flex-wrap lg:flex-nowrap hover:scale-105 transition-all duration-500"
          >
            <div className="flex items-center space-x-2">
              <MdFlashOn
                size={28}
                className="text-yellow-500 transform transition-all duration-300 hover:rotate-12"
              />
              <h3
                className={`text-lg font-semibold mt-1 transition-all duration-500 ${
                  isDarkMode ? "text-white" : "text-black"
                } text-sm sm:text-base lg:text-lg`}
              >
                {title}:
              </h3>
            </div>
            <p
              className={`text-[1rem] w-full lg:w-1/2 mt-1 transition-all duration-500 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {description}
            </p>
          </div>
        ))}

        <div className="flex items-center mt-4 w-full mx-auto">
          <p
            className={`text-[1rem] transition-all duration-500 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Get started with task automation now and reclaim hours lost in tedious, repetitive work!
          </p>
        </div>
      </div>
    </>
  );
}
