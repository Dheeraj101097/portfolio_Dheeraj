import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { AiOutlineLike } from "react-icons/ai";
import Like from "./Like";
// import profile from "../assets/Display_pic.jpg";
import profile from "../assets/vizagdp.jpg";

const LeftComponent = () => {
  const theme = useTheme();

  //
  // FFE285
  return (
    <div className="mb-12 ">
      <div
        className={`w-72 h-72 rounded-full overflow-hidden border-2 border-[#ffe386]`}
      >
        <img
          src={profile}
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
        <button class="relative mt-4 mr-5  inline-flex  active:scale-95 transistion overflow-hidden rounded-lg p-[2px] focus:outline-none">
          <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff0aad_0%,#fa89c4_50%,#ac35ff_100%)]"></span>

          <span
            class={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg ${theme.bg} ${theme.text} px-3  text-sm font-medium backdrop-blur-3xl gap-2 undefined`}
          >
            <a
              href="https://drive.google.com/file/d/164QAOlkOXcjeQuoR_ljMnh5I2UwXcaF4/view?usp=sharing"
              target="_blank"
            >
              View Resume
            </a>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
            </svg>
          </span>
        </button>
        <Like />
      </div>
    </div>
  );
};

export default LeftComponent;

// #ff5722
// ac35ff bd5fff   30 span elemnt
// pink 50% f472b6
// e7029a 0%
