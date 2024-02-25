// ShopWomenClothing.js
"use client";
import React from 'react';
import Navbar from '../../../components/navbar/page';
import Footer from '../../../components/footer/page';

const ShopWomenClothing = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />

      {/* Shop Content */}
      <main className="flex-grow max-w-5xl mx-auto p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Explore Trendy Women's Clothing</h1>
          <p className="text-gray-600">Discover the latest fashion trends in our women's clothing collection.</p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Category: Women's Dresses */}
          <div className="category-card">
            <img
              src="https://nypost.com/wp-content/uploads/sites/2/2022/04/dresses-new.jpg?quality=75&strip=all&w=744" // Replace with actual image URL
              alt="Women's Dresses"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Women's Dresses</h2>
            <p className="text-gray-600">Explore our stunning collection of dresses for every occasion.</p>
            <a href="/category/women-dresses" className="text-blue-500 hover:underline mt-2">Shop Now</a>
          </div>

          {/* Category: Women's Tops */}
          <div className="category-card">
            <img
              src="https://i.pinimg.com/736x/99/f0/cd/99f0cd16d478c8d60d536034dd7d7ddb.jpg" // Replace with actual image URL
              alt="Women's Tops"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Women's Tops</h2>
            <p className="text-gray-600">Find the perfect tops to complement your style.</p>
            <a href="/category/women-tops" className="text-blue-500 hover:underline mt-2">Shop Now</a>
          </div>

          {/* Category: Women's Accessories */}
          <div className="category-card">
            <img
              src="https://cdn.aarp.net/content/dam/aarp/entertainment/beauty-and-style/2022/01/1140-unstuffy-work-pant.imgcache.rev.web.1000.575.jpg" // Replace with actual image URL
              alt="Women's Pants"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Women's Pants</h2>
            <p className="text-gray-600">Discover comfortable and stylish pants for women.</p>
            <a href="/category/women-pants" className="text-blue-500 hover:underline mt-2">Shop Now</a>
          </div>
        </div>

        {/* Featured Products */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
          {/* Add featured product cards or carousel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Product 1 */}
            <div className="product-card">
              <img
                src="https://d3thqe68ymbqps.cloudfront.net/751066-large_default/women-elegant-floral-print-button-long-dress--summer-casual-ruffle-nec.jpg" // Replace with actual image URL
                alt="Featured Product 1"
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">Elegant Floral Maxi Dress</h3>
              <p className="text-gray-600">$59.99</p>
              <a href="/product/elegant-floral-maxi-dress" className="text-blue-500 hover:underline mt-2">View Details</a>
            </div>

            {/* Featured Product 2 */}
            <div className="product-card">
              <img
                src="https://lingeriehut.co.uk/cdn/shop/files/lingeriehut-chic-striped-long-sleeve-blouse-casual-elegance-376.webp?v=1696168867&width=1946" // Replace with actual image URL
                alt="Featured Product 2"
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">Chic Striped Blouse</h3>
              <p className="text-gray-600">$39.99</p>
              <a href="/product/chic-striped-blouse" className="text-blue-500 hover:underline mt-2">View Details</a>
            </div>

            {/* Featured Product 3 */}
            <div className="product-card">
              <img
                src="https://cdn.shopify.com/s/files/1/0332/2681/files/blogleatherpants3.jpg?v=1695654648" // Replace with actual image URL
                alt="Featured Product 3"
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">Stylish Leather Pants</h3>
              <p className="text-gray-600">$49.99</p>
              <a href="/product/stylish-leather-crossbody-bag" className="text-blue-500 hover:underline mt-2">View Details</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ShopWomenClothing;
