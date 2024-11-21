"use client"
import { useState } from "react";

export default function FrequentlyAskedQuestions({ isDarkMode }) {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div className={`p-6 md:p-10 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <h2
        className={`text-2xl sm:text-3xl font-semibold mx-auto text-center mb-6 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Frequently Asked Questions
      </h2>

      <hr
        className={`my-4 border-t-2 w-[88%] mx-auto ${
          isDarkMode ? "border-blue-600" : "border-gray-300"
        }`}
      />

      <div className="w-full sm:w-[88%] mx-auto space-y-4">
        <div
          className={`border rounded-lg shadow-md w-full mx-auto ${
            isDarkMode ? "border-gray-700" : "border-gray-300"
          }`}
        >
          <div
            className={`p-4 cursor-pointer rounded-t-lg flex justify-between items-center ${
              isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => setIsOpen1(!isOpen1)}
          >
            <p
              className={`text-lg sm:text-xl font-semibold ${
                isDarkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Can I Customize Click Intervals With MT Auto Clicker?
            </p>
            <span className={`${isDarkMode ? "text-gray-300" : "text-gray-500"} text-xl`}>
              {isOpen1 ? "-" : "+"}
            </span>
          </div>
          {isOpen1 && (
            <div
              className={`p-4 rounded-b-lg ${
                isDarkMode ? "bg-gray-700" : "bg-gray-50"
              }`}
            >
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <span
                  className={`font-semibold ${
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Ans.
                </span>{" "}
                Absolutely! MT Auto Clicker allows you to customize click
                intervals and durations, providing flexibility for various
                tasks, whether gaming, testing, or other repetitive automating
                actions.
              </p>
            </div>
          )}
        </div>

        <div
          className={`border rounded-lg shadow-md w-full mx-auto ${
            isDarkMode ? "border-gray-700" : "border-gray-300"
          }`}
        >
          <div
            className={`p-4 cursor-pointer rounded-t-lg flex justify-between items-center ${
              isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => setIsOpen2(!isOpen2)}
          >
            <p
              className={`text-lg sm:text-xl font-semibold ${
                isDarkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Is MT Auto Clicker Safe to Use?
            </p>
            <span className={`${isDarkMode ? "text-gray-300" : "text-gray-500"} text-xl`}>
              {isOpen2 ? "-" : "+"}
            </span>
          </div>
          {isOpen2 && (
            <div
              className={`p-4 rounded-b-lg ${
                isDarkMode ? "bg-gray-700" : "bg-gray-50"
              }`}
            >
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <span
                  className={`font-semibold ${
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Ans.
                </span>{" "}
                Yes, MT Auto Clicker is safe to use. It is developed with user
                security in mind, and its functionalities are designed to
                automate clicking tasks without posing any risks to your device
                or data.
              </p>
            </div>
          )}
        </div>

        <div
          className={`border rounded-lg shadow-md w-full mx-auto ${
            isDarkMode ? "border-gray-700" : "border-gray-300"
          }`}
        >
          <div
            className={`p-4 cursor-pointer rounded-t-lg flex justify-between items-center ${
              isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => setIsOpen3(!isOpen3)}
          >
            <p
              className={`text-lg sm:text-xl font-semibold ${
                isDarkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Is MT Auto Clicker easy to use?
            </p>
            <span className={`${isDarkMode ? "text-gray-300" : "text-gray-500"} text-xl`}>
              {isOpen3 ? "-" : "+"}
            </span>
          </div>
          {isOpen3 && (
            <div
              className={`p-4 rounded-b-lg ${
                isDarkMode ? "bg-gray-700" : "bg-gray-50"
              }`}
            >
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <span
                  className={`font-semibold ${
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Ans.
                </span>{" "}
                Yes, MT Auto Clicker features a drag-and-drop interface that
                makes it accessible for all skill levels, from beginners to
                advanced users.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
