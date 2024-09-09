import React, { useState } from "react";
import {
  FaArrowRight,
  FaArrowRightFromBracket,
  FaBars,
  FaCartShopping,
  FaChartColumn,
  FaPen,
  FaUser,
  FaX,
} from "react-icons/fa6";
import { setOffCanvas } from "../../state/reducer/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo 1.png";
import { setUserSidebar } from "../../state/reducer/sidebarSlice";
const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-900 border-b border-gray-200">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="">
                <img
                  src="https://nate-dashboard-frontend.vercel.app/static/media/logo%201.dc376ed811cf9ff03040.png"
                  alt="logo"
                  className="w-full h-14"
                />
              </a>
            </div>
            <div className="flex items-center">
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8" id="nav">
                <a
                  href="/"
                  className="text-white px-3 py-2 rounded-md text-lg font-semibold"
                  id="nav"
                >
                  Home
                </a>

                {/* AI+ with dropdown */}
                <div
                  className="relative text-white px-3 py-2 rounded-md text-lg font-semibold"
                  id="nav"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  AI+
                  {isDropdownOpen && (
                    <div className="absolute -left-60 bg-white text-gray-900 p-2 text-xs shadow-lg mt-2 rounded-md w-64">
                     At ResumeSquad, we offer AI-powered resume writing services 
                     designed to enhance job seekers' profiles. Their AI tools help
                      tailor resumes to specific industries and roles, ensuring alignment
                       with modern ATS (Applicant Tracking Systems). With expert writers 
                       and intelligent algorithms, ResumeSquad crafts resumes that highlight
                        key skills and accomplishments to increase the chances of landing interviews.
                         Their services cater to professionals across various sectors, providing
                          personalized and data-driven resume solutions.

                    </div>
                  )}
                </div>

                <Link
                  to={"/resources"}
                  className="text-white px-3 py-2 rounded-md text-lg font-semibold"
                  id="nav"
                >
                  Resources
                </Link>
                <Link
                  to={"/services"}
                  className="text-white px-3 py-2 rounded-md text-lg font-semibold"
                  id="nav"
                  target="_blank"
                >
                  Services
                </Link>
                <Link
                  to="http://blog.resumesquad.net"
                  className="text-white px-3 py-2 rounded-md text-lg font-semibold"
                  id="nav"
                  target="_blank"
                >
                  Blog
                </Link>
                <Link
                  to={"/user/login"}
                  className="text-white px-2 py-2 text-lg font-semibold border-2 rounded-xl"
                  id="home_fourth"
                >
                  Log in
                </Link>
                <Link
                  to={"/user/sign"}
                  className="text-white px-2 py-2 text-lg font-semibold border-2 rounded-xl"
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
            </div>
          </div>
          {isMenuOpen && (
            <div className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="/resume"
                  className="text-white block px-3 py-2 rounded-md text-base font-semibold"
                >
                  Resume
                </a>
                <a
                  href="/cv"
                  className="text-white block px-3 py-2 rounded-md text-base font-semibold"
                >
                  CV
                </a>
                <a
                  href="/cover-letter"
                  className="text-white block px-3 py-2 rounded-md text-base font-semibold"
                >
                  Cover Letter
                </a>
                <a
                  href="/advice"
                  className="text-white block px-3 py-2 rounded-md text-base font-semibold"
                >
                  Advice
                </a>
                <a
                  href="/login"
                  className="text-white block px-3 py-2 rounded-md text-base font-semibold"
                >
                  Login
                </a>
                <a
                  href="/contact"
                  className="text-white block px-3 py-2 rounded-md text-base font-semibold"
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

export default TopBar;
