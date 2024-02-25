// ShopAccessories.js
"use client";
import React from 'react';
import Navbar from '../../../components/navbar/page';
import Footer from '../../../components/footer/page';

const ShopAccessories = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />

      {/* Shop Content */}
      <main className="flex-grow max-w-5xl mx-auto p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Explore Stylish Accessories</h1>
          <p className="text-gray-600">Discover a variety of stylish accessories to complement your look.</p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Category: Jewelry */}
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/17550846/2023/6/15/7c3ade16-6ec5-4975-bc73-f4e01ffba2db1686819761298-Saraf-RS-Jewellery-Rose-Gold-Plated-White-AD-Studded-Jewelle-13.jpg" // Replace with actual image URL
              alt="Jewelry"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Jewelry</h2>
            <p className="text-gray-600">Enhance your style with our elegant jewelry collection.</p>
            <a href="/category/jewelry" className="text-blue-500 hover:underline mt-2">Shop Now</a>
          </div>

          {/* Category: Hats */}
          <div className="category-card">
            <img
              src="https://americanhatmakers.com/cdn/shop/articles/Featured_Image_-_Womens-Outback-Gambler-Fedora.png?v=1643117084" // Replace with actual image URL
              alt="Hats"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Hats</h2>
            <p className="text-gray-600">Stay trendy with our fashionable hat collection.</p>
            <a href="/category/hats" className="text-blue-500 hover:underline mt-2">Shop Now</a>
          </div>

          {/* Category: Scarves */}
          <div className="category-card">
            <img
              src="https://neshop.com.np/wp-content/uploads/2023/12/free-size-palpoly2-palatt-original-imagtgg7efg9r26d.jpeg_q70.jpg" // Replace with actual image URL
              alt="Scarves"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Scarves</h2>
            <p className="text-gray-600">Wrap up in style with our cozy scarf collection.</p>
            <a href="/category/scarves" className="text-blue-500 hover:underline mt-2">Shop Now</a>
          </div>
        </div>

        {/* Featured Products */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Featured Accessories</h2>
          {/* Add featured product cards or carousel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Product 1 */}
            <div className="product-card">
              <img
                src="https://wrapables.com/cdn/shop/products/A65510_1600x.jpg?v=1519856952" // Replace with actual image URL
                alt="Featured Accessory 1"
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">Elegant Gemstone Necklace</h3>
              <p className="text-gray-600">$29.99</p>
              <a href="/product/elegant-gemstone-necklace" className="text-blue-500 hover:underline mt-2">View Details</a>
            </div>

            {/* Featured Product 2 */}
            <div className="product-card">
              <img
                src="https://i5.walmartimages.com/seo/Peaoy-Straw-Sun-Hat-Wide-Brim-Hat-Foldable-Ponytail-Hat-Roll-up-Beach-Hat-Fashion-Sun-Shade-Hat-for-Women-Girls_754127e0-2761-4ca2-b0bc-ed20cdc75fd3.37d1ec0b8ab3e06c89358cdf2400648b.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" // Replace with actual image URL
                alt="Featured Accessory 2"
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">Stylish Wide Brim Hat</h3>
              <p className="text-gray-600">$24.99</p>
              <a href="/product/stylish-wide-brim-hat" className="text-blue-500 hover:underline mt-2">View Details</a>
            </div>

            {/* Featured Product 3 */}
            <div className="product-card">
              <img
                src="https://darlingjadore.com/wp-content/uploads/2021/11/big-cozy.jpg" // Replace with actual image URL
                alt="Featured Accessory 3"
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">Cozy Knit Scarf</h3>
              <p className="text-gray-600">$19.99</p>
              <a href="/product/cozy-knit-scarf" className="text-blue-500 hover:underline mt-2">View Details</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ShopAccessories;
