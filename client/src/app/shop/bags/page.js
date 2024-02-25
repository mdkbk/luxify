// ShopBags.js
"use client";
import React from 'react';
import Navbar from '../../../components/navbar/page';
import Footer from '../../../components/footer/page';

const ShopBags = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />

      {/* Shop Content */}
      <main className="flex-grow max-w-5xl mx-auto p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Explore Stylish Bags Collection</h1>
          <p className="text-gray-600">Discover a variety of stylish bags to complement your fashion.</p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Category: Tote Bags */}
          <div className="category-card">
            <img
              src="https://images-cdn.ubuy.co.id/634d12d466376f3c140fd0c0-3-pieces-boho-canvas-tote-bag-reusable.jpg" // Replace with actual image URL
              alt="Tote Bags"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Tote Bags</h2>
            <p className="text-gray-600">Carry your essentials in style with our chic tote bags.</p>
            <a href="/category/tote-bags" className="text-blue-500 hover:underline mt-2">Shop Now</a>
          </div>

          {/* Category: Crossbody Bags */}
          <div className="category-card">
            <img
              src="https://content.api.news/v3/images/bin/4f0c1a66344e86db639d3f980dc120c4" // Replace with actual image URL
              alt="Crossbody Bags"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Crossbody Bags</h2>
            <p className="text-gray-600">Stay hands-free with our trendy crossbody bag collection.</p>
            <a href="/category/crossbody-bags" className="text-blue-500 hover:underline mt-2">Shop Now</a>
          </div>

          {/* Category: Backpacks */}
          <div className="category-card">
            <img
              src="https://cdn.mos.cms.futurecdn.net/xzQpkZzUEXrZ47kHvACvmk.jpg" // Replace with actual image URL
              alt="Backpacks"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Backpacks</h2>
            <p className="text-gray-600">Explore our stylish backpacks for a casual yet fashionable look.</p>
            <a href="/category/backpacks" className="text-blue-500 hover:underline mt-2">Shop Now</a>
          </div>
        </div>

        {/* Featured Products */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Featured Bags</h2>
          {/* Add featured product cards or carousel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Bag 1 */}
            <div className="product-card">
              <img
                src="https://cdn.mos.cms.futurecdn.net/KR9SzSrmStTvB3uNguQ6NL.jpeg" // Replace with actual image URL
                alt="Featured Bag 1"
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">Stylish Leather Tote</h3>
              <p className="text-gray-600">$79.99</p>
              <a href="/product/stylish-leather-tote" className="text-blue-500 hover:underline mt-2">View Details</a>
            </div>

            {/* Featured Bag 2 */}
            <div className="product-card">
              <img
                src="https://m.media-amazon.com/images/I/718bnJvUHoL._AC_UY900_.jpg" // Replace with actual image URL
                alt="Featured Bag 2"
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">Compact Crossbody Clutch</h3>
              <p className="text-gray-600">$49.99</p>
              <a href="/product/compact-crossbody-clutch" className="text-blue-500 hover:underline mt-2">View Details</a>
            </div>

            {/* Featured Bag 3 */}
            <div className="product-card">
              <img
                src="https://chintamanialchemi.com/cdn/shop/products/rolltop-boho-canvas-backpack-for-women-with-linen-fringes-rolltop-laptop-backpack-army-green-816400_2400x.jpg?v=1626526681" // Replace with actual image URL
                alt="Featured Bag 3"
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">Stylish Canvas Backpack</h3>
              <p className="text-gray-600">$59.99</p>
              <a href="/product/stylish-canvas-backpack" className="text-blue-500 hover:underline mt-2">View Details</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ShopBags;
