import React, { useState, ChangeEvent, FormEvent } from 'react';

import { EyeSlashIcon, EyeIcon, UserIcon } from '@heroicons/react/24/solid';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import { myapi } from '../common/http-common';

interface RegisterResponse {
    name: string;
    email: string;
    password: string;
    phone_number: string;
}

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [phone_number, setPhone_number] = useState<string>('');

    const handleRegister = async (e: FormEvent): Promise<void> => {
        e.preventDefault();

        /* eslint-disable */
        const phoneRegex = /^[0-9+-]+$/;
        if (!phoneRegex.test(phone_number)) {
          toast.error('Invalid phone number. Please enter a valid phone number.');
          return;
        }
    
        try {
            // Check if name or email is already registered
            const existingUserResponse = await axios.get(`${myapi.uri}/users?name=${name}&email=${email}`);
            const existingUsers = existingUserResponse.data;

            for (const user of existingUsers) {
                if (user.name === name || user.email === email) {
                    toast.error('Name or email is already registered. Please choose a different name or email.');
                    return;
                }
            }

            const response = await axios.post<RegisterResponse>(`${myapi.uri}/users`, {
                name,
                email,
                password,
                phone_number,
            });
            console.log('User created:', response.data);
            toast.success('Registration successful!');
        } catch (error) {
            console.log('Failed to create user:', error);
            toast.error('Failed to create user. Please try again later.');
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
    
        switch (name) {
          case 'name':
            setName(value);
            break;
          case 'email':
            setEmail(value);
            break;
          case 'password':
            setPassword(value);
            break;
          case 'phone_number':
            const phoneRegex = /^[0-9+-]+$/;
            if (phoneRegex.test(value) || value === '') {
              setPhone_number(value);
            }
            break;
          default:
            break;
        }
    };

    return (
        <div className="w-full h-screen flex">
            <div className="w-1/3 flex flex-col justify-center items-center bg-gradient-to-br from-sky-600 to-sky-400">
                <h2 className="text-6xl text-white font-bold text-center mb-6">Already have accounts</h2>
                <p className="text-2xl text-white text-center mb-6">Login to start<br/> buying and selling!</p>
                <div className='flex items-center justify-center'> 
                    <a href='/login'>
                        <button className="w-64 bg-white text-black font-bold py-4 px-8 rounded-full hover:bg-gray-200 flex items-center justify-center
                        transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150">
                            Login <UserIcon className="w-5 h-5 ml-2" />
                        </button>
                    </a>
                </div>
            </div>
            
            <div className="w-2/3 flex flex-col justify-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-6 text-center">Register your account</h1>
                <h1 className="text-2xl italic text-gray-400 mb-6 text-center">Using email, password and make an user name!</h1>
                <form className="mx-10" onSubmit={handleRegister}>
                    <div className="flex justify-center gap-x-5">
                        <div className="w-1/2">
                            <div className="mb-4">
                                <input
                                    className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:border-indigo-500 bg-gray-100"
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your name"
                                />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="mb-4">
                                <input
                                    className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:border-indigo-500 bg-gray-100"
                                    type="text"
                                    name="phone_number"
                                    value={phone_number}
                                    onChange={handleInputChange}
                                    placeholder="Enter your phone number"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-4 flex justify-center">
                        <input
                            className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:border-indigo-500 bg-gray-100"
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6 justify-center ">
                        <div className="relative">
                            <input
                                className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:border-indigo-500 bg-gray-100"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={password}
                                onChange={handleInputChange}
                                placeholder="Enter your password"
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
                            className="w-64 bg-sky-600 hover:bg-sky-800 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center
                            button-width
                            transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150"
                            type="submit"
                        >
                            Register
                            <UserIcon className="w-5 h-5 ml-2" />
                        </button>
                    </div>
                    
                </form>

                <div className="flex justify-center mx-10 my-5">
                    <div className="relative w-full">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="px-4 bg-white text-gray-500">or</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl italic text-gray-400 mb-6 text-center">Using Google, Facebook or Twitter to register</h1>
                </div>
                <div className="flex justify-center mb-5">
                    <button
                        className="w-max bg-gray-200 hover:bg-gray-300 text-black py-4 px-8 rounded-lg flex items-center justify-center
                        button-width
                        transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150"
                        type="submit"
                    >
                        <FaGoogle className="w-5 h-5 mr-2" />
                        Continue with Google
                    </button>
                </div>
                <div className="flex justify-center mb-5">
                    <button
                        className="w-max bg-gray-200 hover:bg-gray-300 text-black py-4 px-8 rounded-lg flex items-center justify-center
                        button-width
                        transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150"
                        type="submit"
                    >
                        <FaFacebook className="w-5 h-5 mr-2" />
                        Continue with Facebook
                    </button>
                </div>
                <div className="flex justify-center">
                    <button
                        className="w-max bg-gray-200 hover:bg-gray-300 text-black py-4 px-8 rounded-lg flex items-center justify-center
                        button-width
                        transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150"
                        type="submit"
                    >
                        <FaTwitter className="w-5 h-5 mr-2" />
                        Continue with Twitter
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;
