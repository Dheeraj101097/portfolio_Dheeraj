import React from "react";
import { useTheme } from "../context/ThemeContext";

const Certificate = () => {
  const theme = useTheme();
  return (
    <>
      <div className="flex flex-row ">
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
        {/* right */}
        <div className="grid grid-cols-2 gap-3 m-10">
          <div
            className={`relative flex w-80 flex-col rounded-xl ${theme.bg}  bg-clip-border text-gray-700 shadow-md`}
          >
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-orange-100 to-orange-200 hover:shadow-lg hover:shadow-orange-300">
              <img
                src="src/assets/certificate_1.png"
                className="p-3 rounded-md"
              />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Masterclass on Think Like a Visionary: Leveraging Generative AI
                for Strategic Growth.
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Issued by: Physics Wallah
                <br></br> Date: November 30, 2024
                <br></br>
                <a
                  className="text-blue-300 hover:text-blue-500 font-medium "
                  href="https://pwskills.com/learn/certificate/5e48d4a7-fab6-407a-9d31-7cca76c2a937/"
                >
                  View Certificate
                </a>
              </p>
            </div>
          </div>
          {/* 2 */}

          <div
            className={`relative ${theme.bg} flex w-80 flex-col rounded-xl bg-clip-border text-gray-700 shadow-md`}
          >
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-green-100 to-green-200 hover:shadow-lg hover:shadow-emerald-300">
              <img
                src="src/assets/certificate_2.png"
                className="p-3 rounded-md"
              />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Masterclass on Git and GitHub for full stack development.
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Issued by: Physics Wallah <br></br> Date: January 5, 2025
                <br></br>
                <a
                  className="text-blue-300 hover:text-blue-500 font-medium
               "
                  href="https://pwskills.com/learn/certificate/f9fb2ebd-284d-4237-9e03-2c4452bdc1ec/"
                >
                  View Certificate
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
