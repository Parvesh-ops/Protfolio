import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

const internships = [
  {
    name: "Swikar Codes",
    role: "Frontend Developer",
    duration: "May 2024 - Aug 2024",
    link: "https://swikarcodes.com/",
    color: "text-blue-400"
  },
  {
    name: "Code with harry",
    role: "Frontend Developer",
    duration: "May 2025 present",
    link: "https://www.youtube.com/@CodeWithHarry",
    color: "text-red-600"
  },
  {
    name: "Chai aur code",
    role: "React Developer",
    duration: "Aug 2025 present",
    link: "https://www.youtube.com/watch?v=vz1RlUyrc3w&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige",
    color: "text-yellow-600"
  },
];

const Internship = () => {
  return (
    <div className="space-y-6">
      {internships.map((item, i) => (
        <div key={i} className="sm:flex-row sm:justify-between sm:items-center">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center text-lg md:text-xl font-medium underline group ${item.color}`}
          >
            {item.name}
            <LuArrowUpRight className="w-6 h-7 ml-1 transition-transform duration-300 group-hover:-translate-y-1" />
          </a>
          <div className="mt-1 sm:mt-0 text-sm sm:text-base">
            <p className="text-gray-700 dark:text-gray-300 font-sans">{item.role}</p>
            <span className="text-gray-500 dark:text-gray-400">{item.duration}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Internship;
