// page.js
"use client";
import React from 'react';
import Navbar from '../components/navbar/page';
import Footer from '../components/footer/page';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const carouselImages = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
  '/image4.jpg',
  '/image5.jpg',
  '/image6.jpg',
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
  };

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

        {/* Carousel Section */}
        <Slider {...settings} className="mt-8">
          {carouselImages.map((image, index) => (
            <div key={index} className="relative w-full h-96">
              <img
                src={image}
                alt={`Carousel Image ${index + 1}`}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </Slider>

        {/* Add more sections and content as needed */}
      </main>

      {/* Import Footer component */}
      <Footer />
    </div>
  );
};

export default Home;
