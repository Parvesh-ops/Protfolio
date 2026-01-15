import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Frontend Developer Intern at Lunar IT Solution",
    duration: "Present",
    description:
      "Developed reusable and responsive React components and implemented routing using React Router DOM. Integrated REST APIs using Axios and managed global state using Context API and Redux Toolkit. Collaborated with backend developers for API consumption, enhanced UI/UX, and optimized application performance across multiple projects, including e-commerce platforms, admin dashboards, and authentication apps.",
    skills: ["React", "Redux Toolkit", "Context API", "JavaScript", "HTML", "Tailwind CSS", "Axios", "React Router DOM"],
  },
  {
    title: "Portfolio Website",
    duration: "2025",
    description:
      "Created my personal portfolio website to showcase projects, skills, and resume. Implemented responsive design and smooth animations.",
    skills: ["React", "CSS Animations", "Tailwind CSS", "Responsive Design"],
  },
];

const Experience = () => {
  return (
    <section className="text-gray-200 dark:text-gray-200 px-6 md:px-14 py-14">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <h2 className="relative text-2xl md:text-3xl font-bold mb-6 text-white text-center">
          Experience

          {/* Animated underline */}
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "6rem" }} // Tailwind w-20 equivalent
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-0 left-1/2 h-1 bg-[#ee1a49] transform -translate-x-1/2"
          />
        </h2>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-4 rounded-xl shadow-lg hover:shadow-red-500 transition-shadow duration-300"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                {exp.title}
              </h3>
              <p className="text-gray-400 italic mt-1">{exp.duration}</p>
              <p className="text-gray-200 mt-2 leading-relaxed">{exp.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-1 py-1 bg-gray-500 rounded-sm text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
