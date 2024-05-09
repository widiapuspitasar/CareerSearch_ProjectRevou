import React, { useState } from 'react';
import axios from 'axios';
import Maincompany from "../../component/maincompany";

import { Link, useNavigate } from 'react-router-dom';

const Createprofilecompany = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        company_name: "",
        company_type: "",
        address: "",
        email: "",
        phonenumber: "",
        about_us: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Data to be submitted:', formData);
  
      try {
        const comapnyId = localStorage.getItem('companyData') ? JSON.parse(localStorage.getItem('companyData')).company_id : null;
        const response = await axios.post(`http://127.0.0.1:5000/about_company/create/${comapnyId}`, formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('Profile created successfully:', response.data);
        navigate('/profilecompany');
      } catch (error) {
        console.error('Error creating profile:', error);
        // Tambahkan logika penanganan error di sini
      }
    };

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
            <form onSubmit={handleSubmit}>
                        <div className="p-5">
                            <div className="flex flex-col mb-5">
                                <p className="text-left text-lg font-poppins mb-4">Company Name</p>
                                <div className="mb-4">
                                    <input type="text" name="company_name" value={formData.company_name} onChange={handleChange} className="border-black border p-2 rounded shadow-lg w-1/2 md:w-full bg-white" />
                                </div>
                            </div>
                            <div className="flex flex-col mb-5">
                                <p className="text-left text-lg font-poppins mb-4">Company Type</p>
                                <div className="mb-4">
                                    <input type="text" name="company_type" value={formData.company_type} onChange={handleChange} className="border-black border p-2 rounded shadow-lg w-1/2 md:w-full bg-white" />
                                </div>
                            </div>
                            <div className="flex flex-col mb-5">
                                <p className="text-left text-lg font-poppins mb-4">Address</p>
                                <div className="mb-4">
                                    <textarea name="address" value={formData.address} onChange={handleChange} className="border-black border p-2 rounded shadow-lg w-full bg-white"></textarea>
                                </div>
                            </div>
                            <div className="flex flex-col mb-5">
                                <p className="text-left text-lg font-poppins mb-4">About Us</p>
                                <div className="mb-4">
                                    <textarea name="about_us" value={formData.about_us} onChange={handleChange} className="border-black border p-2 rounded shadow-lg w-full bg-white"></textarea>
                                </div>
                            </div>
                            <div className="flex flex-col mb-5">
                                <p className="text-left text-lg font-poppins mb-4">Email</p>
                                <div className="mb-4">
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="border-black border p-2 rounded shadow-lg w-1/2 md:w-full bg-white" />
                                </div>
                            </div>
                            <div className="flex flex-col mb-5">
                                <p className="text-left text-lg font-poppins mb-4">Phone Number</p>
                                <div className="mb-4">
                                    <input type="tel" name="phonenumber" value={formData.phonenumber} onChange={handleChange} className="border-black border p-2 rounded shadow-lg w-1/2 md:w-full bg-white" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="absolute top-3 right-3 hover:bg-blue-700 bg-[#0F2C59] text-white py-2 px-4 rounded-md font-poppins">Save Profile</button>
                    </form>
          </div>
        </section>
      </div>
    );
};

export default Createprofilecompany;
