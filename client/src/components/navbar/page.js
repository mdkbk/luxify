// Navbar.js
import { useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  useEffect(() => {}, []);

  return (
    <nav className="bg-white shadow">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/luxify-logo.png" // Replace with your logo image
              alt="Luxify Logo"
              width={120}
              height={40}
            />
          </div>
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Shop
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              About
            </a>
            {/* Add more navigation links as needed */}
          </div>
          {/* Sign-up/Login Buttons */}
          <div className="flex space-x-4">
            <a href="/register" className="text-gray-600 hover:text-gray-800">
              Sign Up
            </a>
            <a href="/login" className="text-gray-600 hover:text-gray-800">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
