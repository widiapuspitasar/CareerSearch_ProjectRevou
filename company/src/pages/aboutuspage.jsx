import React from 'react';
import Navbar from "../component/navbar";

const Aboutus = () => {
    return (
      <div className="min-h-screen">
        <Navbar />
        <section className="bg-[#0F2C59] text-white py-8">
          <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 px-6 lg:px-20 mb-8 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-wider leading-relaxed">About Us</h1>
              <p className="text-xl mt-4 lg:mt-8 font-poppins tracking-wider leading-relaxed font-light">
                Kami menyediakan platform pencarian kerja yang memudahkan Anda menjelajahi berbagai industri, perusahaan, dan posisi pekerjaan. Bersama-sama, kita membangun dunia di mana orang-orang mendapatkan dukungan dan sumber daya yang mereka perlukan untuk mendapatkan pekerjaan yang mereka sukai.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <img src="assets/sales team.png" alt="" className="w-full h-auto" />
            </div>
          </div>
        </section>

    <div className='bg-[#0F2C59]'>
        <section className="container mx-auto py-8 px-6 lg:px-20 bg-[#0D2750]">
          <h1 className="text-4xl font-semibold text-white text-center mb-8">Our Members</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center">
              <img src="assets/testing.png" alt="Jobseeker" className="w-full h-auto md:w-[25rem] md:h-[10rem]" />
              <h3 className="text-2xl font-semibold mt-3 mb-3 text-white">Jobseeker</h3>
              <p className="text-xl mb-3 text-white text-center">Seseorang yang sedang aktif mencari pekerjaan.</p>
              <p className="text-blue-200 text-center">Join CareerSearch</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="assets/employees.png" alt="Employees" className="w-full h-auto md:w-[25rem] md:h-[10rem]" />
              <h3 className="text-2xl font-semibold mt-3 mb-3 text-white">Employees</h3>
              <p className="text-xl mb-3 text-white text-center">Seseorang yang ingin memberikan pengalaman bekerja dan bercerita tentang kehidupan di tempat kerja.</p>
              <p className="text-blue-200 text-center">Join CareerSearch</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="assets/business deal.png" alt="Employer" className="w-full h-auto md:w-[25rem] md:h-[10rem]" />
              <h3 className="text-2xl font-semibold mt-3 mb-3 text-white">Employer</h3>
              <p className="text-xl mb-3 text-white text-center">Perusahaan yang sedang aktif mencari karyawan baru.</p>
              <p className="text-blue-200 text-center">Join CareerSearch</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-8 px-6 lg:px-20">
        <h1 className="text-3xl font-semibold text-center mb-8 text-white">Kata mereka tentang CareerSearch</h1>
            <div className="rounded overflow-hidden shadow-lg bg-[#F9F7F7] flex flex-col sm:flex-row p-3">
                <div className="w-full sm:w-1/3 flex flex-col items-center justify-center p-3">
                <img src="assets/user.png" className="w-64 h-64" alt="Profile" />
                <div className="text-center mt-2">
                    <p className="font-bold text-lg">John Doe</p>
                    <p className="font-bold text-lg">Jobseeker</p>
                </div>
                </div>
                <div className="w-full sm:w-2/3 bg-gray-100 p-3">
                <p className="text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam et risus sodales ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam et risus sodales ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam et risus sodales ullamcorper.
                </p>
                </div>
            </div>
        </section>

        </div>

        <footer className="py-8">
          <div className="container mx-auto flex flex-wrap justify-center gap-16">
            <div className="flex items-center">
              <img src="assets/logo.png" className="w-full h-auto" alt="Logo" />
            </div>
            <div className="flex items-center">
              <div className="flex flex-col">
                <p className="font-semibold mb-2">Company</p>
                <div className="flex flex-col items-center">
                  <p className="text-gray-600 mb-2">About Us</p>
                  <p className="text-gray-600 mb-2">Job’s Page</p>
                  <p className="text-gray-600 mb-2">Community</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col">
                <p className="font-semibold mb-2">Join With Us</p>
                <div className="flex flex-col items-center">
                  <p className="text-gray-600 mb-2">Jobseeker</p>
                  <p className="text-gray-600 mb-2">Employees</p>
                  <p className="text-gray-600 mb-2">Employer</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col">
                <p className="font-semibold mb-2">Follow us</p>
                <div className="flex flex-col items-center">
                  <img src="assets/socmed1.png" className="w-auto h-8" alt="ig" />
                  <img src="assets/socmed2.png" className="w-auto h-8" alt="linkedin" />
                  <img src="assets/socmed3.png" className="w-auto h-8" alt="yt" />
                </div>
              </div>
            </div>
          </div>
          <p className="mt-10 text-center">© 2024 CareerSearch. All rights reserved.</p>
        </footer>
      </div>
    );
};

export default Aboutus;
