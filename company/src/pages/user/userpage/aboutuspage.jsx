import React from 'react';
import Navbar from "../../../component/navbar";
import Footer from "../../../component/footer";
import TestimonialsCarousel from '../../../component/testimonial';

const Aboutus = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <header className="bg-[#0F2C59] text-white py-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 px-6 lg:px-20 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-wider leading-relaxed">About Us</h1>
            <p className="text-xl mt-4 lg:mt-8 font-poppins tracking-wider leading-relaxed font-light">
              We offer a job search platform that facilitates your exploration of various industries, companies, and job positions. Together, we are building a world where people receive the support and resources they need to land the jobs they love.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img src="assets/aboutus1.png" alt="" className="hidden sm:block w-full h-auto" />
          </div>
        </div>
      </header>

      <div className='bg-[#0F2C59]'>
        <section className="container mx-auto py-8 px-6 lg:px-20 ">
          <h1 className="text-4xl font-semibold text-white text-center mb-8">Our Members</h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center">
              <img src="/assets/aboutus2.png" alt="Jobseeker" className="w-64 h-auto md:w-[25rem] md:h-[19rem]" />
              <h3 className="text-2xl font-semibold mt-3 mb-3 text-white">Jobseeker</h3>
              <p className="text-xl mb-3 text-white text-center">Someone actively job hunting</p>
              <p className="text-blue-200 text-center">Join CareerSearch</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/assets/aboutus3.png" alt="Employees" className="w-64 h-auto md:w-[25rem] md:h-[19rem]" />
              <h3 className="text-2xl font-semibold mt-3 mb-3 text-white">Employees</h3>
              <p className="text-xl mb-3 text-white text-center">Someone eager to share their work experience and tell stories about life in the workplace</p>
              <p className="text-blue-200 text-center">Join CareerSearch</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="assets/aboutus4.png" alt="Employer" className="w-64 h-auto md:w-[20rem] md:h-[19rem]" />
              <h3 className="text-2xl font-semibold mt-3 mb-3 text-white">Employer</h3>
              <p className="text-xl mb-3 text-white text-center">A company actively seeking new employees</p>
              <p className="text-blue-200 text-center">Join CareerSearch</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-8 px-6 lg:px-20">
          <h1 className="text-3xl font-semibold text-center mb-8 text-white">Their words about CareerSearch</h1>
          <TestimonialsCarousel/>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default Aboutus;
