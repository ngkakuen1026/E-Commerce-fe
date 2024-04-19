import React from 'react'

const Home = () => {
  return (
    <div className="herobanner flex py-20">
        <div className="container mx-auto px-4">
            <div className="flex flex-row items-center">
            <div className="flex-1">
                <h1 className="text-4xl text-black font-bold mb-6">
                    The place to buy what you want<br />and sell your stuff
                </h1>
                <h2 className="text-xl text-gray-400 italic mb-8">Register and Login to get started!</h2>
                <button className="bg-sky-600 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded">
                    <a href='/product'>
                      Start Now!
                    </a>
                </button>
            </div>
            <div className="flex-1">
                <img className="w-full h-96 object-cover" src="" alt="Hero Banner" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home
