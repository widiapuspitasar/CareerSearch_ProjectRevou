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
          <img src="assets/man_working_table.png" alt="Man working table" className="w-full max-w-lg lg:w-[35rem] h-auto" />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
