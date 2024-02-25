// Navbar.js
import { useEffect, useState } from 'react';
import Image from 'next/image';
import {Button} from "@nextui-org/button";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    // Add any additional setup or cleanup logic here
  }, []); 

  return (
    <nav className="bg-white shadow">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href = "/">
            <Image
              src="/luxify-logo.png" // Replace with your logo image
              alt="Luxify Logo"
              width={120}
              height={40}
            />
            </a>
          </div>
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <a href="/" className="text-gray-600 hover:text-gray-800">Home</a>
            {/* Shop with Dropdown */}
            <div className="relative">
              <a 
                href="#" 
                className="text-gray-600 hover:text-gray-800 cursor-pointer"
                onClick={toggleDropdown}
              >
                Shop
              </a>
              {isDropdownOpen && (
                <div className="absolute mt-2 bg-white border rounded shadow-lg">
                  {/* Dropdown options */}
                  <a href="/shop/clothes" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Clothes</a>
                  <a href="/shop/accessories" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Accessories</a>
                  <a href="/shop/bags" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Bags</a>

                  {/* Add more dropdown options as needed */}
                </div>
              )}
            </div>
            <a href="/about" className="text-gray-600 hover:text-gray-800">About Us</a>
            {/* Add more navigation links as needed */}
          </div>
          {/* Sign-up/Login Buttons */}
          <div className="flex space-x-4">
          <Button><a href="/register" className="text-gray-600 hover:text-gray-800">Sign Up</a></Button>
          <Button><a href="/login" className="text-gray-600 hover:text-gray-800">Login</a></Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
