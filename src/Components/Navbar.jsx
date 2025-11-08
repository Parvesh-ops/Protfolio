import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <nav
            className={`sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 shadow-md transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'
                }`}
        >
            {/* Logo */}
            <div className="text-2xl font-extrabold tracking-tight">
                <Link to="/" className="nav-logo">
                    <span className="text-blue-600 block">Parvesh</span>
                    <span className="text-xs text-red-600 block -mt-1">
                       Code
                    </span>
                </Link>
            </div>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-8 font-medium">
                {['Home', 'About','Project', 'Contact'].map((item) => (
                    <li key={item} className="relative group">
                        <Link
                            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            className="px-3 py-2 rounded-full transition-all duration-300 text-gray-300 hover:text-white"
                        >
                            {item}
                            <span className="absolute inset-0 rounded-full bg-gray-700/50 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 -z-10"></span>
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Right side buttons */}
            <div className="flex items-center gap-4">
                {/* Theme toggle */}
                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full border border-gray-600 hover:bg-gray-800/60 transition"
                >
                    {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                {/* Quick Enquiry */}
                <button className="hidden md:inline-block bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition">
                    Quick Enquiry
                </button>

                {/* Hamburger for mobile */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col gap-1 focus:outline-none"
                >
                    <span
                        className={`h-[2px] w-6 bg-current transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[6px]' : ''
                            }`}
                    ></span>
                    <span
                        className={`h-[2px] w-6 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''
                            }`}
                    ></span>
                    <span
                        className={`h-[2px] w-6 bg-current transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''
                            }`}
                    ></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <ul
                className={`absolute top-16 left-0 w-full flex flex-col items-center gap-6 py-6 text-lg font-medium transition-all duration-500 ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'
                    } ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                {['Home', 'About','Projects','Contact'].map((item) => (
                    <li key={item}>
                        <Link
                            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            onClick={() => setIsOpen(false)}
                            className="hover:text-blue-400 transition-colors p-4"
                        >
                            {item}
                        </Link>
                    </li>
                ))}
                <button 
                className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-5 py-2 rounded-lg font-semibold cursor-pointer">
                    Quick Enquiry
                </button>
            </ul>
        </nav>
    );
};

export default Navbar;
