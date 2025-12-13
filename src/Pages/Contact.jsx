import React from "react";
import img1 from '../Images/contact.svg'
import { Phone, Mail, MapPin } from "lucide-react"; // icons
import { motion } from "framer-motion";

const ContactUs = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Get form data
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    // Send email via EmailJS or backend API
    console.log('Form submitted:', data);
    alert('Thank you for reaching out! I will get back to you soon.');
    e.target.reset();
  };
  return (
    <section className="min-h-screen text-gray-200 dark:text-gray-200 flex flex-col items-center px-6 md:px-16 py-12">
      {/* Heading */}
      <h1 className="relative text-3xl md:text-4xl font-bold mb-4 text-center text-white">
        Contact <span>Us</span>

        {/* Animated underline */}
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: "5rem" }} // Tailwind w-20 equivalent
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-0 left-1/2 h-1 bg-[#ee1a49] transform -translate-x-1/2"
        />
      </h1>

      {/* Form & Illustration Container */}
      <div className="w-full max-w-6xl bg-[#1a1919] dark:bg-[#1a1919] rounded-xl shadow-lg p-6 md:p-12 flex flex-col md:flex-row items-center gap-10 mt-10">
        {/* Form */}
        <form onSubmit={handleFormSubmit} className="flex-1 flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-white">
            Get <span className="text-[#ee1a49]">In Touch</span>
          </h2>
          <p className="text-gray-400 font-normal mt-2 text-lg md:text-xl">
            Let's build better and grow together!
          </p>

          {/* Name & Email */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <label className="flex flex-col gap-1 text-sm font-medium text-gray-400">
              Name*
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-3 rounded-md bg-[#201f1f] text-white placeholder-gray-400 border-2 border-blue-500 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </label>

            <label className="flex flex-col gap-1 text-sm font-medium text-gray-400">
              Email*
              <input
                type="email"
                name="email"
                placeholder="yourname@email.com"
                className="p-3 rounded-md bg-[#201f1f] text-white placeholder-gray-400 border-2 border-blue-500 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </label>
          </div>

          {/* Subject */}
          <label className="flex flex-col gap-1 text-sm font-medium text-gray-400 mt-3">
            Subject*
            <input
              type="text"
              name="subject"
              placeholder="e.g. Web Development Inquiry"
              className="p-3 rounded-md bg-[#201f1f] text-white placeholder-gray-400 border-2 border-blue-500 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </label>

          {/* Message */}
          <label className="flex flex-col gap-1 text-sm font-medium text-gray-400 mt-3">
            Message*
            <textarea
              rows="5"
              name="message"
              placeholder="Your message here..."
              className="p-3 rounded-md bg-[#201f1f] text-white placeholder-gray-400 border-2 border-blue-500 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            ></textarea>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 py-3 bg-linear-to-r from-pink-500 to-blue-500 text-white font-medium rounded-md hover:brightness-90 transition-all"
          >
            Submit
          </button>
        </form>

        {/* Illustration (Optional) */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={img1}
            alt="Contact Illustration"
            loading="lazy"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
          />
        </div>

      </div>

      {/* Contact Info Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-27 text-center mt-16">
        {/* Phone Numbers */}
        <div className="flex flex-col items-center  p-6 rounded-2xl ">
          <div className="bg-linear-to-r from-pink-600 to-red-500 p-4 rounded-full mb-4">
            <Phone size={28} />
          </div>
          <h3 className="text-lg font-bold mb-1">Phone Numbers</h3>
          <p className="text-gray-300 text-sm">9814336521</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center  p-6 rounded-2xl ">
          <div className="bg-linear-to-r from-pink-600 to-red-500 p-4 rounded-full mb-4">
            <Mail size={28} />
          </div>
          <h3 className="text-lg font-bold mb-1">Email</h3>
          <p className="text-gray-300 text-sm">arveshchaudhary@gmail.com</p>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center  p-6 rounded-2xl ">
          <div className="bg-linear-to-r from-pink-600 to-red-500 p-4 rounded-full mb-4">
            <MapPin size={28} />
          </div>
          <h3 className="text-lg font-bold mb-1">Location</h3>
          <p className="text-gray-300 text-sm">NetaChowk,Biratnagar,Nepal</p>
        </div>
      </div>

      {/* Map section */}
      <div className="w-full h-80 md:h-96 mt-8 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456789!2d87.2671234!3d26.4556789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef7d123456789%3A0x123456789abcdef!2sNeta%20Chowk%2C%20Biratnagar%2C%20Nepal!5e0!3m2!1sen!2snp!4v1699999999999!5m2!1sen!2snp"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Biratnagar Location"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
