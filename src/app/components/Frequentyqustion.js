"use client"
import { useState } from "react";

export default function FrequentlyAskedQuestions() {
  
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div className="p-6 md:p-10">
      
      <h2 className="text-2xl sm:text-3xl font-semibold mx-auto text-center text-black mb-6">
        Frequently Asked Questions
      </h2>

      
      <hr className="my-4 border-t-2 border-gray-300 dark:border-blue-600 w-[88%] mx-auto" />

      
      <div className="w-full sm:w-[88%] mx-auto space-y-4">

        
        <div className="border border-gray-300 rounded-lg shadow-md w-full mx-auto">
          <div 
            className="p-4 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-t-lg flex justify-between items-center"
            onClick={() => setIsOpen1(!isOpen1)}
          >
            <p className="text-lg sm:text-xl font-semibold text-gray-700">Can I Customize Click Intervals With MT Auto Clicker?</p>
            <span className="text-xl text-gray-500">{isOpen1 ? '-' : '+'}</span>
          </div>
          {isOpen1 && (
            <div className="p-4 bg-gray-50 rounded-b-lg">
              <p className="text-gray-600"><span className="font-semibold text-gray-700">Ans.</span>  Absolutely! MT Auto Clicker allows you to customize click intervals and durations, providing flexibility for various tasks, whether gaming, testing, or other repetitive automating actions.</p>
            </div>
          )}
        </div>

        
        <div className="border border-gray-300 rounded-lg shadow-md w-full mx-auto">
          <div 
            className="p-4 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-t-lg flex justify-between items-center"
            onClick={() => setIsOpen2(!isOpen2)}
          >
            <p className="text-lg sm:text-xl font-semibold text-gray-700">Is MT Auto Clicker Safe to Use?</p>
            <span className="text-xl text-gray-500">{isOpen2 ? '-' : '+'}</span>
          </div>
          {isOpen2 && (
            <div className="p-4 bg-gray-50 rounded-b-lg">
              <p className="text-gray-600"><span className="font-semibold text-gray-700">Ans.</span>  Yes, MT Auto Clicker is safe to use. It's developed with user security in mind, and its functionalities are designed to automate clicking tasks without posing any risks to your device or data.</p>
            </div>
          )}
        </div>

        
        <div className="border border-gray-300 rounded-lg shadow-md w-full mx-auto">
          <div 
            className="p-4 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-t-lg flex justify-between items-center"
            onClick={() => setIsOpen3(!isOpen3)}
          >
            <p className="text-lg sm:text-xl font-semibold text-gray-700">Is MT Auto Clicker easy to use?</p>
            <span className="text-xl text-gray-500">{isOpen3 ? '-' : '+'}</span>
          </div>
          {isOpen3 && (
            <div className="p-4 bg-gray-50 rounded-b-lg">
              <p className="text-gray-600"><span className="font-semibold text-gray-700">Ans.</span> Yes, MT Auto Clicker features a drag-and-drop interface that makes it accessible for all skill levels, from beginners to advanced users.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
