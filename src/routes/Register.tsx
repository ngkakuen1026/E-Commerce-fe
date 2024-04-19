import { EyeSlashIcon, EyeIcon, UserIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };

    return (
        <div className="w-full h-screen flex">
            <div className="w-1/3 flex flex-col justify-center items-center bg-gradient-to-br from-sky-600 to-sky-400">
                <h2 className="text-6xl text-white font-bold text-center mb-6">Already have accounts</h2>
                <p className="text-2xl text-white text-center mb-6">Login to start<br/> buying and selling!</p>
                <a href='/login'>
                    <button className="w-64 bg-white text-black font-bold py-4 px-8 rounded-full hover:bg-gray-200">
                        Login
                    </button>
                </a>
            </div>
            <div className="w-2/3 flex flex-col justify-center">
            <h1 className="text-6xl font-bold text-gray-800 mb-6 text-center">Register your account</h1>
            <h1 className="text-2xl italic text-gray-400 mb-6 text-center">Using email, password and make an user name!</h1>
                <form className='px-20'>
                    <div className="mb-4 flex justify-center px-20">
                    <input
                        type="email"
                        id="email"
                        className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:border-indigo-500 bg-gray-100"
                        placeholder="Email"
                    />
                    </div>
                    <div className="mb-6 justify-center px-20">
                        <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:border-indigo-500 bg-gray-100"
                            placeholder="Password"
                        />
                        <button
                            type="button"
                            className="absolute right-4 top-1/2 transform -translate-y-1/2"
                            onClick={handleTogglePassword}
                        >
                            {showPassword ? (
                            <EyeIcon className="h-6 w-6 text-gray-500" />
                            ) : (
                            <EyeSlashIcon className="h-6 w-6 text-gray-500" />
                            )}
                        </button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                    <button
                        className="w-64 bg-sky-600 hover:bg-sky-800 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center"
                        type="submit"
                    >
                        Sign In
                        <UserIcon className="w-5 h-5 ml-2" />
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register
