import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Maincompany from "../../component/maincompany";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import axios from 'axios';

const Profilecompany = () => {
    const [companyData, setCompanyData] = useState({});

    useEffect(() => {
        const companyId = JSON.parse(localStorage.getItem('companyData')).company_id;
        axios.get(`https://backendproject-production-41c5.up.railway.app/about_company/${companyId}`)
            .then(response => {
                setCompanyData(response.data.data);
                localStorage.setItem('company_type', response.data.data.about_company[0].company_type);
                localStorage.setItem('company_name', response.data.data.company.company_name);
            })
            .catch(error => {
                console.error('Error fetching company data:', error);
            });
    }, []);

    const renderCreateProfileCompany = () => {
      if (!companyData || !companyData.about_company || companyData.about_company.length === 0) {
          return (
              <button type="submit" className="absolute top-3 right-3 hover:bg-blue-700 bg-[#0F2C59] text-white py-2 px-4 rounded-md font-poppins"><Link to="/createprofilecompany">Create Profile</Link></button>
          );
      }
  };

    return (
        <div className=" min-h-screen">
            <section>
                <Maincompany />
            </section>
            <section className='rounded container mx-auto mt-5 p-10 bg-[#0F2C59]'>
                <div className="rounded overflow-hidden shadow-lg gap-4  bg-gray-100 relative md:m-10">
                    {renderCreateProfileCompany()}
                    <div className='flex flex-col justify-center items-center py-8 ml-10 mr-10 '>
                        <div className="p-5">
                            {companyData && companyData.about_company && companyData.about_company.map((aboutCompanyData, index)=> (
                                <div key={index}>
                                    <div className="flex flex-col items-center mb-5">
                                        <img src="assets/company_logo.png" className="w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem] object-cover mb-3" alt="Profile" />
                                        <p className="text-center text-lg font-poppins mb-5">{aboutCompanyData.company_name}</p>
                                    </div>
                                    <button className="absolute top-3 right-3 hover:bg-blue-700 bg-[#0F2C59] text-white py-2 px-4 rounded-md font-poppins"><Link to="/editprofilecompany">Edit Profile</Link></button>
                                    <div className="flex flex-col mb-5">
                                        <p className='text-lg font-poppins mb-5'>About Us</p>
                                        <p className='text-gray-600'>{aboutCompanyData.about_us}</p>
                                    </div>
                                    <div className="flex flex-col mb-5">
                                        <p className='text-lg font-poppins mb-5'>Company Type</p>
                                        <p className='text-gray-600'>{aboutCompanyData.company_type}</p>
                                    </div>
                                    <div className="flex flex-col mb-5">
                                        <p className='text-lg font-semipoppinsbold mb-5'>Address</p>
                                        <p className='text-gray-600'>{aboutCompanyData.address}</p>
                                    </div>
                                    <div className="flex flex-col mb-5">
                                        <p className=' mb-5'>Contact Us</p>
                                        <div className='flex gap-2'>
                                            <svg className="h-6 w-6 text-black" data-testid="MailOutlineIcon"><MailOutlineIcon /></svg>
                                            <p>{aboutCompanyData.email}</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <svg className="h-6 w-6 text-black" data-testid="MailOutlineIcon"><WhatsAppIcon /></svg>
                                            <p>{aboutCompanyData.phonenumber}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profilecompany;
