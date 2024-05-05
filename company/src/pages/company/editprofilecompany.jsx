import React from "react";
import Maincompany from "../../component/maincompany";
import { Link } from 'react-router-dom'; 

const Editprofilecompany = () => {
    return (
      <div className="bg-[#0F2C59] min-h-screen">
        <section>
          <Maincompany />
        </section>
        <section className='container mx-auto p-8'>
          <div className="rounded overflow-hidden shadow-lg bg-gray-100 relative">
            <Link to="/profilecompany">
              <button className="absolute top-3 right-3 hover:bg-blue-700 bg-[#0F2C59] text-white py-2 px-4 rounded-md font-poppins">Save Profile</button>
            </Link>
            <div className="flex flex-col items-center">
              <img src="assets/Revou.png" className="w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem] object-cover mt-5 mb-3" alt="Profile" />
              <p className="text-center text-lg font-poppins mb-5">Revou</p>
            </div>
            <div className="p-5">
              <div className="flex flex-col mb-5">
                <p className="text-left text-lg font-poppins mb-4">About Us</p>
                <div className="mb-4">
                  <textarea className="border-black border p-2 rounded shadow-lg w-full bg-white"></textarea>
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <p className="text-left text-lg font-poppins mb-4">Company Type</p>
                <div className="mb-4">
                  <input type="text" className="border-black border p-2 rounded shadow-lg w-1/2 md:w-full bg-white" />
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <p className="text-left text-lg font-poppins mb-4">Address</p>
                <div className="mb-4">
                  <textarea className="border-black border p-2 rounded shadow-lg w-full bg-white"></textarea>
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <p className="text-left text-lg font-poppins mb-4">Contact Us</p>
                <div className="mb-4">
                  <div className="mb-2">
                    <input type="text" placeholder="Email" className="border-black border p-2 rounded shadow-lg w-1/2 md:w-full bg-white" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" className="border-black border p-2 rounded shadow-lg w-1/2 md:w-full bg-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Editprofilecompany;
