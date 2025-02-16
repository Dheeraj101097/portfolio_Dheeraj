import React from "react";
import { useTheme } from "../context/ThemeContext";
import LeftComponent from "../components/LeftComponent";
import certificate1 from "../assets/certificate_1.png";
import certificate2 from "../assets/certificate_2.png";
import certificate3 from "../assets/certificate_3.png";
import certificate4 from "../assets/certificate_4.png";

const Certificate = () => {
  const theme = useTheme();
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-start gap-8 ">
          <LeftComponent />
          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 mx-4 mt-8 ">
            <div
              className={`relative flex w-[17rem] flex-col rounded-2xl ${theme.bg} border-2 ${theme.border} ${theme.text} bg-clip-border shadow-md mt-1`}
            >
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-100 to-blue-200 hover:shadow-lg hover:shadow-blue-300">
                <img src={certificate4} className="p-3 rounded-md" />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Hacktivate 24-Hour Hackathon (Competing 100+ teams)
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Issued by: GFGAUSC
                  <br></br> Date: February 6–7, 2025
                  <br></br>
                  <a
                    className="text-blue-300 hover:text-blue-500 font-medium "
                    href="https://drive.google.com/file/d/1uVkhC4UgRpXzxdBDM_Bkq4S-FcOK-M5g/view?usp=sharing"
                  >
                    View Certificate
                  </a>
                </p>
              </div>
            </div>
            {/*  */}

            <div
              className={`relative ${theme.bg} ${theme.bg} border-2 ${theme.border} ${theme.text} flex w-[17rem] flex-col rounded-2xl bg-clip-border  shadow-md mt-1`}
            >
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-green-100 to-green-200 hover:shadow-lg hover:shadow-emerald-300">
                <img src={certificate2} className="p-3 rounded-md" />
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

            <div
              className={`relative flex w-[17rem] flex-col rounded-2xl ${theme.bg} border-2 ${theme.border} ${theme.text} bg-clip-border shadow-md mt-1`}
            >
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-orange-100 to-orange-200 hover:shadow-lg hover:shadow-orange-300">
                <img src={certificate1} className="p-3 rounded-md" />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Masterclass on Leveraging Generative AI for Strategic Growth.
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

            <div
              className={`relative w-[17rem] flex  flex-col rounded-2xl ${theme.bg} border-2 ${theme.border} ${theme.text} bg-clip-border shadow-md mt-1`}
            >
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-amber-100 to-amber-200 hover:shadow-lg hover:shadow-amber-300">
                <img src={certificate3} className="p-3 rounded-md" />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Achieved 96.47% percentile in India’s largest skill contest,
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Certificate of Merit - Naukri Campus Young Turks (2024)
                  <br></br>
                  <a
                    className="text-blue-300 hover:text-blue-500 font-medium "
                    href="https://www.naukri.com/campus/certificates/young_turks_round_1_achievement/v0/6707fcb3e3b9a668e000259e?utm_source=certificate&utm_medium=copy&utm_campaign=6707fcb3e3b9a668e000259e"
                    target="_blank"
                  >
                    View Certificate
                  </a>
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
