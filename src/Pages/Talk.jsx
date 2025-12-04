import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Whatsapp from './Whatsapp'

const Talk = () => {

  return (
    <>
      <div className="text-gray-200 dark:text-gray-200 p-6 rounded-xl">
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
          <div className="flex items-center justify-center sm:justify-end mt-6 sm:mt-0 gap-4">
            <Link
              to="/contact"
              className="bg-linear-to-r from-blue-500 to-pink-500 text-white font-semibold rounded-lg  py-2 px-5 
             transition-all duration-300
             hover:bg-linear-to-r hover:from-blue-500 hover:to-pink-500 
             hover:text-white hover:opacity-90 cursor-pointer"
            >
              Contact Us
            </Link>

          </div>
        </div>
        <hr className="mt-8 w-full border-neutral-700" />
        <Whatsapp />
      </div>
    </>
  )
}

export default Talk
