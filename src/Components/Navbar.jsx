import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../Context/ThemeContext';
import EnquiryModal from './EnquiryModal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useTheme();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
        <nav
            className={`sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 shadow-md transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'
                }`}
        >
            {/* Logo */}
            <div className="text-2xl font-extrabold tracking-tight">
                <NavLink to="/" className="nav-logo">
                    <span className="text-blue-600 block">Parvesh</span>
                    <span className="text-xs text-red-600 block -mt-1">
                       Code
                    </span>
                </NavLink>
            </div>

            {/* Desktop Links */}
        
<ul className="hidden md:flex items-center gap-8 font-medium">
  {['Home', 'About', 'Project', 'Contact'].map((item) => (
    <li key={item} className="relative group">
      <NavLink
        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
        className={({ isActive }) =>
          `px-3 py-1  rounded-full transition-all duration-300 ${
            isActive ? 'text-white bg-gray-700/50' : 'text-gray-300 hover:text-white'
          }`
        }
      >
        {item}
      </NavLink>
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
                <button 
                    onClick={() => setIsEnquiryOpen(true)}
                    className="hidden md:inline-block bg-linear-to-r from-blue-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
                >
                    Quick Enquiry
                </button>

                {/* Hamburger for mobile */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col gap-1 focus:outline-none"
                >
                    <span
                        className={`h-0.5 w-6 bg-current transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''
                            }`}
                    ></span>
                    <span
                        className={`h-0.5 w-6 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''
                            }`}
                    ></span>
                    <span
                        className={`h-0.5 w-6 bg-current transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''
                            }`}
                    ></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <ul
                className={`absolute top-16 left-0 w-full flex flex-col items-center gap-6 py-6 text-lg font-medium transition-all duration-500 ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'
                    } ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                {['Home', 'About','Project', 'Contact'].map((item) => (
                    <li key={item}>
                        <NavLink
                            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            onClick={() => setIsOpen(false)}
                            className="hover:text-blue-400 transition-colors p-4"
                        >
                            {item}
                        </NavLink>
                    </li>
                ))}
                <button 
                    onClick={() => {
                        setIsEnquiryOpen(true);
                        setIsOpen(false);
                    }}
                    className="bg-linear-to-r from-blue-500 to-pink-500 text-white px-5 py-2 rounded-lg font-semibold cursor-pointer hover:opacity-90 transition"
                >
                    Quick Enquiry
                </button>
            </ul>
        </nav>
        
        <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
        </>
    );
};

export default Navbar;
