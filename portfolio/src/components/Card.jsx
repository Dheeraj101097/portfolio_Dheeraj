import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { IoArrowBack } from "react-icons/io5";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import speeddetector from "../assets/projects/speeddetection.png";
import ricegrain from "../assets/projects/riceproject.jpg";
import smartAgri from "../assets/projects/smart farmimg.jpg";
import portfolio from "../assets/projects/portfolio.png";
import Star from "../components/Star";
import recipe from "../assets/projects/img2.png";
import pwm from "../assets/projects/final min.png";
const Card = () => {
  const theme = useTheme();
  const projectsData = [
    {
      title: "Recipe App (AI)",
      description1:
        " A recipe search application with authentication, API integration and AI model for better queries. Using MongoDB, Express.js, React.js, Node.js, API’s, GoogleAI Studio(Gemini API).",
      description2: [
        "A full-stack recipe management app with React Router for seamless navigation between recipe search, user submissions, and detailed views.",
        "Includes secure user authentication for login and registration.",
        "Leveraged Gemini API through Google Ai Studio to enable advanced recipe-related queries, providing comprehensive insights into food, such as ingredient substitutions, and preparation techniques.",
        "Allowing users to add, edit, and delete their own recipes in the database, supporting full CRUD operations.",
        "Focused on responsive design and optimized performance, ensuring a smooth user experience.",
      ],
      image2: recipe,
      githubLink: "https://github.com/Dheeraj101097/khanabanao.git",
      livelink: "https://khanabanaofrontendrrecipeapp.onrender.com",
    },
    {
      title: "Grain Length Detection System",
      description1:
        "System developed to measure Rice Grains Length using Image Processing Technique ( Python, PyQt5, OpenCV, Matplotlib ) ",
      image2: ricegrain,
      githubLink: "https://github.com/Dheeraj101097/ricelengthdetector.git",
      livelink:
        "https://drive.google.com/drive/folders/1aZa6BWk8eDlApqMY4yu14JApUwtXa6Xh",
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
        "An IoT-based project to measure and display speed using IR sensors in website with realtime data using  Esp32, Arduino(C++), JavaScript.",
      image2: speeddetector,
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
        "My personal portfolio website showcasing my skills and projects. Using React.Js and various UI components.",
      image2: portfolio,
      githubLink: "https://github.com/Dheeraj101097/portfolio_Dheeraj.git",
      livelink: "https://github.com/Dheeraj101097/",
      description2: [
        "My personal portfolio website designed to showcase my projects, skills, and professional journey using React.Js and Tailwind CSS.",
        "Featuring dark and light mode toggle for enhanced user customization.",
        "Used interactive and animated components to engage users and highlight project and skills sections.",
        "Ensured a seamless user experience across multiple devices using modern web technologies.",
      ],
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
        "Developed a predictive irrigation system using IoT sensors, featuring real-time data monitoring, automated pump control, crop-specific recommendations, and dynamic dashboards for efficient water management.",
      image2: smartAgri,
      githubLink: "https://github.com/Dheeraj101097",
      livelink: "https://github.com/Dheeraj101097/",
      description2: [
        "Designed and implemented a predictive irrigation system integrating Firebase Realtime Database and IoT sensors (DHT11, soil moisture) for real-time data monitoring.",
        "Developed dynamic graphical dashboards using Chart.js to visually represent sensor data, enhancing decision-making efficiency.",
        "Programmed an automated water pump control mechanism, adjusting operations based on soil moisture thresholds to ensure water conservation.",
        "Implemented crop-specific recommendations, providing temperature, rainfall, soil type, and watering guidance for optimal yield.",
        "Integrated Firebase with web technologies, ensuring seamless real-time data updates and secure storage of environmental conditions.",
        "Enhanced user experience by developing an interactive UI with dynamic crop comparison and moisture level tracking features.",
        "Optimized water usage, achieving sustainability through automated threshold-based irrigation and visualization of water usage patterns.",
      ],
    },
    {
      title: "Arduino Projects (PWM,ADC)",
      description1:
        "Microcontoller project designed in Proteus software, it controls the speed of motor based on the input from temperature sensor.",
      image2: pwm,
      githubLink: "https://github.com/Dheeraj101097/pwm_motor.git",
      description2: [
        "ADC Implementation: Developed projects utilizing Analog-to-Digital Conversion (ADC) to measure sensor data with precision, including temperature, light intensity, and voltage levels.",
        "PWM Control: Designed and implemented Pulse Width Modulation (PWM) techniques for motor speed control, LED brightness adjustment, and servo motor positioning.",
        "Interrupt-Driven Systems: Built robust embedded systems leveraging hardware and software interrupts for time-critical applications, enhancing efficiency and performance.",
        "Timer-Based Applications: Created real-time timer-based projects, such as delay generators and event schedulers, using Arduino's timer libraries and direct register-level programming.",
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
            className={`  ${theme.border} ${theme.bg} border-b-2  ${theme.text}  rounded-md p-4 shadow-md hover:shadow-xl hover:shadow-[#98f6ff90] mb-3 `}
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
            className={` ${theme.border} ${theme.bg} border-b-2  ${theme.text}  rounded-md p-4 shadow-md hover:shadow-xl hover:shadow-[#98f6ff80] mb-3 `}
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
              <div className="space-y-2 flex flex-col justify-center align-middle items-center">
                <div className="  rounded-lg overflow-hidden space-y-2">
                  <img
                    src={selectedModel.image2}
                    alt={selectedModel.title}
                    className="w-full h-full object-contain my-2  rounded-lg"
                  />
                </div>
                {selectedModel.livelink ? (
                  <button className="bg-[#25ffd3] bg-gradient-to-l from-[#25ffd3] via-[#65ffe0] to-[#cefff5]  hover:bg-[#2ec8a9]  px-3 py-[0.075rem]  flex justify-center items-center align-middle gap-2 rounded-md transition">
                    <a href={selectedModel.livelink} className="text-green-950">
                      View Live
                    </a>
                    <LuSquareArrowOutUpRight className="text-green-950" />
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
              </div>{" "}
              {/* //FF006E */}
              <div className="flex justify-end space-x-4 mt-3">
                <button className=" bg-gradient-to-br from-[#ff0051] via-[#ff566a] to-[#ffb0bd] hover:bg-[#FF006E]   text-[#fff4f9] px-2 py-1 rounded-lg transition ">
                  <a
                    href={selectedModel.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
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
