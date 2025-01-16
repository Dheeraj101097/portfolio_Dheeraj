import React from "react";
import { useTheme } from "../context/ThemeContext";
import LeftComponent from "../components/LeftComponent";

const Certificate = () => {
  const theme = useTheme();
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-start gap-8 ">
          {/* left */}
          <LeftComponent />
          {/* right */}

          <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-6 mx-6 mt-8">
            <div
              className={`relative flex w-80 flex-col rounded-2xl ${theme.bg} border-2 ${theme.border} ${theme.text} bg-clip-border shadow-md`}
            >
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-orange-100 to-orange-200 hover:shadow-lg hover:shadow-orange-300">
                <img
                  src="src/assets/certificate_1.png"
                  className="p-3 rounded-md"
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Masterclass on Think Like a Visionary: Leveraging Generative
                  AI for Strategic Growth.
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
              className={`relative ${theme.bg} ${theme.bg} border-2 ${theme.border} ${theme.text} flex w-80 flex-col rounded-2xl bg-clip-border  shadow-md`}
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
                  {/* <Star /> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
