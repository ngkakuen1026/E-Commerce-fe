import React from 'react';
import { UserIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <nav className="bg-sky-800">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="max-w-4xl flex items-center">
                <a href='/'>
                    <span className="text-white font-bold text-2xl">Easy</span>
                    <span className="text-red-500 font-bold text-2xl">Buy</span>
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className="text-lg text-gray-300 hover:bg-sky-700 hover:text-white px-3 py-2 rounded-md font-medium"
                >
                  Product
                </a>
                <a
                  href="/about"
                  className="text-lg text-gray-300 hover:bg-sky-700 hover:text-white px-3 py-2 rounded-md font-medium"
                >
                  About
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="/login"
              className="text-gray-300 hover:bg-sky-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium flex items-center"
            >
              <UserIcon className="w-5 h-5 mr-1" />
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;