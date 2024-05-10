import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';

const Main = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [userData, setUserData] = useState(null);
    const [companyData, setCompanyData] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
    
    const [name, setName] = useState('');
    const [role, setRole] = useState('');

    const toggleExpand = () => {
        const name = localStorage.getItem('name');
        const role = localStorage.getItem('role');
    
        if (name && role) {
            setIsExpanded(!isExpanded);
            setName(name);
            setRole(role);
        }
    };

    useEffect(() => {
        const userDataString = localStorage.getItem('userData');
        if (userDataString) {
            const userData = JSON.parse(userDataString);
            setUserData(userData);
        }
        const companyDataString = localStorage.getItem('companyData');
        if (companyDataString) {
            const companyData = JSON.parse(companyDataString);
            setCompanyData(companyData);
        }
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleLogout = () => {
        axios.get('https://backendproject-production-41c5.up.railway.app/logout')
            .then(response => {
                console.log(response.data); 
                localStorage.clear(); 
                setUserData(null);
                setCompanyData(null); 
                navigate('/'); 
            })
            .catch(error => {
                console.error('Error logging out:', error);
            });
    };

    return (
        <nav className="relative px-5 lg:px-5 pt-4 flex justify-between items-center bg-white container mx-auto">
            
            {/* Logo */}
            <div className="flex items-center">
                <Link to="/"><img src="/assets/logo.png" alt="logo" className="w-32"/></Link>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
                <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={toggleMenu}>
                    <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed top-0 right-0 w-1/2 h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 ">
                    <div className=" rounded-lg p-4">
                        <button className="absolute top-0 right-0 m-4" onClick={closeMenu}>
                            <svg className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.41-1.41a.75.75 0 011.06-1.06L10 8.94l1.47-1.47a.75.75 0 111.06 1.06L11.06 10l1.47 1.47a.75.75 0 11-1.06 1.06L10 11.06l-1.47 1.47a.75.75 0 01-1.06-1.06L8.94 10 7.47 8.53a.75.75 0 011.06-1.06L10 8.94l1.47-1.47a.75.75 0 111.06 1.06L11.06 10l1.47 1.47z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <ul className="text-white text-lg font-poppins font-semibold">
                            <li className="py-2">
                                <Link to="/mainpage" className="block px-4 py-2">Jobs</Link>
                            </li>
                            <li className="py-2">
                                <Link to="/communitypage" className="block px-4 py-2">Community</Link>
                            </li>
                            <li className="py-2">
                                <Link to="/blogpage"  className="block px-4 py-2">Blog</Link>
                            </li>
                            <li className="py-2 flex">
                                <Link to="/profilepage"  className="block px-4 py-2">Profile</Link>
                               
                            </li>
                            
                            <li className="py-2 flex">
                                <button onClick={handleLogout} className="font-semibold text-lg text-white hover:text-blue-600 ml-4"><Link to="/">Logout</Link></button>
                               
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            {isExpanded && (
                <div className="fixed top-0 right-0 mt-16 mr-4 bg-white rounded-lg shadow-lg p-4 z-50">
                    <div className="flex items-center">
                        <div className="mr-3">
                            <p className="font-semibold">{name}</p>
                            <p className="text-sm">{role}</p>
                        </div>
                        <div>
                            <img src="/assets/profile.png" className="w-[4rem] h-[4rem] md:w-[4rem] md:h-[4rem] object-cover" alt="Profile" />
                        </div>
                    </div>
                    <div className="flex mt-4">
                        <div className='flex flex-col items-start'>
                        <Link to="/profilepage"> <button className="">View Profile</button></Link>
                        <Link to="/appliedjobspage"> <button className="">Applied Jobs</button></Link>
                        </div>
                    </div>
                    <div className="mt-4 text-right">
                        <button onClick={handleLogout} className="font-semibold text-lg text-blue-950 hover:text-blue-600"><Link to="/">Logout</Link></button>
                    </div>
                </div>
            )}

            {/* Desktop Menu */}
            <ul className="hidden lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 lg:justify-end">
                <li><Link to="/mainpage" className="font-semibold text-lg text-blue-950 hover:text-blue-600" >Jobs</Link></li>
                <li><Link to="/communitypage" className="font-semibold text-lg text-blue-950 hover:text-blue-600">Community</Link></li>
                <li><Link to="/blogpage"  className="font-semibold text-lg text-blue-950 hover:text-blue-600" >Blog</Link></li>
            </ul>
            <div className="hidden lg:flex lg:items-center " >
                <ul className="hidden lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 lg:justify-end"> 
                    <li onClick={toggleExpand}>  <AccountCircleOutlinedIcon sx={{ fontSize: 30 }}/> </li>
                </ul>
            </div>
        </nav>
    );
};

export default Main;
