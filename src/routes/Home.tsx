import React from 'react';

import HeroImage from '../assets/herobanner.png';
import { CreditCardIcon, TruckIcon, ExclamationCircleIcon, ShoppingBagIcon, HeartIcon  } from '@heroicons/react/24/outline';

import ProductsHome from '../components/ProductsHome';

const Home = () => {
  return (
    <div className='Home'>
        <div className="herobanner flex p-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                <div className="flex-1">
                    <div className="flex h-full">
                        <div className="text-center md:text-left m-auto">
                            <h1 className="text-6xl md:text-8xl text-black font-bold mb-8">
                                The best place for buying and selling
                            </h1>
                            <h2 className="text-lg md:text-2xl text-gray-400 italic mb-8">
                                Register and Login to get started!
                            </h2>
                            <div className="flex flex-wrap">
                            <a href='/register'>
                                <button className="bg-sky-600 hover:bg-sky-800 text-white text-lg md:text-xl font-bold py-2 px-4 rounded-xl mb-4 md:mr-5">
                                Register Now
                                </button>
                            </a>
                            <a href='/products'>
                                <button className="bg-sky-600 hover:bg-sky-800 text-white text-lg md:text-xl font-bold py-2 px-4 rounded-xl">
                                See Products
                                </button>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <img className="w-full h-full object-cover rounded-bl-full" src={HeroImage} alt="Hero Banner" />
                </div>
            </div>
        </div>

        <div className=" flex flex-col md:flex-row items-center justify-evenly bg-gray-100">
            <div className="flex flex-col items-center flex-grow py-5">
                <ShoppingBagIcon className="w-8 h-8 md:w-10 md:h-10" />
                <h1 className="text-lg font-bold">Place your order</h1>
                <p className="font-light">Buy and Selling 24/7</p>
            </div>
            <div className="flex flex-col items-center flex-grow md:border-l-2 md:border-gray-300 py-5">
                <HeartIcon className="w-8 h-8 md:w-10 md:h-10" />
                <h1 className="text-lg font-bold">10k+ Active member</h1>
                <p className="font-light">Member all around the world</p>
            </div>
            <div className="flex flex-col items-center flex-grow md:border-l-2 md:border-gray-300 py-5">
                <TruckIcon className="w-8 h-8 md:w-10 md:h-10" />
                <h1 className="text-lg font-bold">Free Shipping</h1>
                <p className="font-light">Free Shipping all around the world</p>
            </div>
            <div className="flex flex-col items-center flex-grow md:border-l-2 md:border-gray-300 py-5">
                <ExclamationCircleIcon className="w-8 h-8 md:w-10 md:h-10" />
                <h1 className="text-lg font-bold">30 Days Return</h1>
                <p className="font-light">Return it within the first 30 days, wait until the seller approved</p>
            </div>
            <div className="flex flex-col items-center flex-grow md:border-l-2 md:border-gray-300 py-5">
                <CreditCardIcon className="w-8 h-8 md:w-10 md:h-10" />
                <h1 className="text-lg font-bold">100% Payment Secure</h1>
                <p className="font-light">Pay with secure payment system</p>
            </div>
        </div>

        <div>
            <ProductsHome />
        </div>

        <div>

        </div>
    </div>
  );
};

export default Home;