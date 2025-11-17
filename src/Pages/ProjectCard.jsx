import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

const ProjectCard = ({ title, description, tags, link }) => {
  return (
    <div className="mt-4">
      
      {/* Title + Link */}
      <div className="flex items-center gap-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group text-lg font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
        >
          {title}
          <LuArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
        </a>
      </div>

      {/* Description */}
      <p className="text-neutral-600 dark:text-neutral-300 mt-2">
        {description}
      </p>

      {/* Tags */}
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 text-xs px-2 py-1 rounded-[4px]"
          >
            {tag}
          </span>
        ))}
      </div>

      <hr className="mt-4 border-neutral-200 dark:border-neutral-700" />
    </div>
  );
};

export default ProjectCard;
