import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-center max-w-7xl">
        <h2 className="text-2xl font-bold mb-4">
          Easy<span className='text-red-500'>Buy</span>
        </h2>
        <p className="text-lg mb-4">
          <b>EasyBuy</b>: Your Trusted Online Marketplace for Seamless Buying
        </p>
        <div className="flex space-x-4">
          <a
            href="/"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="/"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="/"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="text-gray-400 text-sm mt-4">
          &copy; {new Date().getFullYear()} EasyBuy. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;