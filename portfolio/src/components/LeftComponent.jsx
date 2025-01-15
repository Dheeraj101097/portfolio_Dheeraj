import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { AiOutlineLike } from "react-icons/ai";
import Like from "./Like";

const LeftComponent = () => {
  const theme = useTheme();

  //
  // FFE285
  return (
    <div>
      <div
        className={`w-72 h-72 rounded-full overflow-hidden border-2 border-[#ffe386]`}
      >
        <img
          src="src/assets/Display_pic.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className={`text-2xl font-bold ${theme.text} mt-4`}>
        Dheeraj Patnaik
      </h1>
      <p className="text-gray-400">
        Full Stack Developer | IoT | Software Developer
      </p>
      <div className="flex flex-row justify-center">
        <button className="mt-4 mr-5  px-3 py-2 bg-red-400 text-white rounded-md hover:bg-opacity-90">
          <a href="https://drive.google.com/file/d/1UxJxd4Ju7NI7sReVIc19CZ_5RTX87j_7/view?usp=sharing">
            View Resume
          </a>
        </button>
        <Like />
      </div>
    </div>
  );
};

export default LeftComponent;
