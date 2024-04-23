import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="relative px-20 py-4 flex justify-between items-center bg-white">
            
            <div>
                <Link to="/"><img src="assets/logo.png" alt="logo" className="w-32"/></Link>
            </div>
            <div className="lg:hidden">
                <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={toggleMenu}>
                    <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="fixed top-0 right-0 w-1/2 h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                    <div className=" rounded-lg p-4">
                        <button className="absolute top-0 right-0 m-4" onClick={closeMenu}>
                            <svg className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.41-1.41a.75.75 0 011.06-1.06L10 8.94l1.47-1.47a.75.75 0 111.06 1.06L11.06 10l1.47 1.47a.75.75 0 11-1.06 1.06L10 11.06l-1.47 1.47a.75.75 0 01-1.06-1.06L8.94 10 7.47 8.53a.75.75 0 011.06-1.06L10 8.94l1.47-1.47a.75.75 0 111.06 1.06L11.06 10l1.47 1.47z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <ul className="text-white text-lg font-poppins font-semibold">
                            <li className="py-2">
                                <Link to="/aboutus" className="block px-4 py-2">About Us</Link>
                            </li>
                            <li className="py-2">
                                <Link to="/signyourcompany" className="block px-4 py-2">Sign Your Company</Link>
                            </li>
                            <li className="py-2">
                                <Link to="/login"  className="block px-4 py-2">Log In</Link>
                            </li>
                        </ul>
                        <Link to="signup" className=" lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-sky-950 hover:bg-blue-600 text-sm text-white font-semibold  rounded-md transition duration-200">Sign up</Link>
                    </div>
                </div>
            )}

            {/* Desktop Menu */}
            <div className='lg:flex gap-6'>
            <ul className="hidden lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 lg:justify-end">
                <li className="ml-auto"><Link to="/aboutus" className="font-semibold text-lg text-blue-950 hover:text-blue-600" >About Us</Link></li>
                <li className="ml-auto"><Link to="/signyourcompany" className="font-semibold text-lg text-blue-950 hover:text-blue-600">Sign Your Company</Link></li>
                <li className="ml-auto"><Link to="/login"  className="font-semibold text-lg text-blue-950 hover:text-blue-600" >Log In</Link></li>
                <li className="ml-auto"><Link to="signup" className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-sky-950 hover:bg-blue-600 text-sm text-white font-semibold  rounded-md transition duration-200" >Sign up</Link></li>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;
