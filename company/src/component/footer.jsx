import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <footer className="py-8">
          <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between gap-8">
              <div className="mb-4 md:mb-0 ml-5">
                  <img src="assets/logo.png" className="w-32 h-auto" alt="Logo" />
              </div>
              <div className="flex flex-col items-center md:items-start">
                  <p className="font-semibold mb-2">Company</p>
                  <div className="flex flex-col items-center md:items-start">
                      <p className="text-gray-600 mb-2">About Us</p>
                      <p className="text-gray-600 mb-2">Job’s Page</p>
                      <p className="text-gray-600 mb-2">Community</p>
                  </div>
              </div>
              <div className="flex flex-col items-center md:items-start">
                  <p className="font-semibold mb-2">Join With Us</p>
                  <div className="flex flex-col items-center md:items-start">
                      <p className="text-gray-600 mb-2">Jobseeker</p>
                      <p className="text-gray-600 mb-2">Employees</p>
                      <p className="text-gray-600 mb-2">Employer</p>
                  </div>
              </div>
              <div className="flex flex-col items-center md:items-start mr-10">
                  <p className="font-semibold mb-2">Follow us</p>
                  <div className="flex items-center flex-col">
                      <Link to='https://www.instagram.com/'><img src="/assets/socmed1.png" className="w-auto h-8 mr-2" alt="ig" /></Link>
                      <Link to='https://www.linkedin.com/'><img src="/assets/socmed2.png" className="w-auto h-8 mr-2" alt="linkedin" /></Link>
                      <Link to='https://www.youtube.com/'><img src="assets/socmed3.png" className="w-auto h-8 mr-2" alt="yt" /></Link>
                  </div>
              </div>
          </div>
          <p className="mt-10 text-center text-gray-600">© 2024 CareerSearch. All rights reserved.</p>
      </footer>
  );
};

export default Footer;
