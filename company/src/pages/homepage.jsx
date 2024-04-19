import React from "react";

const Homepage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white py-4 px-6 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src="assets/logo.png" alt="logo" />
        </div>
        
        {/* Navbar Links */}
        <div className="flex space-x-20 items-center"> {/* Added items-center class */}
          <a href="#" className="text-blue-950 hover:text-gray-700">About Us</a>
          <a href="#" className="text-blue-950 hover:text-gray-700">Sign Your Company</a>
          <a href="#" className="text-blue-950 hover:text-gray-700">Log In</a>
          <button className="bg-sky-950 text-white font-semibold py-2 px-4 rounded-md">Sign Up</button>
        </div>
      </nav>

      {/* Main Section */}
      <section className="bg-blue-950 text-white min-h-[90vh]">
        {/* Left Section */}
        <div className="w-full relative flex justify-between items-center">
          <div className="w-1/2 py-12 px-20">
            <h1 className="text-6xl font-bold tracking-wider leading-relaxed">Temukan Pekerjaan Impian Anda</h1>
            <p className="text-4xl mt-48 font-poppins tracking-wider leading-relaxed font-light">Kami menyediakan platform pencarian kerja yang memudahkan Anda menjelajahi berbagai industri, perusahaan, dan posisi pekerjaan.</p>
          </div>
          <div className="absolute right-0 bottom-0">
            <img src="assets/man_working_table.png" alt="Man working table" className="w-[45rem]" />
          </div>
        </div>
        {/* Right Section (Place your image here) */}
        
      </section>
    </div>
  );
};

export default Homepage;
