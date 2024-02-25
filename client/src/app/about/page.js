// pages/about-us.js
"use client";
import React from 'react';
import Navbar from '../../components/navbar/page';
import Footer from '../../components/footer/page';

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />

      {/* About Us Content */}
      <main className="flex-grow max-w-5xl mx-auto p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Empowering Elegance</h1>
          <p className="text-gray-600">
            Welcome to Luxify, where fashion meets empowerment. We curate collections that speak
            volumes, celebrating the diversity and uniqueness of every woman. Step into a world of
            elegance, confidence, and style that goes beyond the runway.
          </p>
        </div>

        {/* Brand Story */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600">
            Luxify started as a dream — a dream to redefine women's fashion by creating a haven of
            carefully selected pieces that embody sophistication and flair. Our story is a journey
            of passion, creativity, and a relentless pursuit of excellence in every design we
            present to you.
          </p>
          <p className="text-gray-600">
            Each dress, each accessory, is a chapter in our story, and we invite you to be a part of
            it. Join us in embracing the beauty of individuality and the joy of expressing oneself
            through fashion.
          </p>
        </section>

        {/* Mission and Values */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Mission and Values</h2>
          <p className="text-gray-600">
            Our mission goes beyond delivering beautiful garments; it extends to empowering women
            globally. Luxify is more than a brand; it's a movement. We are committed to promoting
            body positivity, inclusivity, and sustainability in the fashion industry.
          </p>
          <p className="text-gray-600">
            With every purchase, you contribute to our mission of making fashion a force for good.
            We prioritize ethical practices, eco-friendly materials, and creating a positive impact
            on the lives of our artisans and the environment.
          </p>
        </section>

        {/* Meet the Team */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
          {/* Add team members and their roles */}
          <div className="flex flex-wrap justify-center space-x-4">
            <div className="team-member">
              <img src="/team-member1.jpg" alt="Team Member 1" className="rounded-full w-24 h-24" />
              <h3>Emily Watson</h3>
              <p className="text-center">Founder</p>
            </div>
            <div className="team-member">
              <img src="/team-member2.jpg" alt="Team Member 2" className="rounded-full w-24 h-24" />
              <h3>Alexander Chen</h3>
              <p className="text-center">Director</p>
            </div>
            <div className="team-member">
              <img src="/team-member3.jpg" alt="Team Member 3" className="rounded-full w-24 h-24" />
              <h3>Mia Rodriguez</h3>
              <p className="text-center">Designer</p>
            </div>
            {/* Add more team members */}
          </div>
        </section>

        {/* Our Commitment */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
          <p className="text-gray-600">
            Luxify is committed to making a positive impact on the world. We support initiatives that
            empower women, promote education, and contribute to environmental conservation. Every
            purchase from Luxify is a step towards a brighter, more sustainable future.
          </p>
        </section>

        {/* Join the Luxify Community */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Join the Luxify Community</h2>
          <p className="text-gray-600">
            We invite you to be a part of our journey. Follow us on social media, share your Luxify
            style using #LuxifyEmpowers, and join a community that celebrates the strength and
            beauty of every woman.
          </p>
        </section>

        {/* Add more sections and content as needed */}
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
