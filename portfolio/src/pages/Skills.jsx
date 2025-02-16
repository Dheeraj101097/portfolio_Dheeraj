import { useState } from "react";
import LeftComponent from "../components/LeftComponent";
import { useTheme } from "../context/ThemeContext";
import javascripticon from "../assets/skills/javascript.png";
import js from "../assets/skills/js.png";
import react3 from "../assets/skills/react3.png";
import arduino from "../assets/skills/arduino.png";
import css from "../assets/skills/css.png";
import bootstrap from "../assets/skills/bootstarp.png";
import python from "../assets/skills/python.png";
import cpp from "../assets/skills/c++.png";
import html from "../assets/skills/html.png";
import node from "../assets/skills/node.png";
import mongodb from "../assets/skills/mongodb.png";
import firebase from "../assets/skills/firebase.png";
import mysql from "../assets/skills/mysql.png";
import socket from "../assets/skills/Socket.io.png";
import openai from "../assets/skills/openai.png";
import ai from "../assets/skills/ai.png";
import git from "../assets/skills/git.png";
import github from "../assets/skills/github.png";
import vscode from "../assets/skills/vscode2.png";
import tailwind from "../assets/skills/tailwindcss.png";
import materialui from "../assets/skills/maiterialui.png";
import shadcn from "../assets/skills/shadcn.png";
import esp32 from "../assets/skills/esp32.png";
import iot from "../assets/skills/iot.png";
import expjs from "../assets/skills/expjs.png";
import postmanicon from "../assets/skills/postman-icon.svg";
import photoshop from "../assets/skills/photoshop1.png";
import prempro from "../assets/skills/prempro.png";
import canva from "../assets/skills/canva.png";
import gemini from "../assets/skills/gemini.png";
import controlsystems from "../assets/skills/electronics1.png";
import digitallogic from "../assets/skills/electronics2.png";

export default function Skills() {
  const theme = useTheme();
  const skillsData = [
    {
      category: "Languages",
      items: [
        {
          name: "Javascript",
          icon: js,
          color: "rgb(255,17,0)",
        },
        {
          name: "Python",
          icon: python,
          color: "rgb(255,215,0)",
        },
        {
          name: "C++",
          icon: cpp,
          color: "rgb(255,215,0)",
        },
      ],
    },
    {
      category: "Frontend",
      items: [
        {
          name: "HTML",
          icon: html,
          color: "rgb(255,17,0)",
        },
        {
          name: "CSS",
          icon: css,
          color: "rgb(255,17,0)",
        },
        {
          name: "JavaScript",
          icon: javascripticon,
          color: "rgb(255,17,0)",
        },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          name: "MongoDB",
          icon: mongodb,
          color: "rgb(255,17,0)",
        },

        {
          name: "Express.js",
          icon: expjs,
          color: "rgb(255,17,0)",
        },
        {
          name: "Node.js",
          icon: node,
          color: "rgb(255,17,0)",
        },
        // {
        //   name: "npm",
        //   icon: npm,
        // },
      ],
    },
    {
      category: "Frameworks",
      items: [
        {
          name: "Reactjs",
          icon: react3,
          color: "rgb(255,17,0)",
        },
        {
          name: "Bootstrap",
          icon: bootstrap,
          color: "rgb(255,17,0)",
        },
        {
          name: "Material UI",
          icon: materialui,
          color: "rgb(255,17,0)",
        },
        {
          name: "Tailwind CSS",
          icon: tailwind,
          color: "rgb(255,17,0)",
        },
        {
          name: "shadcn",
          icon: shadcn,
          color: "rgb(255,17,0)",
        },
      ],
    },
    {
      category: "Database",
      items: [
        {
          name: "MongoDB",
          icon: mongodb,
          color: "rgb(255,17,0)",
        },
        {
          name: "MySQL",
          icon: mysql,
          color: "rgb(255,17,0)",
        },
        {
          name: "Firebase",
          icon: firebase,
          color: "rgb(255,17,0)",
        },
      ],
    },

    {
      category: "Tools",
      items: [
        {
          name: "Git",
          icon: git,
          color: "rgb(255,17,0)",
        },
        {
          name: "Github",
          icon: github,
          color: "rgb(255,17,0)",
        },
        {
          name: "VS Code",
          icon: vscode,
          color: "rgb(255,17,0)",
        },
        {
          name: "Postman",
          icon: postmanicon,
          color: "rgb(255,17,0)",
        },
      ],
    },
    {
      category: "System Integration",
      items: [
        {
          name: "Socketio",
          icon: socket,
          color: "rgb(255,17,0)",
        },
        {
          name: "OpenAI",
          icon: openai,
          color: "rgb(255,17,0)",
        },
        {
          name: "REST APIs",
          icon: gemini,
          color: "rgb(255,17,0)",
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
          icon: controlsystems,
        },
        {
          name: "Digital Logic Design",
          icon: digitallogic,
        },
        {
          name: "ai",
          icon: ai,
        },
      ],
    },
    {
      category: "Graphic Design",
      items: [
        {
          name: "Photoshop",
          icon: photoshop,
        },
        {
          name: "Premiere Pro",
          icon: prempro,
        },
        {
          name: "Canva",
          icon: canva,
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
                className={` ${theme.border} ${theme.bg} border-2  ${theme.text}  rounded-md p-3 `}
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
                      {/*  */}
                      <img
                        className={`h-14 w-14 hover:scale-125 transition-transform  duration-300 ease-in-out filter hover:drop-shadow-[0_6px_5px_rgba(255,217,0,0.6)] `}
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
