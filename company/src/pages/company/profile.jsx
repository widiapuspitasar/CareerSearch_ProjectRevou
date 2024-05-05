import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Maincompany from "../../component/maincompany";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const Profile = () => {
  const [showStatusOptions, setShowStatusOptions] = useState(false);

  const updateStatus = () => {
    setShowStatusOptions(true);
  }

  const setStatus = (status) => {
    console.log("Status Set: " + status);
    setShowStatusOptions(false);
  }

  return (
    <div>
      <section>
        <Maincompany />
      </section>
      <section className='container mt-6 mx-auto p-8 bg-blue-900'>
        <div className="rounded overflow-hidden shadow-lg bg-gray-100 p-3">
          <div className='flex justify-center border-b-2 bg-[#EADBC8]'>
            <div className="items-center mb-4 mt-4">
              <img src="assets/profile.png" className="w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem] object-cover" alt="Profile" />
            </div>
          </div>
          <div className='p-5 mt-4'>
            <div className='flex items-center flex-col'>
              <p className='text-2xl font-poppins'>Lee Dohyun</p>
              <p className='text-gray-600'>Software Engineering</p>
            </div>
            <div>
              <p className='text-lg font-poppins mb-5 mt-5'>About Me</p>
              <div>
                <div className="rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 relative">
                  <p>Saya adalah lulusan IT dari salah satu universitas terkemuka di Indonesia, dengan keahlian dalam pengembangan perangkat lunak dan teknologi informasi. </p>
                </div>
              </div>
            </div>
            <div>
              <p className='text-lg font-poppins mb-5 mt-5'>My Skill</p>
              <div className='grid gap-4'>
                <div className="rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 w-60 flex justify-center">
                  <p className=''>Frontend Developer</p>
                </div>
                <div className="rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 w-60 flex justify-center">
                  <p className=''>Backend Developer</p>
                </div>
                <div className="rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 w-60 flex justify-center">
                  <p className=''>Web Developer</p>
                </div>
              </div>
            </div>
            <div>
              <p className='text-lg font-poppins mb-5 mt-5'>Contact Me</p>
              <div className="rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 w-60 flex items-center flex-col">
                <div className='flex gap-2'>
                  <svg className="h-6 w-6 text-black" data-testid="MailOutlineIcon"><MailOutlineIcon /></svg>
                  <p>revou@gmail.com</p>
                </div>
                <div className='flex gap-2'>
                  <svg className="h-6 w-6 text-black" data-testid="MailOutlineIcon"><WhatsAppIcon /></svg>
                  <p>+6285745608917</p>
                </div>
              </div>
            </div>
            <div>
              <p className='text-lg font-poppins mb-5 mt-5'>Resume</p>
              <div className="rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 w-60 flex items-center flex-col">
                <div className='flex gap-2'>
                  <svg className="h-6 w-6 text-black" data-testid="MailOutlineIcon"><DescriptionOutlinedIcon /></svg>
                  <p>Resume_Leedohyun</p>
                </div>
              </div>
              <div id="status-container" className='text-right mb-4 mr-6 mt-4'>
                {showStatusOptions && (
                  <div id="status-options" className='flex flex-col gap-2 mb-3 items-end mt-4'>
                    <button className="bg-[#0F2C59] text-white font-poppins px-4 py-2 rounded status-option text-center" style={{width:'142px'}}>Dalam Proses</button>
                    <button className="bg-[#0F2C59] text-white font-poppins px-4 py-2 rounded status-option text-center" style={{width:'142px'}}>Diterima</button>
                    <button className="bg-[#0F2C59] text-white font-poppins px-4 py-2 rounded status-option text-center" style={{width:'142px'}}>Ditolak</button>
                  </div>
                )}
                <button id="update-status-btn" onClick={updateStatus} className="bg-[#0F2C59] text-white font-poppins px-4 py-2 rounded">Update Status</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
