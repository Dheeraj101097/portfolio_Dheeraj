import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaStar } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import cooking from "../assets/coking.jpg";
import employeeDashboard from "../assets/projects/dashboardemployee.jpg";
import speeddetector from "../assets/projects/speeddetection.png";
import ricegrain from "../assets/projects/bkg.jpg";
import weather from "../assets/projects/weather.jpg";
import smartAgri from "../assets/projects/smartfarming.jpg";
import portfolio from "../assets/projects/portfolio.jpg";
import Star from "../components/Star";
import img2 from "../assets/projects/img2.png";
const Card = () => {
  const theme = useTheme();
  const projectsData = [
    {
      title: "Recipe App (AI)",
      description1:
        "A recipe search application with user authentication and API integration.",
      // image:
      //   "https://img.freepik.com/premium-vector/young-woman-cooking-home-kitchen-lifestyle_906149-125904.jpg?semt=ais_tags_boosted",
      description2:
        "A full-stack recipe management app with React Router for seamless navigation between recipe search, user submissions, and detailed views. Includes secure user authentication for login and registration.Leveraged Google AI through Google Ai Studio to enable advanced recipe-related queries, providing comprehensive insights into food, such as ingredient substitutions, and preparation techniques.Allowing users to add, edit, and delete their own recipes in the database, supporting full CRUD operations.Focused on responsive design and optimized performance, ensuring a smooth user experience.",
      image: cooking,
      image2: img2,
    },
    {
      title: "Grain Length Detection System",
      description1: "Rice Grain Length detector",
      image: ricegrain,
      description2:
        "Designed and developed a Python-based desktop application to analyze rice grain lengths and distinguish full-length grains from broken ones.Implemented image processing techniques with OpenCV like thresholding, edge detection, and contour analysis to calculate grain dimensions with high precision.Built an intuitive GUI, allowing users to upload images, view detailed statistical reports of categorized grains.Achieved over 96% accuracy in measuring grain lengths and differentiating full-length grains from broken ones, ensuring reliable quality assessment for diverse rice varieties",
    },
    {
      title: "Speed Detection System",
      description1:
        "An IoT-based project to measure and display speed using IR sensors.",
      image: speeddetector,
      description2:
        "Designed a speed detection system for traffic management applications capable of measuring the velocity of moving objects using IR sensors and ESP32.Implemented an API endpoint to upload sensor data via POST requests, ensuring seamless data transmission.Streamlined data flow between hardware and web interface, demonstrating efficient communication between IoT devices and backend systems.",
    },
    {
      title: "Portfolio Website",
      description1:
        "My personal portfolio website showcasing my skills and projects.",
      image: portfolio,
      description2: "",
    },
    {
      title: "Weather App",
      description1:
        "A weather forecasting app with a user-friendly UI and real-time data.",
      image: weather,
      description2:
        "Designed a weather application that fetches real-time weather data from an API and displays it to users.Implemented features to search for weather conditions by city, providing current temperature, humidity, and weather conditions.Gained experience in API integration, data handling, and asynchronous JavaScript.",
    },
    {
      title: "Employee Management Dashboard",
      description1:
        "An IoT-based project to measure and display speed using IR sensors.",
      image: employeeDashboard,
      description2:
        "Built a dynamic employee management dashboard using the MERN stack.Implemented features like searching, sorting, pagination, and toggle functionality to activate/deactivate employees.Fetched and displayed real employee data from database(MongoDB), with various functions and update the UI in real-time.",
    },
  ];

  const coreProjects = [
    {
      title: "Smart Agriculture System",
      description1:
        "A weather forecasting app with a user-friendly GUI and real-time data.",
      image: smartAgri,
      description2: "",
    },
    {
      title: "Speed Detection System",
      description1:
        "An IoT-based project to measure and display speed using IR sensors.",
      image: speeddetector,
      description2:
        "* Designed a speed detection system for traffic management applications capable of measuring the velocity of moving objects using IR sensors and ESP32.Implemented an API endpoint to upload sensor data via POST requests, ensuring seamless data transmission.Streamlined data flow between hardware and web interface, demonstrating efficient communication between IoT devices and backend systems.",
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
      <div className="p-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 ">
          {projectsData.map((project, i) => (
            <div
              key={i}
              className={` ${theme.border} ${theme.bg} border-2  ${theme.text}  rounded-md p-4 mx-4 shadow-md hover:shadow-xl hover:shadow-[#98f6ff80] mb-2 `}
            >
              {/* #99F7FF */}
              <div className="w-full h-48 bg-sky-200 rounded-lg overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description1}
                </p>
              </div>
              <div className="  flex  justify-between ">
                <button
                  className=" bg-gradient-to-br from-[#38FAC6] via-[#96ffe3]  to-[#d2fff3] hover:bg-[#30d4a8] text-[#000000] font-medium px-4 py-2 rounded-md transition"
                  onClick={() => {
                    openModel(project);
                  }}
                >
                  View Project
                </button>
                <Star />
              </div>
            </div>
          ))}
        </div>
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
                  className={`${theme.border} ${theme.bg} border-2  ${theme.text}  rounded-md transition`}
                  onClick={closeModel}
                >
                  <IoArrowBack />
                </button>
                <h2 className={`text-xl font-semibold ${theme.text} mb-2`}>
                  {selectedModel.title}
                </h2>
                <div className="space-y-4">
                  <div className="w-full h-56 bg-sky-200 rounded-lg overflow-hidden">
                    <img
                      src={selectedModel.image2}
                      alt={`${selectedModel.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Description and Button bg-[#38FAC6] */}
              <div className="col-span-2 px-8 flex flex-col justify-between">
                <p className={`${theme.text} mt-9`}>
                  {selectedModel.description2}
                </p>
                <div className="flex justify-end space-x-4 mt-5">
                  <a
                    href={selectedModel.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" bg-gradient-to-tr from-[#38FAC6]  to-[#d2fff3] hover:bg-[#30d4a8] text-[#000000] px-4 py-2 rounded-md transition"
                  >
                    View on GitHub
                  </a>
                  {selectedModel.livelink ? (
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md transition">
                      <a className="text-sky-500">Live Link</a>
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/*  */}
      {/* core iot */}
      <div className="p-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Core Projects (ECE)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {coreProjects.map((project, i) => (
            <div
              key={i}
              className={` ${theme.border} ${theme.bg} border-2  ${theme.text}  rounded-md p-4 mx-8 shadow-md hover:shadow-xl hover:shadow-[#99F7FF]`}
            >
              <div className="w-full h-48 bg-sky-300 rounded-lg overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description1}
                </p>
              </div>
              <div className="flex justify-between">
                <button
                  className="bg-[#FF4797] hover:bg-[#FF006E] text-[#ffeaf3] font-medium px-4  py-2 rounded-md  transition"
                  onClick={() => {
                    openModel(project);
                  }}
                >
                  View Project
                </button>
                <Star />
              </div>
            </div>
          ))}
        </div>
      </div>
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
                className={`${theme.border} ${theme.bg} border-2  ${theme.text}  rounded-md transition`}
                onClick={closeModel}
              >
                <IoArrowBack />
              </button>
              <h2 className={`text-xl font-semibold ${theme.text} mb-2`}>
                {selectedModel.title}
              </h2>
              <div className="space-y-4">
                <div className="w-full h-56 bg-sky-200 rounded-lg overflow-hidden">
                  <img
                    src={selectedModel.image2 || selectedModel.image}
                    alt={selectedModel.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Description and Button */}
            <div className="col-span-2 px-8 flex flex-col justify-between">
              <p className={`${theme.text} mt-9`}>
                {selectedModel.description2}
              </p>
              <div className="flex justify-end space-x-4 mt-5">
                <a
                  href={selectedModel.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF4797] hover:bg-[#FF006E] text-[#ffeaf3] px-3 py-1 rounded-lg transition"
                >
                  GitHub Link
                </a>
                {selectedModel.livelink ? (
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md transition">
                    <a className="text-sky-500">Live Link</a>
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
