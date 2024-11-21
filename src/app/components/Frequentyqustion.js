"use client";
import { useState } from "react";

export default function FrequentlyAskedQuestions({ isDarkMode }) {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div
      className={`p-6 md:p-10 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
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
        {[{
          question: "Can I Customize Click Intervals With MT Auto Clicker?",
          answer:
            "Absolutely! MT Auto Clicker allows you to customize click intervals and durations, providing flexibility for various tasks, whether gaming, testing, or other repetitive automating actions.",
          isOpen: isOpen1,
          toggle: () => setIsOpen1(!isOpen1)
        }, {
          question: "Is MT Auto Clicker Safe to Use?",
          answer:
            "Yes, MT Auto Clicker is safe to use. It is developed with user security in mind, and its functionalities are designed to automate clicking tasks without posing any risks to your device or data.",
          isOpen: isOpen2,
          toggle: () => setIsOpen2(!isOpen2)
        }, {
          question: "Is MT Auto Clicker Easy to Use?",
          answer:
            "Yes, MT Auto Clicker features a drag-and-drop interface that makes it accessible for all skill levels, from beginners to advanced users.",
          isOpen: isOpen3,
          toggle: () => setIsOpen3(!isOpen3)
        }].map(({ question, answer, isOpen, toggle }, index) => (
          <div
            key={index}
            className={`border rounded-lg shadow-md transition-transform transform hover:scale-105 ${
              isDarkMode ? "border-gray-700" : "border-gray-300"
            }`}
          >
            <div
              className={`p-4 cursor-pointer rounded-t-lg flex justify-between items-center ${
                isDarkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-100 hover:bg-gray-200"
              } transition-all ease-in-out duration-300`}
              onClick={toggle}
            >
              <p
                className={`text-lg sm:text-xl font-semibold ${
                  isDarkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                {question}
              </p>
              <span
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-500"
                } text-xl transition-all`}
              >
                {isOpen ? "-" : "+"}
              </span>
            </div>
            {isOpen && (
              <div
                className={`p-4 rounded-b-lg transition-all ease-in-out duration-300 ${
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
                  {answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

