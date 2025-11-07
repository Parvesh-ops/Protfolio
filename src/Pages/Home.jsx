import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Home = () => {
    return (
        <section className="min-h-screen bg-[#0a0a0a] text-gray-200 flex flex-col justify-center px-6 md:px-16">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left Text Section */}
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
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6 cursor-pointer">
                        <style>
                            {`
      @keyframes moveLeftToRight {
        0% { transform: translateX(-20px); opacity: 0.8; }
        50% { transform: translateX(20px); opacity: 1; }
        100% { transform: translateX(-20px); opacity: 0.8; }
      }
      .animate-moveLeftToRight {
        animation: moveLeftToRight 3s ease-in-out infinite;
      }
    `}
                        </style>

                        <div className="flex flex-col items-center gap-2 animate-moveLeftToRight">
                            <FaReact className="text-3xl text-cyan-400" />
                            <p className="text-sm">React</p>
                        </div>

                        <div className="flex flex-col items-center gap-2 animate-moveLeftToRight [animation-delay:0.2s]">
                            <SiTailwindcss className="text-3xl text-blue-400" />
                            <p className="text-sm">Tailwind CSS</p>
                        </div>

                        <div className="flex flex-col items-center gap-2 animate-moveLeftToRight [animation-delay:0.4s]">
                            <FaJsSquare className="text-3xl text-yellow-400" />
                            <p className="text-sm">JavaScript</p>
                        </div>

                        <div className="flex flex-col items-center gap-2 animate-moveLeftToRight [animation-delay:0.6s]">
                            <FaHtml5 className="text-3xl text-orange-500" />
                            <p className="text-sm">HTML</p>
                        </div>

                        <div className="flex flex-col items-center gap-2 animate-moveLeftToRight [animation-delay:0.8s]">
                            <FaCss3Alt className="text-3xl text-blue-500" />
                            <p className="text-sm">CSS</p>
                        </div>

                        <div className="flex flex-col items-center gap-2 animate-moveLeftToRight [animation-delay:1s]">
                            <FaFigma className="text-3xl text-pink-500" />
                            <p className="text-sm">Figma</p>
                        </div>
                    </div>



                </div>

                {/* Right Illustration */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="https://thumbs.dreamstime.com/b/front-end-developer-concept-man-creates-web-page-javascript-programming-situation-development-user-interface-people-scene-front-283801788.jpg"
                        alt="Frontend Developer Illustration"
                        className="w-60 h-60 md:w-72 md:h-72 object-contain cursor-pointer
             transition-transform duration-300 ease-in-out 
             hover:scale-105 hover:rotate-1 hover:shadow-lg"
                    />

                </div>
            </div>
            {/* Work Section */}
            <section className="mb-16 px-6 md:px-12">
                <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                    Work
                    <img
                        alt="Flower Icon"
                        className="w-8 h-10 pointer-events-none select-none"
                        src="https://cdn-icons-png.flaticon.com/512/5533/5533763.png"
                    />
                </h2>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                    As a <span className="text-blue-500 font-medium">Frontend Developer</span>,
                    I specialize in building clean, responsive, and high-performance web interfaces
                    using <span>React</span> and
                    <span className="text-sky-400 font-medium"> Tailwind CSS</span>. My focus is on
                    creating seamless user experiences, writing structured and reusable code, and
                    ensuring fast load times for modern web applications.
                    <br /><br />
                    I take pride in transforming UI designs into pixel-perfect components, optimizing
                    websites for mobile and desktop devices, and implementing modern frontend practices
                    like <span>component reusability</span>,
                    <span> state management</span>, and
                    <span> responsive layouts</span>.
                    Every project I build aims to deliver both <span>
                        visual appeal</span> and <span>technical precision</span>.
                </p>

                {/* Internship and Projects */}
                <h2 className="text-2xl md:text-3xl font-heading font-semibold mt-5 mb-4 text-gray-900 dark:text-white">
                    Internship & Projects
                </h2>
                <div className="space-y-6">
                    <div className="flex flex-col">
                        <a
                            href="https://deltatechnepal.com/"
                            target="_blank"
                            className="text-lg md:text-xl font-medium text-[#289c28] underline"
                        >
                            Delta Tech PVT.LTD
                        </a>
                        <p className="text-gray-700 dark:text-gray-300 font-sans mt-1">
                            Frontend Developer
                        </p>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                            Aug 2025 - Present
                        </span>
                    </div>

                    <div className="flex flex-col">
                        <a
                            href="https://swikarcodes.com/"
                            target="_blank"
                            className="text-lg md:text-xl font-medium bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent relative"
                        >
                            Swikar Codes
                            <span className="absolute left-0 bottom-0 w-31 h-[1px] bg-gradient-to-r from-blue-600 to-purple-500"></span>
                        </a>

                        <p className="text-gray-700 dark:text-gray-300 font-sans mt-1">
                            frontend Developer
                        </p>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                            may 2024 - Aug 2025
                        </span>
                    </div>
                </div>
            </section>
        </section>


    );
};

export default Home;
