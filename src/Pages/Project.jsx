import React from "react";
import ProjectCard from "./ProjectCard";
import Internship from "./Internship";
import Talk from "./Talk";
import flower from '../Images/flower.png'


const projects = [
    {
        title: "E-commerce",
        description: "Built a responsive e-commerce website using React.js and Tailwind CSS. Users can search for products, view details, and add items to their cart. The app connects with RESTful APIs to fetch real-time product data, offering a smooth and interactive shopping experience.",
        tags: ["React js","Context Api", "Tailwind CSS", "Fake Product API","Axios"]
    },
    {
        title: "ReactifyAI",
        description: "ReactifyAI is a cutting-edge React frontend application built with Vite and Tailwind CSS, featuring secure user authentication, social login integration, and an AI-powered assistant leveraging the Google Gemini API. It demonstrates advanced frontend skills, including responsive design, smooth navigation with React Router v6, API integration with Axios, and modern UI effects like glassmorphism and gradients, showcasing both technical expertise and user-centric design.",
        tags: ["React js", "Tailwind CSS", "Google Gemini API","Axios"]
    },
    {
        title: "NewsApp",
        description: "React NewsApp is a responsive, modern news platform built with React, Tailwind CSS, and Axios, dynamically fetching the latest articles from NewsAPI. It features real-time search, category-based filtering, and a clean, responsive UI, demonstrating strong frontend skills in API integration, dynamic content rendering, and user-focused design.",
        tags: ["React js", "Tailwind CSS","Axios"],
    },
];

const Projects = () => {
    return (
        <section className="text-gray-200 dark:text-gray-200 flex flex-col justify-center px-6 md:px-16 py-16">
            {/* Work Section */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex flex-col sm:flex-row sm:items-center sm:gap-2 text-gray-900 dark:text-white">
                Work
                <img
                    alt="Flower Icon"
                    loading="lazy"
                    className="w-8 h-10 pointer-events-none select-none mt-2 sm:mt-0"
                    src={flower}
                />
            </h2>
            <p className="text-gray-400 dark:text-gray-400 leading-relaxed text-base md:text-lg mb-6">
                A passionate <span className="text-blue-600 font-bold">Frontend Developer</span> specializing in building
                beautiful, responsive, and interactive web applications. I enjoy transforming UI/UX designs into
                pixel-perfect code using modern frontend technologies.
                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                    My goal is to create seamless user experiences while maintaining clean and reusable code. I love collaborating on
                    exciting projects that challenge my skills and expand my knowledge in frontend development.
                </p>
            </p>

            {/* Internship */}
            <Internship />

            {/* Projects */}
            <section className="mt-8">
                <h2 className="text-2xl font-bold text-gray-400 dark:text-white mb-4">Featured Projects</h2>
                {projects.map((proj, i) => (
                    <ProjectCard key={i} {...proj} />
                ))}
                <p className="text-gray-400 dark:text-gray-300 text-base md:text-lg mt-4">
                    <span className="font-semibold text-blue-500">Note:</span> I haven't hosted these projects yet, but you can
                    <span className="font-medium text-white underline hover:text-blue-400 cursor-pointer">
                         view the code and screenshots directly on my GitHub account
                    </span>.
                    Feel free to explore each project, see the implementation details, and check how the UI/UX is structured.
                    Your feedback and suggestions are always welcome!
                </p>
                <hr />

            </section>
            {/* Talk */}
            <Talk />

        </section>
    );
};

export default Projects;
