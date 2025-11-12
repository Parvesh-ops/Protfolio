// import React from "react";
// import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaFigma } from "react-icons/fa";
// import { LuArrowUpRight } from "react-icons/lu";
// import { SiTailwindcss } from "react-icons/si";

// const Home = () => {
//     return (
//         <section className="min-h-screen bg-[#0a0a0a] text-gray-200 flex flex-col justify-center px-6 md:px-16">
//             <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

//                 {/* Left Text Section */}
//                 <div className="flex-1 space-y-4 text-center md:text-left">
//                     <h1 className="text-5xl md:text-6xl font-bold">
//                         Hi, I'm{" "}
//                         <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
//                             Parvesh
//                         </span>
//                     </h1>

//                     <h2 className="text-xl text-blue-400 font-medium cursor-pointer
//                transition-all duration-300 ease-in-out 
//                hover:text-blue-600 hover:translate-y-1 hover:scale-105">
//                         Frontend Developer
//                     </h2>


//                     <p className="text-gray-400 leading-relaxed max-w-lg">
//                         A creative frontend developer passionate about crafting beautiful,
//                         responsive, and user-friendly web interfaces. I focus on turning ideas
//                         into interactive digital experiences using modern web technologies.
//                     </p>

//                     {/* Tech Stack */}
//                     <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6 cursor-pointer">
//                         <style>
//                             {`
//       @keyframes moveLeftToRight {
//         0% { transform: translateX(-20px); opacity: 0.8; }
//         50% { transform: translateX(20px); opacity: 1; }
//         100% { transform: translateX(-20px); opacity: 0.8; }
//       }
//       .animate-moveLeftToRight {
//         animation: moveLeftToRight 3s ease-in-out infinite;
//       }
//     `}
//                         </style>

//                         <div className="flex flex-col items-center gap-2 animate-moveLeftToRight">
//                             <FaReact className="text-3xl text-cyan-400" />
//                             <p className="text-sm">React</p>
//                         </div>

//                         <div className="flex flex-col items-center gap-2 animate-moveLeftToRight [animation-delay:0.2s]">
//                             <SiTailwindcss className="text-3xl text-blue-400" />
//                             <p className="text-sm">Tailwind CSS</p>
//                         </div>

//                         <div className="flex flex-col items-center gap-2 animate-moveLeftToRight [animation-delay:0.4s]">
//                             <FaJsSquare className="text-3xl text-yellow-400" />
//                             <p className="text-sm">JavaScript</p>
//                         </div>

//                         <div className="flex flex-col items-center gap-2 animate-moveLeftToRight [animation-delay:0.6s]">
//                             <FaHtml5 className="text-3xl text-orange-500" />
//                             <p className="text-sm">HTML</p>
//                         </div>

//                         <div className="flex flex-col items-center gap-2 animate-moveLeftToRight [animation-delay:0.8s]">
//                             <FaCss3Alt className="text-3xl text-blue-500" />
//                             <p className="text-sm">CSS</p>
//                         </div>

//                         <div className="flex flex-col items-center gap-2 animate-moveLeftToRight [animation-delay:1s]">
//                             <FaFigma className="text-3xl text-pink-500" />
//                             <p className="text-sm">Figma</p>
//                         </div>
//                     </div>



//                 </div>

//                 {/* Right Illustration */}
//                 <div className="flex-1 flex justify-center">
//                     <img
//                         src="https://thumbs.dreamstime.com/b/front-end-developer-concept-man-creates-web-page-javascript-programming-situation-development-user-interface-people-scene-front-283801788.jpg"
//                         alt="Frontend Developer Illustration"
//                         className="w-60 h-60 md:w-72 md:h-72 object-contain cursor-pointer
//              transition-transform duration-300 ease-in-out 
//              hover:scale-105 hover:rotate-1 hover:shadow-lg"
//                     />

