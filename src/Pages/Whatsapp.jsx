import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <div className="fixed bottom-14 right-6 z-50">
      <a
        href="https://web.whatsapp.com/" 
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center space-x-2 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-medium py-3 px-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        {/* WhatsApp Icon */}
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
};

export default Whatsapp;
