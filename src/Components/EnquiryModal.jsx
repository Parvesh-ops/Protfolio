import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useTheme } from '../Context/ThemeContext';

const EnquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { darkMode } = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enquiry submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        message: ''
      });
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-y-auto py-4">
      <div className={`relative w-full max-w-md mx-4 rounded-xl shadow-2xl transition-all duration-300 ${
        darkMode ? 'bg-[#1a1a1a]' : 'bg-white'
      } max-h-[90vh] overflow-y-auto`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-full transition-all hover:bg-gray-200 dark:hover:bg-gray-700 ${
            darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
          }`}
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {!submitted ? (
            <>
              <h2 className={`text-xl sm:text-2xl font-bold mb-1 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Quick <span className="text-pink-500">Enquiry</span>
              </h2>
              <p className={`text-xs mb-4 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Tell us about your project!
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name */}
                <div>
                  <label className={`block text-xs font-medium mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full px-3 py-1.5 rounded-lg border-2 text-sm transition-all focus:outline-none ${
                      darkMode
                        ? 'bg-[#2a2a2a] border-gray-600 text-white placeholder-gray-500 focus:border-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                    }`}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className={`block text-xs font-medium mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full px-3 py-1.5 rounded-lg border-2 text-sm transition-all focus:outline-none ${
                      darkMode
                        ? 'bg-[#2a2a2a] border-gray-600 text-white placeholder-gray-500 focus:border-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                    }`}
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className={`block text-xs font-medium mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="977-9814336521"
                    className={`w-full px-3 py-1.5 rounded-lg border-2 text-sm transition-all focus:outline-none ${
                      darkMode
                        ? 'bg-[#2a2a2a] border-gray-600 text-white placeholder-gray-500 focus:border-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                    }`}
                    required
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className={`block text-xs font-medium mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Project Type*
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`w-full px-3 py-1.5 rounded-lg border-2 text-sm transition-all focus:outline-none ${
                      darkMode
                        ? 'bg-[#2a2a2a] border-gray-600 text-white focus:border-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    }`}
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="website">Website</option>
                    <option value="webapp">Web Application</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className={`block text-xs font-medium mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Budget Range*
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`w-full px-3 py-1.5 rounded-lg border-2 text-sm transition-all focus:outline-none ${
                      darkMode
                        ? 'bg-[#2a2a2a] border-gray-600 text-white focus:border-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    }`}
                    required
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className={`block text-xs font-medium mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Additional Details*
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your project..."
                    rows="2"
                    className={`w-full px-3 py-1.5 rounded-lg border-2 text-sm transition-all focus:outline-none resize-none ${
                      darkMode
                        ? 'bg-[#2a2a2a] border-gray-600 text-white placeholder-gray-500 focus:border-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                    }`}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-3 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold text-sm rounded-lg hover:opacity-90 transition-all transform hover:scale-105"
                >
                  Send Enquiry
                </button>
              </form>
            </>
          ) : (
            // Success Message
            <div className="py-4 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className={`text-lg font-bold mb-1 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Thank You!
              </h3>
              <p className={`text-xs ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                We've received your enquiry and will get back to you soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
