import React from "react";

const About = () => {
    return (
        <section className="min-h-screen bg-[#0a0a0a] text-gray-200 flex flex-col items-center px-6 md:px-16 py-12">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">

                <div className="space-y-6 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">About <span className="text-[#ee1a49]">Me</span> </h2>
                    <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                        As a <span className="text-blue-500 font-medium">Frontend Developer</span>,
                        I specialize in building clean, responsive, and high-performance web interfaces
                        using <span>React</span> and
                        <span className="text-sky-400 font-medium"> Tailwind CSS</span>. My focus is on
                        creating seamless user experiences, writing structured and reusable code, and
                        ensuring fast load times for modern web applications.
                        <br /><br />
                        I take pride in transforming UI or Figma designs into pixel-perfect components, optimizing
                        websites for mobile and desktop devices, and implementing modern frontend practices
                        like <span>component reusability</span>,
                        <span> state management</span>, and
                        <span> responsive layouts</span>.
                        Every project I build aims to deliver both <span>
                            visual appeal</span> and <span>technical precision</span>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
