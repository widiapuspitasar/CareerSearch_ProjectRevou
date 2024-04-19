import React from 'react';
import Navbar from "../component/navbar";

class Aboutus extends React.Component {
  render() {
    return (
      <div className="min-h-[100vh]">
        <Navbar />
        <section className="bg-blue-900">
          <div className="container mx-auto py-8 flex items-center column-12">
            <div className="w-1/2 text-white">
              <h1 className="text-4xl font-bold tracking-wider leading-relaxed">About Us</h1>
              <p className="text-xl mt-4 font-poppins tracking-wider leading-relaxed font-light">
              Kami menyediakan platform pencarian kerja yang memudahkan Anda menjelajahi berbagai industri, perusahaan, dan posisi pekerjaan. Bersama-sama, kita membangun dunia di mana orang-orang mendapatkan dukungan dan sumber daya yang mereka perlukan untuk mendapatkan pekerjaan yang mereka sukai.
              </p>
            </div>
            <div className="w-1/2">
              <img src="assets/sales team.png" alt="" className="w-full h-auto" />
            </div>
          </div>
          <section className="container mx-auto py-8 px-8 bg-blue-950">
          <h1 className="text-4xl font-semibold text-white text-center mb-8">Our Members</h1>
          <div className="flex justify-center gap-10 flex-col md:flex-row md:items-center">
            <div className='w-64 flex flex-col items-center flex-grow'>
              <img src="assets/testing.png"  alt="Jobseeker" className="w-[25rem] h-[10rem]"/>
              <h3 className='text-2xl font-semibold text-white mt-3 mb-3'>Jobseeker</h3>
              <p className='text-xl text-white mb-3 text-justify'>Seseorang yang sedang aktif mencari pekerjaan.</p>
              <p className='text-blue-200'>Join CareerSearch</p>
            </div>
            <div className='w-64 flex flex-col items-center flex-grow'>
              <img src="assets/employees.png"  alt="Employees" className="w-[25rem] h-[10rem]"/>
              <h3 className='text-2xl font-semibold text-white mt-3 mb-3'>Employees</h3>
              <p className='text-xl text-white mb-3 text-justify'>Seseorang yang ingin memberikan pengalaman bekerja dan bercerita tentang kehidupan di tempat kerja.</p>
              <p className='text-blue-200'>Join CareerSearch</p>
            </div>
            <div className='w-64 flex flex-col items-center flex-grow'>
              <img src="assets/business deal.png"  alt="Employer" className="w-[25rem] h-[10rem]"/>
              <h3 className='text-2xl font-semibold text-white mt-3 mb-3'>Employer</h3>
              <p className='text-xl text-white mb-3 text-justify'>Perusahaan yang sedang aktif mencari karyawan baru.</p>
              <p className='text-blue-200'>Join CareerSearch</p>
            </div>
          </div>
        </section>
        <div className="container mx-auto py-8 px-8 ">
          <h1 className="text-3xl font-semibold text-center mb-8 text-white">Kata mereka tentang CareerSearch</h1>
          <div className="flex flex-wrap justify-center ">
            <div className="rounded overflow-hidden shadow-lg mx-4 mb-8 bg-gray-100 flex p-3" style={{ width: '870px', height: '329px'}}>
              <div className="w-1/3 flex flex-col items-center">
                <img src="assets/user.png"  className="w-64 h-64" alt="Profile" />
                <p className="font-bold text-lg text-center">John Doe</p>
                <p className="font-bold text-lg text-center">Jobseeker</p>
              </div>
              <div className="w-2/3 px-6 py-4 flex items-center">
                <p className="text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam et risus sodales ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam et risus sodales ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam et risus sodales ullamcorper.  
                </p>
              </div>
            </div>
            <div className='flex items-center'>
              <p className='text-white'>icon</p>
            </div>
          </div>
        </div>
      </section>
      <section className='mx-auto gap-16 mx-3 my-10'>
        <div className='flex flex justify-center gap-16'>
          <div className="flex items-center">
            <img src="assets/logo.png"  className="w-full h-auto" alt="Logo" />
          </div>
          <div className="flex items-center ml-8">
            <div className='flex flex-col'>
            <p className="font-semibold mb-2">Company</p>
            <div className='flex flex-col items-center'>
            <p className="text-gray-600 mb-2">About Us</p>
            <p className="text-gray-600 mb-2">Job’s Page</p>
            <p className="text-gray-600 mb-2">Community</p>
            </div>
            </div>
          </div>
          <div className="flex items-center ml-8">
          <div className='flex flex-col'>
            <p className="font-semibold mb-2">Join With Us</p>
            <div className='flex flex-col items-center'>
            <p className="text-gray-600 mb-2">Jobseeker</p>
            <p className="text-gray-600 mb-2">Employees</p>
            <p className="text-gray-600 mb-2"> Employer</p>
            </div>
            </div>
          </div>
          <div className="flex items-center ml-8">
          <div className='flex flex-col'>
            <p className="font-semibold mb-2">Follow us</p>
            <div className='flex flex-col items-center'>
            <img src="assets/socmed1.png"  className="w-auto h-8" alt="ig" />
            <img src="assets/socmed2.png"  className="w-auto h-8" alt="linkedin" />
            <img src="assets/socmed3.png"  className="w-auto h-8" alt="yt" />
            </div>
            </div>
          </div>
        </div>
          <p className='mt-10 text-center'>© 2024 CareerSearch. All rights reserved.</p>
      </section>
    </div>
    );
  }
}
export default Aboutus;
