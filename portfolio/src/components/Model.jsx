import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import cooking from "../assets/coking.jpg";
import speeddetector from "../assets/projects/speeddetection.png";

const ProjectCardWithModal = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      title: "Recipe App",
      description: [
        "User authentication with API integration.",
        "Search recipes by ingredients or name.",
        "Mobile-friendly responsive design.",
      ],
      image: cooking,
    },
    {
      title: "Speed Detection System",
      description: [
        "IoT-based project for speed measurement.",
        "Utilizes IR sensors for accurate readings.",
        "Displays speed data on a web interface.",
      ],
      image: speeddetector,
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projectsData.map((project, i) => (
          <div key={i} className="border rounded-md p-4 shadow-md">
            <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
            <button
              onClick={() => openModal(project)}
              className="bg-sky-600 text-white font-medium px-4 py-2 rounded-md hover:bg-sky-500 transition"
            >
              View Project
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={20} />
            </button>
            {/* Project Image */}
            <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden mb-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Project Details */}
            <h3 className="text-xl font-bold mb-4">{selectedProject.title}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {selectedProject.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCardWithModal;