//                 </div>
//             </div>
//             {/* Responsive Wrapper for Work Section */}
//             <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
//                 <section className="mt-17 mb-16">
//                     {/* Heading */}
//                     <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex flex-col sm:flex-row sm:items-center sm:gap-2 text-gray-900 dark:text-white">
//                         Work
//                         <img
//                             alt="Flower Icon"
//                             className="w-8 h-10 pointer-events-none select-none mt-2 sm:mt-0"
//                             src="https://cdn-icons-png.flaticon.com/512/5533/5533763.png"
//                         />
//                     </h2>

//                     {/* Description */}
//                     <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
//                         As a <span className="text-blue-500 font-medium">Frontend Developer</span>,
//                         I specialize in building clean, responsive, and high-performance web interfaces
//                         using <span>React</span> and
//                         <span className="text-sky-400 font-medium"> Tailwind CSS</span>. My focus is on
//                         creating seamless user experiences, writing structured and reusable code, and
//                         ensuring fast load times for modern web applications.
//                         <br /><br />
//                         I take pride in transforming UI or Figma designs into pixel-perfect components, optimizing
//                         websites for mobile and desktop devices, and implementing modern frontend practices
//                         like <span>component reusability</span>,
//                         <span> state management</span>, and
//                         <span> responsive layouts</span>.
//                         Every project I build aims to deliver both <span>
//                             visual appeal</span> and <span>technical precision</span>.
//                     </p>

//                     {/* Internship */}
//                     <h2 className="text-2xl md:text-3xl font-heading font-semibold mt-5 mb-4 text-gray-900 dark:text-white">
//                         Internship
//                     </h2>
//                     <div className="space-y-6">
//                         <div className=" sm:flex-row sm:justify-between sm:items-center">
//                             <a
//                                 href="https://deltatechnepal.com/"
//                                 target="_blank"
//                                 className="flex items-center text-lg md:text-xl font-medium text-[#289c28] underline group"
//                             >
//                                 Delta Tech PVT.LTD
//                                 <LuArrowUpRight className="w-6 h-7 ml-1 transition-transform duration-300 group-hover:-translate-y-1" />
//                             </a>
//                             <div className="mt-1 sm:mt-0 text-sm sm:text-base">
//                                 <p className="text-gray-700 dark:text-gray-300 font-sans">Frontend Developer</p>
//                                 <span className="text-gray-500 dark:text-gray-400">Aug 2025 - Present</span>
//                             </div>
//                         </div>

//                         <div className="sm:flex-row sm:justify-between sm:items-center">
//                             <a
//                                 href="https://swikarcodes.com/"
//                                 target="_blank"
//                                 className="flex items-center text-lg md:text-xl font-medium text-blue-400 underline group"
//                             >
//                                 Swikar Codes
//                                 <LuArrowUpRight className="w-6 h-7 ml-1 transition-transform duration-300 group-hover:-translate-y-1" />
//                             </a>
//                             <div className="mt-1 sm:mt-0 text-sm sm:text-base">
//                                 <p className="text-gray-700 dark:text-gray-300 font-sans">Frontend Developer</p>
//                                 <span className="text-gray-500 dark:text-gray-400">May 2024 - Aug 2024</span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Projects */}
//                     <section>
//                         <div className="container mx-auto max-w-7xl mt-7 flex flex-col gap-8">
//                             <div className="flex flex-col sm:flex-row sm:items-center gap-3">
//                                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-serif">
//                                     Featured Project
//                                 </h2>
//                                 <img
//                                     alt="Flower Icon"
//                                     className="w-8 h-10 pointer-events-none select-none"
//                                     src="https://cdn-icons-png.flaticon.com/512/5533/5533763.png"
//                                 />
//                             </div>

//                             <div className=" mb-4 md:grid-cols-2 gap-6">
//                                 {/* Project Card 1 */}
//                                 <div>
//                                     <div >
//                                         <a
//                                             href="#"
//                                             target="_blank"
//                                             className=" items-center text-lg md:text-xl font-bold text-white-800 hover:text-pink-500 transition-colors duration-300 group"
//                                         >
//                                             E-commerce
//                                         </a>

