import React from "react";
import LeftComponent from "../components/LeftComponent";
import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      organization: "GFG Student Chapter",
      position: "Senior Executive",
      startDate: "Aug. 2024",
      endDate: "Present",
      responsibilities: [
        "Led the design and development of a full-stack website to enhance the GFG club’s online presence.",
        "Organized and conducted workshops on programming and problem-solving, benefiting a wide range of students.",
      ],
    },
    {
      id: 2,
      organization: "Google Developer Groups(GDG)",
      position: "Executive",
      startDate: "Aug. 2024",
      endDate: "Present",
      responsibilities: [
        "Actively participated in competitive programming contests and technical workshops to foster developer skills.",
        "Contributed to collaborative learning sessions, helping peers explore advanced programming concepts.",
      ],
    },
    {
      id: 3,
      organization: "Silicon IoT GGV",
      position: "Team Lead",
      startDate: "Sept. 2024",
      endDate: "Present",
      responsibilities: [
        "Led IoT applications-Weather Station and Speed Detection System (ESP32).",
        "Demonstrated strong expertise in microcontroller (ATmega328P) programming, hardware integration, and IoT system design.",
      ],
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <LeftComponent />

        <ExperienceCard elem={experienceData} />
      </div>
    </div>
  );
};

export default Experience;
