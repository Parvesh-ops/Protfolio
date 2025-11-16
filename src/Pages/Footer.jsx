import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-white py-10 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col justify-between">
           <div className="flex items-center gap-4 mb-4">
            <a
              href="https://www.facebook.com/parvesh.chaudhary"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-800 hover:bg-[#1877F2] active:bg-[#1877F2] p-2 rounded-full transition-all duration-300"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-800 hover:bg-gradient-to-tr hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] active:bg-gradient-to-tr active:from-[#f58529] active:via-[#dd2a7b] active:to-[#8134af] p-2 rounded-full transition-all duration-300"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/parvesh-chaudhary"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-800 hover:bg-[#0077B5] active:bg-[#0077B5] p-2 rounded-full transition-all duration-300"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Parvesh-ops"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-800 hover:bg-[#333333] active:bg-[#333333] p-2 rounded-full transition-all duration-300"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
          <p className="text-neutral-400 text-sm mt-4 md:mt-auto">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between w-full md:w-2/3 text-sm gap-8">
        <div className="flex-1">
  <ul className="space-y-2 text-neutral-400">
    <li>
      <Link
        to="/about"
        className="hover:text-red-600 font-bold transition-colors duration-300"
      >
        About Us
      </Link>
    </li>
    <li>
      <Link
        to="/project"
        className="hover:text-red-600 font-bold transition-colors duration-300"
      >
        Projects
      </Link>
    </li>
    <li>
      <Link
        to="/contact"
        className="hover:text-red-600 font-bold transition-colors duration-300"
      >
        Contact
      </Link>
    </li>
  </ul>
</div>
          <div className="flex-1">
            <ul className="space-y-2 text-neutral-400 font-bold">
              <li>Neta Chowk, Biratnagar</li>
              <li>parveshchaudhary@gmail.com</li>
              <li>9814336521</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <hr className="my-6 border-neutral-700" />
      <p className="text-center text-neutral-500 text-sm">
        Privacy Policy | Terms of Service | Virtual Reality
      </p>
    </footer>
  );
};

export default Footer;
