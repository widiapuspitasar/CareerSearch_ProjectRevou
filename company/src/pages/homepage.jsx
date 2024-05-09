import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="bg-[#0F2C59] text-white min-h-[90vh] column-12 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start items-center">
          <div className="py-12 px-6 lg:px-20">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-wider leading-relaxed text-center lg:text-left">
              Discover Your Dream Job
            </h1>
            <p className="text-2xl lg:text-3xl mt-8 lg:mt-16 font-poppins tracking-wider leading-relaxed text-center lg:text-left">
              We provide a job search platform that makes it easy for you to explore various industries, companies, and job positions
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative flex justify-center items-center">
          <img src="assets/homepage.png" alt="Man working table" className="w-full max-w-xl lg:max-w-3xl h-auto mr-0" />
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Homepage;
