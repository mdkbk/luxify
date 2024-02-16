// Footer.js
import { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    // Your useEffect logic if needed
  }, []); // Empty dependency array indicates it runs only once on mount

  return (
    <footer className="bg-gray-200 py-4">
      <div className="max-w-5xl mx-auto text-center text-gray-600">
        {/* Add footer content, copyright, etc. */}
        &copy; 2024 Luxify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
