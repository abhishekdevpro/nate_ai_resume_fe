import React, { useState } from "react";
// import './Navbar.css';
// import '../Home/Home.css'
// import { a } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-900 border-b border-gray-200">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="">
                <img
                  src="https://nate-dashboard-frontend.vercel.app/static/media/logo%201.dc376ed811cf9ff03040.png"
                  alt="logo"
                  className=" w-full h-14"
                />
              </a>
            </div>
            <div className="flex items-center">
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8" id="nav">
                <a
                  href="/"
                  className="text-white  px-3 py-2 rounded-md text-lg font-semibold"
                  id="nav"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="text-white  px-3 py-2 rounded-md text-lg font-semibold"
                  id="nav"
                >
                  AI+
                </a>
                {/* <a href="/" className="text-white  px-3 py-2 rounded-md text-lg font-semibold" id='nav'>AI Resume Fetch</a> */}
                <a
                  href="/"
                  className="text-white  px-3 py-2 rounded-md text-lg font-semibold"
                  id="nav"
                >
                  Resources
                </a>
                <a
                  href="/"
                  target="_blank"
                  className="text-white  px-3 py-2 rounded-md text-lg font-semibold"
                  id="nav"
                >
                  Services
                </a>
                <a
                  href="/"
                  target="_blank"
                  className="text-white  px-3 py-2 rounded-md text-lg font-semibold"
                  id="nav"
                >
                  Blog
                </a>
                <Link
                  to={"/user/login"}
                  className="text-white px-2 py-2 text-lg font-semibold border-2 rounded-xl "
                  id="home_fourth"
                >
                  Log in
                </Link>
                <Link
                  to={"/user/sign"}
                  className="text-white  px-2 py-2 text-lg font-semibold border-2 rounded-xl"
                  id="nav"
                >
                  Sign up
                </Link>
              </div>
              <div className="flex sm:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-900 hover:text-gray-700 focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </button>
              </div>
              {/* <div className="hidden sm:flex items-center">
              {!isSearchOpen ? (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="text-white  focus:outline-none px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1112 4.5a7.5 7.5 0 014.35 12.15z"></path>
                  </svg>
                  Search
                </button>
              ) : (
                <input
                  type="text"
                  placeholder="Search..."
                  className="block w-full text-gray-900 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              )}
            </div> */}
            </div>
          </div>
          {isMenuOpen && (
            <div className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="/"
                  className="text-white  block px-3 py-2 rounded-md text-base font-semibold"
                >
                  Resume
                </a>
                <a
                  href="/"
                  className="text-white  block px-3 py-2 rounded-md text-base font-semibold"
                >
                  CV
                </a>
                <a
                  href="/"
                  className="text-white  block px-3 py-2 rounded-md text-base font-semibold"
                >
                  Cover Letter
                </a>
                <a
                  href="/"
                  className="text-white  block px-3 py-2 rounded-md text-base font-semibold"
                >
                  Advice
                </a>
                <a
                  href="/"
                  className="text-white  block px-3 py-2 rounded-md text-base font-semibold"
                >
                  Login
                </a>
                <a
                  href="/"
                  className="text-white  block px-3 py-2 rounded-md text-base font-semibold"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
