import React from "react";
import { experiences } from "../Data/experience";
import Lunar from "../Images/Lunar.png";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="w-full mt-20">
      
      {/* Heading */}
      <div className="relative w-fit mx-auto mb-12">
        <h2 className="text-3xl font-bold text-white text-center">
          Experiences
        </h2>

        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: "8rem" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute -bottom-3 left-1/2 h-1 bg-[#ee1a49] transform -translate-x-1/2 rounded-full"
        />
      </div>

      {/* Experience content */}
      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            {/* Logo */}
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={Lunar}
                  alt="Lunar company"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold text-white">
                  {exp.role}
                </h3>
                <span className="text-sm text-gray-400">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-gray-400 mt-1">
                {exp.company}
              </p>

              <p className="mt-3 font-bold text-gray-300 leading-relaxed text-sm">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

