import React from "react";
import Navbar from "../component/navbar";

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="bg-[#0F2C59] text-white min-h-[90vh] column-12 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start items-center">
          <div className="py-12 px-6 lg:px-20">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-wider leading-relaxed text-center lg:text-left">Temukan Pekerjaan Impian Anda</h1>
            <p className="text-2xl lg:text-3xl mt-8 lg:mt-16 font-poppins tracking-wider leading-relaxed text-center lg:text-left">Kami menyediakan platform pencarian kerja yang memudahkan Anda menjelajahi berbagai industri, perusahaan, dan posisi pekerjaan.</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative flex justify-center items-center">
          <img src="assets/man_working_table.png" alt="Man working table" className="w-full max-w-xl lg:max-w-3xl h-auto" />
        </div>
      </section>
      <footer className="py-8">
        <div className="container mx-auto flex flex-wrap justify-center gap-16">
          <div className="flex items-center">
            <img src="assets/logo.png" className="w-full h-auto" alt="Logo" />
          </div>
          <div className="flex items-center">
            <div className="flex flex-col">
              <p className="font-semibold mb-2">Company</p>
              <div className="flex flex-col ">
                <p className="text-gray-600 mb-2 lg:mr-4">About Us</p>
                <p className="text-gray-600 mb-2 lg:mr-4">Job’s Page</p>
                <p className="text-gray-600 mb-2 lg:mr-4">Community</p>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col">
              <p className="font-semibold mb-2">Join With Us</p>
              <div className="flex flex-col ">
                <p className="text-gray-600 mb-2 lg:mr-4">Jobseeker</p>
                <p className="text-gray-600 mb-2 lg:mr-4">Employees</p>
                <p className="text-gray-600 mb-2 lg:mr-4">Employer</p>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col">
              <p className="font-semibold mb-2">Follow us</p>
              <div className="flex flex-row lg:flex-col items-center">
                <img src="assets/socmed1.png" className="w-auto h-8 lg:mr-4 mb-2 lg:mb-0" alt="ig" />
                <img src="assets/socmed2.png" className="w-auto h-8 lg:mr-4 mb-2 lg:mb-0" alt="linkedin" />
                <img src="assets/socmed3.png" className="w-auto h-8 lg:mr-4 mb-2 lg:mb-0" alt="yt" />
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center">© 2024 CareerSearch. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
