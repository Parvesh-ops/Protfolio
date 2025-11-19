import React from "react";
import ProjectCard from "./ProjectCard";
import Internship from "./Internship";
import Talk from "./Talk";


const projects = [
    {
        title: "E-commerce",
        description: "Built a responsive e-commerce website using React.js and Tailwind CSS. Users can search for products, view details, and add items to their cart. The app connects with RESTful APIs to fetch real-time product data, offering a smooth and interactive shopping experience.",
        tags: ["React js", "Context Api", "Tailwind CSS", "Fake Product API", "Axios"],
        link: "https://e-commerce-project-swart-delta.vercel.app/"
    },
    {
        title: "ReactifyAI",
        description: "ReactifyAI is a cutting-edge React frontend application built with Vite and Tailwind CSS, featuring secure user authentication, social login integration, and an AI-powered assistant leveraging the Google Gemini API. It demonstrates advanced frontend skills, including responsive design, smooth navigation with React Router v6, API integration with Axios, and modern UI effects like glassmorphism and gradients, showcasing both technical expertise and user-centric design.",
        tags: ["React js", "Tailwind CSS", "Google Gemini API", "Axios"],
        link: "https://reactify-ai-qfae.vercel.app/"
    },
    {
        title: "NewsApp",
        description: "React NewsApp is a responsive, modern news platform built with React, Tailwind CSS, and Axios, dynamically fetching the latest articles from NewsAPI. It features real-time search, category-based filtering, and a clean, responsive UI, demonstrating strong frontend skills in API integration, dynamic content rendering, and user-focused design.",
        tags: ["React js", "Tailwind CSS", "Axios"],
        link: "https://github.com/Parvesh-ops/News-Website"
    },
];

const Projects = () => {
    return (
        <section className="text-gray-200 dark:text-gray-200 flex flex-col justify-center px-6 md:px-16 py-16">
            {/* Work Section */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex flex-col sm:flex-row sm:items-center sm:gap-2 text-gray-900 dark:text-white">
                Inspiration & Learning
            </h2>
            <p className="text-gray-400 dark:text-gray-400 leading-relaxed text-base md:text-lg mb-3">
                Becoming a <span className="text-blue-600 font-bold">Frontend Developer</span> has been an exciting journey fueled by
                consistent learning and curiosity. These platforms and creators played a major role in shaping my skills in HTML, CSS,
                JavaScript, and React.
            </p>

            <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-6">
                I regularly followed their tutorials, best practices, and real-world examples to improve my problem-solving,
                build better UI experiences, and stay updated with modern web development trends. Their guidance helped me
                grow from beginner concepts to creating real, production-ready projects with confidence.
            </p>


            {/* Internship */}
            <Internship />

            {/* Projects */}
            <section className="mt-8">
                <h2 className="text-2xl font-bold text-gray-400 dark:text-white mb-4">Things I've Built</h2>
                {projects.map((proj, i) => (
                    <ProjectCard key={i} {...proj} />
                ))}
                <hr />

            </section>
            {/* Talk */}
            <Talk />

        </section>
    );
};

export default Projects;
