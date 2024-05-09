import React, { useState, useEffect } from 'react';
import Maincompany from "../../component/maincompany";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Editprofilecompany = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    company_name: "",
    company_type: "",
    address: "",
    email: "",
    phonenumber: "",
    about_us: ""
  });

  useEffect(() => {
    const companyId = JSON.parse(localStorage.getItem('companyData')).company_id;
    axios.get(`https://backendproject-production-41c5.up.railway.app/about_company/${companyId}`)
      .then(response => {
        const companyData = response.data.data;
        const aboutCompany = companyData.about_company && companyData.about_company.length > 0 ? companyData.about_company[0] : {};

        setFormData({
          company_name: aboutCompany.company_name || '',
          company_type: aboutCompany.company_type || '',
          address: aboutCompany.address || '',
          email: aboutCompany.email || '',
          phonenumber: aboutCompany.phonenumber || '',
          about_us: aboutCompany.about_us || ''
        });
      })
      .catch(error => {
        console.error('Error fetching company data:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }));
};
  const handleSubmit = async (e) => {
    e.preventDefault();
    const companyId = JSON.parse(localStorage.getItem('companyData')).company_id;
    try {
        const response = await axios.put(`https://backendproject-production-41c5.up.railway.app/about_company/edit/${companyId}`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Profile company updated successfully:');
        navigate('/profilecompany');
    } catch (error) {
        console.error('Error updating profile:', error);
    }
};

  return (
      <div className="bg-[#0F2C59] min-h-screen">
        <section>
          <Maincompany />
        </section>
        <section className='container mx-auto p-8'>
          <div className="rounded overflow-hidden shadow-lg bg-gray-100 relative">
            <form onSubmit={handleSubmit}>
              <div className='p-10'>
                        <div >
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
                        <div>
                            <button type="submit" className="absolute bottom-3 right-3 hover:bg-blue-700 bg-[#0F2C59] text-white py-2 px-4 rounded-md font-poppins" >Save Profile</button>
                        </div>
                </div>
            </form>
          </div>
        </section>
      </div>
    );
};

export default Editprofilecompany;
