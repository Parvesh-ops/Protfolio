import React from "react";

const ProjectCard = ({ title, description, tags, link }) => {
  return (
    <div className="mt-4">
      <div>
        <a
          href={link || "#"}
          target="_blank"
          className="items-center text-lg md:text-xl font-bold text-white-800 hover:text-pink-500 transition-colors duration-300 group"
        >
          {title}
        </a>
      </div>
      <p className="text-neutral-600 dark:text-neutral-300 mt-2">{description}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span key={i} className="bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 text-xs px-2 py-1 rounded-[4px]">
            {tag}
          </span>
        ))}
      </div>
      <hr className="mt-4 border-neutral-200 dark:border-neutral-700" />
    </div>
  );
};

export default ProjectCard;
