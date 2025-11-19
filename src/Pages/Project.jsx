import React from "react";
import ProjectCard from "./ProjectCard";
import Internship from "./Internship";
import Talk from "./Talk";
import { motion } from "framer-motion";


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
            <h2 className="relative text-2xl md:text-3xl font-semibold mb-6 text-white text-center">
                Inspiration & Learning

                {/* Animated underline */}
                <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "8rem" }} // w-20 equivalent
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute bottom-0 left-1/2 h-1 bg-[#ee1a49] transform -translate-x-1/2"
                />
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

                <h2 className="relative text-2xl font-bold mb-6 text-white text-center">
                    Things I've Built

                    {/* Animated underline */}
                    <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: "7rem" }} // Tailwind w-20 equivalent
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute bottom-0 left-1/2 h-1 bg-[#ee1a49] transform -translate-x-1/2 w-20 md:w-28 lg:w-32"
                    />
                </h2>

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
