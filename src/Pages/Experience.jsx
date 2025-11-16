import React from "react";

const experiences = [
  {
    title: "Freelance ",
    duration: "2023-2025",
    description:
      "Built 5+ projects using React and Redux Toolkit, including e-commerce apps, admin dashboards, and authentication apps.",
    skills: ["React", "Redux Toolkit", "context api", "JavaScript", "HTML",  "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    duration: "2025",
    description:
      "Created my personal portfolio website to showcase projects, skills, and resume. Implemented responsive design and smooth animations.",
    skills: ["React", "CSS Animations", "Tailwind CSS","Responsive Design"],
  },
];

const Experience = () => {
  return (
    <section className="bg-[#0a0a0a] text-gray-200 px-6 md:px-14 py-14">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">
          Experience
        </h2>

        <div className="flex flex-col md:flex-row md:gap-17 gap-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-red-500 transition-shadow duration-300"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                {exp.title}
              </h3>
              <p className="text-gray-400 italic mt-1">{exp.duration}</p>
              <p className="text-gray-200 mt-4 leading-relaxed">{exp.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium"
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
