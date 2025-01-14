import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { AiOutlineLike } from "react-icons/ai";

const LeftComponent = () => {
  const theme = useTheme();
  const [count, setCount] = useState(10);

  useEffect(() => {
    const savedCount = localStorage.getItem("Likecount");
    if (savedCount) {
      setCount(Number(savedCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Likecount", count);
  }, [count]);

  const handleClick = () => {
    setCount((prevcount) => prevcount + 1);
  };

  return (
    <div>
      <div>
        <div
          className={`w-72 h-72 rounded-full overflow-hidden border-4 border-[#FFE285]`}
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
        <button className="mt-4  px-4 py-2 bg-red-400 text-white rounded-md hover:bg-opacity-90">
          <a href="https://drive.google.com/file/d/1UxJxd4Ju7NI7sReVIc19CZ_5RTX87j_7/view?usp=sharing">
            View Resume
          </a>
        </button>
        <button
          onClick={handleClick}
          className="mt-4 ml-4  px-4 py-2 bg-slate-800  text-white rounded-md hover:bg-opacity-90"
        >
          <AiOutlineLike />
        </button>
        <div>{count}</div>
      </div>
    </div>
  );
};

export default LeftComponent;
