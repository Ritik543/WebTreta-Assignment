export default function Herosection({ isDarkMode }) {
    return (
      <div
        className={`p-4 sm:p-6 md:p-10 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <h2
          className={`text-3xl sm:text-4xl font-semibold mx-auto text-center mb-6 ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          What is MT Auto Clicker?
        </h2>
  
        <hr
          className={`my-4 border-t-2 w-[95%] sm:w-[88%] mx-auto ${
            isDarkMode ? "border-blue-600" : "border-gray-300"
          }`}
        />
  
        <p
          className={`text-sm sm:text-md p-6 sm:p-12 sm:w-[90%] mx-auto ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          MT Auto Clicker is your go-to tool for automating repetitive tasks on
          your computer or mobile devices. With features like auto-clicking,
          scrolling, swiping, and form-filling, this software is designed to make
          your life easier.
          <br />
          <br />
          Whether you need to click multiple times, navigate through content
          effortlessly, or streamline your data entry, this Auto Clicker is there
          for you. It's the perfect companion for anyone looking to boost their
          productivity and save time in their daily digital activities.
        </p>
      </div>
    );
  }
  
