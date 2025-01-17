import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { IoArrowBack } from "react-icons/io5";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import cooking from "../assets/coking.jpg";
import employeeDashboard from "../assets/projects/dashboardemployee.jpg";
import speeddetector from "../assets/projects/speeddetection.png";
import ricegrain from "../assets/projects/bkg.jpg";
import weather from "../assets/projects/weather.jpg";
import smartAgri from "../assets/projects/smartfarming.jpg";
import portfolio from "../assets/projects/portfolio.jpg";
import Star from "../components/Star";
import img2 from "../assets/projects/img2.png";
import pwm from "../assets/projects/final min.png";
const Card = () => {
  const theme = useTheme();
  const projectsData = [
    {
      title: "Recipe App (AI)",
      description1:
        "A recipe search application with user authentication and API integration.",
      description2: [
        "A full-stack recipe management app with React Router for seamless navigation between recipe search, user submissions, and detailed views.",
        "Includes secure user authentication for login and registration.",
        "Leveraged Gemini API through Google Ai Studio to enable advanced recipe-related queries, providing comprehensive insights into food, such as ingredient substitutions, and preparation techniques.",
        "Allowing users to add, edit, and delete their own recipes in the database, supporting full CRUD operations.",
        "Focused on responsive design and optimized performance, ensuring a smooth user experience.",
      ],
      image: cooking,
      image2: img2,
      githubLink: "https://github.com/Dheeraj101097/khanabanao.git",
      livelink: "https://github.com/Dheeraj101097/khanabanao.git",
    },
    {
      title: "Grain Length Detection System",
      description1:
        "System developed to measure Grain Length (Image Processing Technique)",
      image: ricegrain,
      image2: img2,
      githubLink: "https://github.com/Dheeraj101097/ricelengthdetector.git",
      livelink: "",
      description2: [
        "Designed and developed a Python-based desktop application to analyze rice grain lengths and distinguish full-length grains from broken ones.",
        "Implemented image processing techniques with OpenCV like thresholding, edge detection, and contour analysis to calculate grain dimensions with high precision.",
        "Built an intuitive GUI, allowing users to upload images, view detailed statistical reports of categorized grains.",
        "Achieved over 96% accuracy in measuring grain lengths and differentiating full-length grains from broken ones, ensuring reliable quality assessment for diverse rice varieties",
      ],
    },
    {
      title: "Speed Detection System",
      description1:
        "An IoT-based project to measure and display speed using IR sensors.",
      image: speeddetector,
      image2: img2,
      githubLink: "https://github.com/Dheeraj101097/speed_detction_system.git",
      description2: [
        "Designed a speed detection system for traffic management applications capable of measuring the velocity of moving objects using IR sensors and ESP32.",
        "Implemented an API endpoint to upload sensor data via POST requests, ensuring seamless data transmission.",
        "Streamlined data flow between hardware and web interface, demonstrating efficient communication between IoT devices and backend systems.",
      ],
    },
    {
      title: "Portfolio Website",
      description1:
        "My personal portfolio website showcasing my skills and projects.",
      image: portfolio,
      image2: img2,
      githubLink: "https://github.com/Dheeraj101097/portfolio_Dheeraj.git",
      description2: "",
    },
    // {
    //   title: "Weather App",
    //   description1:
    //     "A weather forecasting app with a user-friendly UI and real-time data.",
    //   image: weather,
    //   description2: [
    //     "Designed a weather application that fetches real-time weather data from an API and displays it to users.",
    //     "Implemented features to search for weather conditions by city, providing current temperature, humidity, and weather conditions.",
    //     "Gained experience in API integration, data handling, and asynchronous JavaScript.",
    //   ],
    // },
    // {
    //   title: "Employee Management Dashboard",
    //   description1:
    //     "An IoT-based project to measure and display speed using IR sensors.",
    //   image: employeeDashboard,
    //   description2: [
    //     "Developed a full-stack dynamic employee management dashboard web application (MERN) stack.",
    //     "Implemented features like searching, sorting, pagination, and toggle functionality to activate/deactivate employees.",
    //     "Integrated user authentication for secure login and registration.",
    //     "Fetched and displayed real employee data from database(MongoDB), with various functions and update the UI in real-time.",
    //   ],
    // },
  ];

  const coreProjects = [
    {
      title: "Smart Agriculture System",
      description1:
        "A weather forecasting app with a user-friendly GUI and real-time data.",
      image: smartAgri,
      image2: img2,
      githubLink: "https://github.com/",
      description2: "",
    },
    {
      title: "Arduino Projects(PWM,ADC)",
      description1:
        "An IoT-based project to measure and display speed using IR sensors.",
      image: pwm,
      image2: pwm,
      githubLink: "https://github.com/Dheeraj101097/pwm_motor.git",
      description2: [
        "Designed a speed detection system for traffic management applications capable of measuring the velocity of moving objects using IR sensors and ESP32.",
        "Implemented an API endpoint to upload sensor data via POST requests, ensuring seamless data transmission.",
        "Streamlined data flow between hardware and web interface, demonstrating efficient communication between IoT devices and backend systems.",
      ],
    },
  ];

  const [isOpenModel, setIsOpenModel] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);

  const openModel = (project) => {
    setSelectedModel(project);
    setIsOpenModel(true);
  };

  const closeModel = () => {
    setIsOpenModel(false);
    setSelectedModel(null);
  };

  return (
    <>
      <div className="p-1 mb-2">
        {projectsData.map((project, i) => (
          <div
            key={i}
            className={`  ${theme.border} ${theme.bg} border-b-2  ${theme.text}  rounded-md p-4 shadow-md hover:shadow-xl hover:shadow-[#98f6ff80] mb-3 `}
          >
            <div className="flex  justify-between items-start">
              <button
                className="  text-[#4684ff] font-medium  rounded-md transition hover:underline 
                 underline-offset-2  "
                onClick={() => {
                  openModel(project);
                }}
              >
                <h3 className="text-lg font-medium mb-2">{project.title}</h3>
              </button>
              <Star />
            </div>
            <p className="text-sm text-gray-500 mb-4">{project.description1}</p>
          </div>
        ))}
      </div>
      {/* core iot */}
      <div className="p-1 mb-2">
        <h2 className={`text-2xl font-bold  mb-3 ${theme.text}`}>
          Core Projects (ECE)
        </h2>

        {coreProjects.map((project, i) => (
          <div
            key={i}
            className={` ${theme.border} ${theme.bg} border-b-2  ${theme.text}  rounded-md p-4 shadow-md hover:shadow-xl hover:shadow-[#99F7FF] mb-3 `}
          >
            <div className="flex  justify-between items-start ">
              <button
                className=" text-[#4684ff] font-medium  rounded-md transition hover:underline 
                 underline-offset-2"
                onClick={() => {
                  openModel(project);
                }}
              >
                <h3 className="text-lg font-medium mb-2">{project.title}</h3>
              </button>
              <Star />
            </div>
            <p className="text-sm text-gray-500 mb-4">{project.description1}</p>
          </div>
        ))}
        {/* </div> */}
      </div>
      {/* m0del */}
      {isOpenModel && (
        <div
          className="fixed inset-0 bg-[#00000040] flex justify-center items-center z-50"
          onClick={closeModel}
        >
          <div
            className={` ${theme.border} ${theme.bg} border-2  ${theme.text} rounded-lg shadow-lg p-6 max-w-4xl w-full mx-4 md:mx-6 lg:mx-8 grid md:grid-cols-3 gap-4 `}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Column: Title and Images */}
            <div className="col-span-1">
              <button
                className={` border-emerald-200 hover:border-[#ff7272]  ${theme.bg} border-2 p-[0.055rem]  ${theme.text} rounded-md transition`}
                onClick={closeModel}
              >
                <IoArrowBack />
              </button>
              <h2 className={`text-xl font-semibold ${theme.text} mb-2`}>
                {selectedModel.title}
              </h2>
              <div className="space-y-2">
                <div className="  rounded-lg overflow-hidden space-y-2">
                  <img
                    src={selectedModel.image}
                    alt={selectedModel.title}
                    className="w-full h-full object-contain  rounded-lg"
                  />
                  <img
                    src={selectedModel.image2}
                    alt={selectedModel.title}
                    className="w-full h-full object-contain  rounded-lg"
                  />
                </div>
                {selectedModel.livelink ? (
                  <button className="bg-[#fd7954] hover:  px-3 py-[0.075rem] ml-16 flex justify-center items-center align-middle gap-2 rounded-md transition">
                    <a href={selectedModel.livelink} className="text-white">
                      View Live
                    </a>
                    <LuSquareArrowOutUpRight />
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>

            {/* Right Column: Description and Button */}
            <div className="col-span-2 px-2 flex flex-col justify-between">
              <div className={`${theme.text} mt-4`}>
                <ul>
                  {selectedModel.description2.map((sentence, index) => (
                    <li className="list-disc" key={index}>
                      {sentence}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end space-x-4 mt-3">
                <button>
                  <a
                    href={selectedModel.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" bg-gradient-to-br from-[#FF006E] via-[#ff569f] to-[#ffb0d2] hover:bg-[#FF006E]  text-[#fff4f9] px-2 py-1 rounded-lg transition"
                  >
                    GitHub Link
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;

// image:
//   "https://img.freepik.com/premium-vector/young-woman-cooking-home-kitchen-lifestyle_906149-125904.jpg?semt=ais_tags_boosted",
