import React from "react";
import { useTheme } from "../context/ThemeContext";

const LeftComponent = () => {
  const theme = useTheme();
  return (
    <div>
      <div className="md:w-1/4">
        <div
          className={`w-48 h-48 rounded-full overflow-hidden border-4 ${theme.border}`}
        >
          <img
            src="src/assets/Display_pic.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className={`text-2xl font-bold ${theme.text} mt-4`}>Your Name</h1>
        <p className="text-gray-400">Full Stack Developer</p>
        <button className="mt-4 w-full px-4 py-2 bg-github-btn text-white rounded-md hover:bg-opacity-90">
          Follow
        </button>
      </div>
    </div>
  );
};

export default LeftComponent;
