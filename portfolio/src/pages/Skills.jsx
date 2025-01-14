import LeftComponent from "../components/LeftComponent";
import { useTheme } from "../context/ThemeContext";
import javascripticon from "../assets/skills/javascript.png";
import js from "../assets/skills/js.png";
import react3 from "../assets/skills/react3.png";
import api from "../assets/skills/api.png";
import react from "../assets/skills/react.png";
import arduino from "../assets/skills/arduino.png";
import css from "../assets/skills/css.png";
import bootstrap from "../assets/skills/bootstarp.png";
import python from "../assets/skills/python.png";
import cpp from "../assets/skills/c++.png";
import html from "../assets/skills/html.png";
import node from "../assets/skills/node.png";
import npm from "../assets/skills/npm.png";
import mongodb from "../assets/skills/mongodb.png";
import firebase from "../assets/skills/firebase.png";
import mysql from "../assets/skills/mysql.png";
// import rest from "../assets/skills/rest.png";
import websocket from "../assets/skills/websocket.gif";
import openai from "../assets/skills/openai.png";
// import ai from "../assets/skills/ai.png";
import git from "../assets/skills/git.png";
import github from "../assets/skills/github.png";
import vscode from "../assets/skills/vscode2.png";
import postman from "../assets/skills/postman.png";
import tailwind from "../assets/skills/tailwindcss.png";
import materialui from "../assets/skills/maiterialui.png";
import shadcn from "../assets/skills/shadcn.png";
import esp32 from "../assets/skills/esp32.png";
import iot from "../assets/skills/iot.png";
import expjs from "../assets/skills/expjs.png";
import postmanicon from "../assets/skills/postman-icon.svg";
// import controlsystems from "../assets/controlsystems.png";
// import digitallogic from "../assets/digitallogic.png";
// import microcontrollers from "../assets/microcontrollers.png";

export default function Skills() {
  const theme = useTheme();
  const skillsData = [
    {
      category: "Languages",
      items: [
        {
          name: "Javascript",
          icon: js,
        },
        {
          name: "Python",
          icon: python,
        },
        {
          name: "C++",
          icon: cpp,
        },
      ],
    },
    {
      category: "Frontend",
      items: [
        {
          name: "HTML",
          icon: html,
        },
        {
          name: "CSS",
          icon: css,
        },
        {
          name: "JavaScript",
          icon: javascripticon,
        },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          name: "MongoDB",
          icon: "https://img.icons8.com/?size=96&id=bosfpvRzNOG8&format=png",
        },

        {
          name: "Express.js",
          icon: expjs,
        },

        {
          name: "Node.js",
          icon: node,
        },
        {
          name: "npm",
          icon: npm,
        },
      ],
    },
    {
      category: "Frameworks",
      items: [
        {
          name: "Reactjs",
          icon: react3,
        },
        {
          name: "Bootstrap",
          icon: bootstrap,
        },
        {
          name: "Material UI",
          icon: materialui,
        },
        {
          name: "Tailwind CSS",
          icon: tailwind,
        },
        {
          name: "shadcn",
          icon: shadcn,
        },
      ],
    },
    {
      category: "Database",
      items: [
        {
          name: "MongoDB",
          icon: mongodb,
        },
        {
          name: "MySQL",
          icon: mysql,
        },
        {
          name: "Firebase",
          icon: firebase,
        },
      ],
    },

    {
      category: "System Integration",
      items: [
        {
          name: "REST APIs",
          icon: "rest",
        },
        {
          name: "WebSockets",
          icon: websocket,
        },
        {
          name: "OpenAI",
          icon: openai,
        },
        {
          name: "AI",
          icon: "ai",
        },
      ],
    },

    {
      category: "Tools",
      items: [
        {
          name: "Git",
          icon: git,
        },
        {
          name: "Github",
          icon: github,
        },
        {
          name: "VS Code",
          icon: vscode,
        },
        {
          name: "Postman",
          icon: postmanicon,
        },
      ],
    },
    {
      category: "Electronics",
      items: [
        {
          name: "Arduino",
          icon: arduino,
        },
        {
          name: "ESP32",
          icon: esp32,
        },
        {
          name: "IoT",
          icon: iot,
        },
      ],
    },
    {
      category: "Coursework",
      items: [
        {
          name: "Control Systems",
          icon: "https://example.com/icons/controlsystems.png",
        },
        {
          name: "Digital Logic Design",
          icon: "https://example.com/icons/digitallogic.png",
        },
        {
          name: "Microprocessors and Microcontrollers",
          icon: "https://example.com/icons/microcontrollers.png",
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row items-start ">
        <LeftComponent />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <h2 className={`text-2xl font-bold ${theme.text} mb-4`}>Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skills, index) => (
              <div
                key={index}
                className={`border ${theme.border} rounded-md p-3 `}
              >
                <h3 className={`text-xl font-semibold ${theme.text} mb-2`}>
                  {skills.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.items.map((skill, index) => (
                    <span
                      key={index}
                      className={`pl-2 py-1  rounded-full text-sm ${theme.text}`}
                    >
                      {/*  ${
                          theme.isDark? "bg-github-border-dark" : "bg-gray-100"
                        } */}
                      <img
                        className="h-10 w-10 hover:drop-shadow-lg hover:scale-125"
                        src={skill.icon}
                      />
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

//  {
//    ["Database", "System Integration", "Electronics", "Coursework"].map(
//      (category) => (
//        <div key={category} className={`border ${theme.border} rounded-md p-6`}>
//          <h3 className={`text-xl font-semibold ${theme.text} mb-4`}>
//            {category}
//          </h3>
//          <div className="flex flex-wrap gap-2">
//            {Array(5)
//              .fill(0)
//              .map((_, i) => (
//                <span
//                  key={i}
//                  className={`px-3 py-1 rounded-full text-sm ${theme.text}`}
//                >
//                  {/*  ${
//                           theme.isDark ? "bg-github-border-dark" : "bg-gray-100"
//                         } */}
//                  <img src="#"></img>
//                </span>
//              ))}
//          </div>
//        </div>
//      )
//    );
//  }