//                                     </div>
//                                     <p className="text-neutral-600 dark:text-neutral-300 ">
//                                         Built a responsive e-commerce website using React.js and Tailwind CSS. Users can search for products, view details, and add items to their cart. The app connects with RESTful APIs to fetch real-time product data, offering a smooth and interactive shopping experience.
//                                     </p>
//                                     <div className="mt-2 flex flex-wrap gap-2">
//                                         <span className="bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 text-xs px-2 py-1 rounded-[4px]">
//                                             React js
//                                         </span>
//                                         <span className="bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 text-xs px-2 py-1 rounded-[4px]">
//                                             tailwindcss
//                                         </span>
//                                         <span className="bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 text-xs px-2 py-1 rounded-[4px]">
//                                             Api
//                                         </span>
//                                     </div>
//                                 </div>
//                                 <hr class="mt-4 border-neutral-200 dark:border-neutral-700"></hr>


//                                 {/* Project Card 2 */}
//                                 <div className="mt-4 ">
//                                     <div>
//                                         <a
//                                             href="#"
//                                             target="_blank"
//                                             className=" items-center text-lg md:text-xl font-bold text-white-800 hover:text-pink-500 transition-colors duration-300 group"
//                                         >
//                                             ReactifyAI
//                                         </a>

//                                     </div>
//                                     <p className="text-neutral-600 dark:text-neutral-300 mt-2">
//                                         ReactifyAI is a cutting-edge React frontend application built with Vite and Tailwind CSS, featuring secure user authentication,
//                                         social login integration, and an AI-powered assistant leveraging the Google Gemini API. It demonstrates advanced frontend skills,
//                                         including responsive design, smooth navigation with React Router v6, API integration with Axios, and modern UI effects like
//                                         glassmorphism and gradients, showcasing both technical expertise and user-centric design.
//                                     </p>
//                                     <div className="mt-2 flex flex-wrap gap-2">
//                                         <span className="bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 text-xs px-2 py-1 rounded-[4px]">
//                                             React js
//                                         </span>
//                                         <span className="bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 text-xs px-2 py-1 rounded-[4px]">
//                                             tailwindcss
//                                         </span>
//                                         <span className="bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 text-xs px-2 py-1 rounded-[4px]">
//                                             Google Gemini API
//                                         </span>
//                                     </div>
//                                 </div>
//                                 <hr class="mt-4 border-neutral-200 dark:border-neutral-700"></hr>

//                                 {/* Project Card 3 */}
//                                 <div className="mt-4">
//                                     <div>
//                                         <a
//                                             href="#"
//                                             target="_blank"
//                                             className="items-center text-lg md:text-xl font-bold text-white-800 hover:text-pink-500 transition-colors duration-300 group"
//                                         >
//                                             NewsApp
//                                         </a>
//                                     </div>
//                                     <p className="text-neutral-600 dark:text-neutral-300 mt-2">
//                                         React NewsApp is a responsive, modern news platform built with React, Tailwind CSS, and Axios, dynamically fetching the latest articles
//                                         from NewsAPI. It features real-time search, category-based filtering, and a clean, responsive UI, demonstrating strong frontend skills
//                                         in API integration, dynamic content rendering, and user-focused design.
//                                     </p>
//                                     <div className="mt-2 flex flex-wrap gap-2">
//                                         <span className="bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 text-xs px-2 py-1 rounded-[4px]">
//                                             React js
//                                         </span>
//                                         <span className="bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 text-xs px-2 py-1 rounded-[4px]">
//                                             tailwindcss
//                                         </span>
//                                     </div>
//                                 </div>
//                                 <hr class="mt-4 border-neutral-200 dark:border-neutral-700"></hr>
//                             </div>
//                         </div>
//                     </section>
//                 </section>
//             </div>


//         </section>


//     );
// };

// export default Home;

import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { Link } from 'react-router-dom'
import About from "./About";
import Project from "./Project";
import Footer from "./Footer";
import frontend from '../images/frontend.webp'

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
                                className="flex flex-col items-center gap-2 animate-moveLeftToRight"
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

