import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import Main from "../../../component/main";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import axios from 'axios';

const CompanyProfile = () => {
    const { company_id } = useParams();
    const [companyData, setCompanyData] = useState({});

    useEffect(() => {
        
        axios.get(`https://backendproject-production-41c5.up.railway.app/about_company/${company_id}`)
            .then(response => {
                setCompanyData(response.data.data);
                localStorage.setItem('company_type', response.data.data.about_company[0].company_type);
                localStorage.setItem('company_name', response.data.data.company.company_name);
            })
            .catch(error => {
                console.error('Error fetching company data:', error);
            });
    }, []);


    return (
        <div className=" min-h-screen">
            <section>
                <Main/>
            </section>
            <section className='rounded container mx-auto mt-5 p-10 bg-[#0F2C59]'>
                <div className="rounded overflow-hidden shadow-lg gap-4  bg-gray-100 relative mx-auto md:w-2/3">
                    <div className='flex flex-col justify-center items-center py-8 ml-10 mr-10 font-poppins '>
                        <div className="p-5">
                            {companyData && companyData.about_company && companyData.about_company.map((aboutCompanyData, index)=> (
                                <div key={index}>
                                    <div className="flex flex-col items-center mb-5">
                                        <img src="/assets/company_logo.png" className="w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem] object-cover mb-3" alt="Profile" />
                                        <p className="text-center text-lg font-poppins mb-5 font-bold">{aboutCompanyData.company_name}</p>
                                    </div>
                                    
                                    <div className="flex flex-col mb-5">
                                        <p className='text-lg font-poppins  mb-1 font-semibold'>About Us</p>
                                        <p className='text-gray-600'>{aboutCompanyData.about_us}</p>
                                    </div>
                                    <div className="flex flex-col mb-5">
                                        <p className='text-lg  mb-1 font-semibold'>Company Type</p>
                                        <p className='text-gray-600'>{aboutCompanyData.company_type}</p>
                                    </div>
                                    <div className="flex flex-col mb-5">
                                        <p className='text-lg mb-1 font-semibold'>Address</p>
                                        <p className='text-gray-600'>{aboutCompanyData.address}</p>
                                    </div>
                                    <div className="flex flex-col mb-5">
                                        <p className='  mb-1 font-semibold'>Contact Us</p>
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

export default CompanyProfile;
