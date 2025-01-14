import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaStar } from "react-icons/fa";
import cooking from "../assets/coking.jpg";
import employeeDashboard from "../assets/projects/dashboardemployee.jpg";
import speeddetector from "../assets/projects/speeddetection.png";
import ricegrain from "../assets/projects/bkg.jpg";
import weather from "../assets/projects/weather.jpg";
import smartAgri from "../assets/projects/smartfarming.jpg";
import portfolio from "../assets/projects/portfolio.jpg";
const Card = () => {
  const theme = useTheme();
  const projectsData = [
    {
      title: "Recipe App (AI)",
      description:
        "A recipe search application with user authentication and API integration.",
      // image:
      //   "https://img.freepik.com/premium-vector/young-woman-cooking-home-kitchen-lifestyle_906149-125904.jpg?semt=ais_tags_boosted",
      image: cooking,
    },
    {
      title: "Rice Grain Length Analysis System",
      description: "A Rice Grain Length Analysis System | real-time data.",
      image: ricegrain,
    },
    {
      title: "Speed Detection System",
      description:
        "An IoT-based project to measure and display speed using IR sensors.",
      image: speeddetector,
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio website showcasing my skills and projects.",
      image: portfolio,
    },
    {
      title: "Weather App",
      description:
        "A weather forecasting app with a user-friendly GUI and real-time data.",
      image: weather,
    },
    {
      title: "Employee Management Dashboard",
      description:
        "An IoT-based project to measure and display speed using IR sensors.",
      image: employeeDashboard,
    },
  ];

  const coreProjects = [
    {
      title: "Smart Agriculture System",
      description:
        "A weather forecasting app with a user-friendly GUI and real-time data.",
      image: smartAgri,
    },
    {
      title: "Speed Detection System",
      description:
        "An IoT-based project to measure and display speed using IR sensors.",
      image: speeddetector,
    },
  ];

  return (
    <>
      <div className="p-4">
        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projectsData.map((project, i) => (
            <div
              key={i}
              className={`border ${theme.border} rounded-md p-4 shadow-md`}
            >
              {/* Project Image */}
              <div className="w-full h-48 bg-sky-300 rounded-lg overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Project Title and Description */}
              <div>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
              </div>
              {/* Action Buttons */}
              <div className="flex justify-between">
                <button className="bg-sky-600 text-white font-medium px-4 py-2 rounded-md hover:bg-sky-500 transition">
                  View Project
                </button>
                <button
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md ${theme.border} ${theme.text}`}
                >
                  <FaStar className={theme.text} />
                  <span>Like</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* core iot */}
      <div className="p-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Core Projects (ECE)
        </h2>
        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {coreProjects.map((project, i) => (
            <div
              key={i}
              className={`border ${theme.border} rounded-md p-4 shadow-md`}
            >
              {/* Project Image */}
              <div className="w-full h-48 bg-sky-300 rounded-lg overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Project Title and Description */}
              <div>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
              </div>
              {/* Action Buttons */}
              <div className="flex justify-between">
                <button className="bg-sky-400 text-white font-medium px-4 py-2 rounded-md hover:bg-sky-500 transition">
                  View Project
                </button>
                <button
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md ${theme.border} ${theme.text}`}
                >
                  <FaStar className={theme.text} />
                  <span>Like</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;

// return (
//   <>
//     {projectsData.map((project, i) => (
//       <div className="grid grid-cols-2 gap-2">
//         <div className={`border ${theme.border} rounded-md p-6`}>
//           <div className="flex justify-between items-start"></div>
//           <div
//             className={`w-fit h-fit  rounded-3xl ${theme.text} p-4 flex flex-col items-start justify-center gap-3 hover: hover:shadow-2xl hover:shadow-sky-400 transition-shadow`}
//           >
//             <div className="w-full h-fit bg-sky-300 rounded-2xl">
//               <img src={project.image} alt={project.title}></img>
//             </div>
//             <div className>
//               <p className="font-extrabold">{project.title}</p>
//               <p className>{project.description}</p>
//             </div>
//             <div className="flex flex-row">
//               <button className="bg-sky-600 font-medium p-2  rounded-xl hover:bg-sky-500 transition-colors">
//                 View Project
//               </button>
//               <button
//                 className={`flex items-center space-x-1 px-1 py-1 mx-1 ${theme.border}  rounded-md ${theme.text}`}
//               >
//                 <FaStar className={theme.text} />
//                 <span>Like</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     ))}
//   </>
// )
