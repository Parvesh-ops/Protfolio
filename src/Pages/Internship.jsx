import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { motion } from "framer-motion";

const resources = [
  {
    name: "Swikar Codes",
    type: "Learning Platform",
    focus: "Frontend Development",
    link: "https://swikarcodes.com/",
    color: "text-blue-400"
  },
  {
    name: "Code With Harry",
    type: "YouTube Channel",
    focus: "Frontend Development",
    link: "https://www.youtube.com/@CodeWithHarry",
    color: "text-red-600"
  },
  {
    name: "Chai aur Code",
    type: "YouTube Channel",
    focus: "React & JavaScript",
    link: "https://www.youtube.com/watch?v=vz1RlUyrc3w&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige",
    color: "text-yellow-600"
  },
];

const LearningResources = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          viewport={{ once: true }}
          className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 
                     bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl 
                     transition-all duration-300 group cursor-pointer"
        >
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl font-semibold underline flex items-center ${item.color}`}
          >
            {item.name}
            <LuArrowUpRight className="w-6 h-6 ml-1 transition-transform duration-300 group-hover:-translate-y-1" />
          </a>

          <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm font-medium">
            {item.type}
          </p>

          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {item.focus}
          </p>

          <div className="mt-4 h-[2px] bg-gray-200 dark:bg-gray-800 w-0 group-hover:w-full transition-all duration-500"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default LearningResources;
