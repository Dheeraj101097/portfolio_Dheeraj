import React from "react";

const AroundText = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative group">
        {/* Main Button */}
        <button className="relative z-10 px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
          Hover Me
        </button>

        {/* Around Text Effects */}
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Top Text */}
          <span className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-blue-500 text-sm font-semibold">
            Above
          </span>

          {/* Bottom Text */}
          <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-blue-500 text-sm font-semibold">
            Below
          </span>

          {/* Left Text */}
          <span className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 text-blue-500 text-sm font-semibold">
            Left
          </span>

          {/* Right Text */}
          <span className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 text-blue-500 text-sm font-semibold">
            Right
          </span>
        </div>
      </div>
    </div>
  );
};

export default AroundText;
