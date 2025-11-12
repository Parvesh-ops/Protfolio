import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { Link } from 'react-router-dom'
import About from "./About";
import Project from "./Project";
import Footer from "./Footer";
import frontend from '../Images/frontend.webp'

const Hero = () => {
    const techStack = [
        { icon: <FaReact className="text-3xl text-cyan-400" />, name: "React", delay: "0s" },
        { icon: <SiTailwindcss className="text-3xl text-blue-400" />, name: "Tailwind CSS", delay: "0.2s" },
        { icon: <FaJsSquare className="text-3xl text-yellow-400" />, name: "JavaScript", delay: "0.4s" },
        { icon: <FaHtml5 className="text-3xl text-orange-500" />, name: "HTML", delay: "0.6s" },
        { icon: <FaCss3Alt className="text-3xl text-blue-500" />, name: "CSS", delay: "0.8s" },
        { icon: <FaFigma className="text-3xl text-pink-500" />, name: "Figma", delay: "1s" },
    ];

    return (
        <section className="min-h-screen bg-[#0a0a0a] text-gray-200 flex flex-col justify-center px-6 md:px-16">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left Text */}
                <div className="flex-1 space-y-4 text-center md:text-left">
                    <h1 className="text-5xl md:text-6xl font-bold">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                            Parvesh
                        </span>
                    </h1>
                    <h2 className="text-xl text-blue-400 font-medium cursor-pointer
            transition-all duration-300 ease-in-out 
            hover:text-blue-600 hover:translate-y-1 hover:scale-105">
                        Frontend Developer
                    </h2>

                    <p className="text-gray-400 leading-relaxed max-w-lg">
                        A creative frontend developer passionate about crafting beautiful,
                        responsive, and user-friendly web interfaces. I focus on turning ideas
                        into interactive digital experiences using modern web technologies.
                    </p >
                    <p className="text-gray-400 leading-relaxed max-w-lg">Transforming Ideas into Digital Reality. Let's Build Success Together!</p>

                    <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-start mt-8 gap-4 sm:gap-6">
                        <Link
                            to="/about"
                            className="rounded-lg bg-gradient-to-bl from-red-500 to-blue-500 text-white font-medium py-2 px-6 transition-all duration-300 transform hover:-translate-y-1 hover:brightness-90 flex sm:w-auto text-center"
                        >
                            Explore Now
                        </Link>

                        <Link
                            to="/contact"
                            className="rounded-lg border border-gray-300 bg-white dark:bg-black text-black dark:text-white 
             font-medium px-10 py-2 transition-all duration-300 transform 
             hover:-translate-y-0.5 hover:bg-gray-100 dark:hover:bg-gray-900
              sm:w-auto text-center"
                        >
                            Contact Support
                        </Link>


                    </div>


                    {/* Tech Stack */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">
                        <style>
                            {`
                @keyframes moveLeftToRight {
                  0% { transform: translateX(-20px); opacity: 0.8; }
                  50% { transform: translateX(20px); opacity: 1; }
                  100% { transform: translateX(-20px); opacity: 0.8; }
                }
                .animate-moveLeftToRight { animation: moveLeftToRight 4s ease-in-out infinite; }
              `}
                        </style>
                        {techStack.map((tech, i) => (
                            <div
                                key={i}
                                className="flex flex-col cursor-pointer items-center gap-2 animate-moveLeftToRight"
                                style={{ animationDelay: tech.delay }}
                            >
                                {tech.icon}
                                <p className="text-sm">{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Illustration */}
                <div className="flex-1 flex justify-center">
                    <img
                        src={frontend}
                        alt="Frontend Developer Illustration"
                        className="w-60 h-60 md:w-72 md:h-72 object-contain cursor-pointer
              transition-transform duration-300 ease-in-out 
              hover:scale-105 hover:rotate-1 hover:shadow-lg"
                    />
                </div>

            </div>
            <About />
            <Project />
            <Footer />

        </section>
    );
};

export default Hero;

