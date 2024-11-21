"use client";

export default function InfoBox({ isDarkMode }) {
  return (
    <div className={`p-10 flex flex-col gap-20 ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      
      <div className="w-[88%] mx-auto">
        <div
          className={`rounded-lg shadow-md p-6 text-center ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
          }`}
        >
          <h3
            className={`text-[1.5rem] font-[700] mb-3 ${
              isDarkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Disclaimer
          </h3>
          <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} text-left`}>
            MT Auto Clicker is intended for legitimate use only. Users are solely responsible for
            their actions and must comply with applicable laws. By using our Auto Clicker, you
            agree to these terms.
          </p>
        </div>
      </div>

      
      <div className="w-[88%] mx-auto">
        <div
          className={`rounded-lg shadow-md p-6 text-center ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
          }`}
        >
          <h3
            className={`text-[1.5rem] font-[700] mb-3 ${
              isDarkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Trademark Disclaimer
          </h3>
          <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} text-left`}>
            All trademarks, logos, and brand names mentioned or displayed on the MT Auto Clicker
            website, software, apps, and extensions are the sole property of{" "}
            <a
              href="https://www.webtreta.com/"
              className={`no-underline px-2 ${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              }`}
            >
              Web Treta
            </a>
            . Using these trademarks, logos, and brand names does not imply endorsement or
            affiliation with any other entity.
          </p>
        </div>
      </div>
    </div>
  );
}
