import React from 'react'
import { Link } from 'react-router-dom'

const Talk = () => {
  return (
    <div className="bg-[#0a0a0a] text-gray-200 p-6 rounded-xl">
      {/* Content Wrapper */}
      <div className="relative flex flex-col sm:flex-row items-center gap-6">
        {/* Text */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-3xl font-bold uppercase text-slate-700 dark:text-slate-300">
            DO YOU WANT TO TALK ABOUT YOUR NEW <br /> PROJECT?
          </h2>
          <p className="text-lg mt-4 text-slate-700 dark:text-gray-300">
            Contact us today and let's get started!
          </p>
        </div>

        {/* Button */}
        <div className="flex items-center justify-center sm:justify-end mt-6 sm:mt-0">
          <Link
            to="/contact"
            className="rounded-lg bg-gradient-to-bl from-red-500 to-blue-500 text-white font-medium py-2 px-6 transition-all duration-300 transform hover:-translate-y-0.5 hover:brightness-90 cursor-pointer"
          >
            Let's Collaborate
          </Link>
        </div>
      </div>

      
      <hr className="mt-8 w-full border-neutral-700" />
    </div>
  )
}

export default Talk
