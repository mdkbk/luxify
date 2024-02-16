// page.js
"use client";
import React from 'react';
import Navbar from '../components/navbar/page';
import Footer from '../components/footer/page';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Import Navbar component */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto p-8">
        {/* Add your landing page content here */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Luxify</h1>
          <p className="text-gray-600">Discover luxury products at your fingertips.</p>
        </div>
        {/* Add more sections and content as needed */}
      </main>

      {/* Import Footer component */}
      <Footer />
    </div>
  );
};

export default Home;
