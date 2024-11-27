import React from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaCalendarAlt,
  FaFileMedical,
  FaFileInvoice,
  FaCog,
  FaSignInAlt,
  FaBox,
} from "react-icons/fa";
import Logo from "../assets/RANlogo.png";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 w-60 h-screen bg-blue-500 text-white flex flex-col justify-between border border-gray-300 shadow-lg">
      {/* Top Logo Section */}
      <div>
        <div className="text-center mt-4">
          <a href="https://ran-website.vercel.app/">
            <img
              src={Logo}
              alt="Company Logo"
              className="w-32 mx-auto cursor-pointer"
            />
          </a>
        </div>

        <hr className="my-6 border-gray-300" />

        {/* Navigation Links */}
        <nav className="space-y-4">
          <ul className="space-y-4">
            <li>
              <Link
                to="/dashboard"
                className="group relative flex items-center p-2 rounded overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="relative flex items-center">
                  <FaTachometerAlt className="text-lg mr-2" />
                  <span>Dashboard</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/Paddy"
                className="group relative flex items-center p-2 rounded overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="relative flex items-center">
                  <FaUsers className="text-lg mr-2" />
                  <span>PADDY Import</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/rice"
                className="group relative flex items-center p-2 rounded overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="relative flex items-center">
                  <FaBox className="text-lg mr-2" />
                  <span>Rice Export</span>
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        <hr className="my-6 border-gray-300" />

        {/* Other Sections */}
        <nav className="space-y-4">
          <ul className="space-y-4">
            <li>
              <Link
                to="/travel-allowance"
                className="group relative flex items-center p-2 rounded overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="relative flex items-center">
                  <FaCalendarAlt className="text-lg mr-2" />
                  <span>Travel allowance</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/Month-records"
                className="group relative flex items-center p-2 rounded overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="relative flex items-center">
                  <FaFileMedical className="text-lg mr-2" />
                  <span>Month Records</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/billing"
                className="group relative flex items-center p-2 rounded overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="relative flex items-center">
                  <FaFileInvoice className="text-lg mr-2" />
                  <span>Invoice Report</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="group relative flex items-center p-2 rounded overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="relative flex items-center">
                  <FaCog className="text-lg mr-2" />
                  <span>Settings</span>
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom Login Section */}
      <div className="p-4">
        <hr className="mb-4 border-gray-300" />
        <Link
          to="/login"
          className="group relative flex items-center p-2 rounded overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          <span className="relative flex items-center">
            <FaSignInAlt className="text-lg mr-2" />
            <span>Login</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
