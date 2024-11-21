
export default function Differentnformation({ isDarkMode }) {
    return (
      <div className="p-6 sm:p-10">
        
        <h2
          className={`text-3xl sm:text-4xl font-semibold mx-auto text-center ${
            isDarkMode ? "text-white" : "text-gray-800"
          } mb-6`}
        >
          What makes MT Auto Clicker Different?
        </h2>
  
        <hr
          className={`my-4 border-t-2 border-gray-300 ${
            isDarkMode ? "border-blue-600" : "border-gray-300"
          } w-[88%] mx-auto`}
        />

        <p
          className={`text-sm sm:text-md ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          } p-6 sm:p-12 sm:w-[88%] mx-auto`}
        >
          Lightweight software enhances productivity without overloading devices with unnecessary strain for smooth overall performance.
          <br />
          <br />
          With customizable click intervals and durations, this tool adapts to diverse needs in work automation, gaming, testing, or daily web interactions. It prioritizes user-friendly controls, making it accessible to users of all skill levels.
          <br />
          <br />
          <br />
          Experience the difference with a tool that streamlines processes, enhances efficiency, and minimizes manual effort with multiple features. These features set it apart as the go-to choice for those seeking a seamless, hassle-free, automated task experience.
        </p>
  
        <hr
          className={`my-4 border-t-2 border-gray-300 ${
            isDarkMode ? "border-blue-600" : "border-gray-300"
          } w-[88%] mx-auto`}
        />
      </div>
    );
}

