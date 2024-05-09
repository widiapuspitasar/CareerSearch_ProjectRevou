import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Main from "../../../component/main";
import Searchbar from "../../../component/searchbar";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import axios from 'axios';

const Profilepage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem('userData')).user_id;
    axios.get(`https://backendproject-production-41c5.up.railway.app/about_user/${userId}`)
        .then(response => {
            setUserData(response.data.data);
            localStorage.setItem('name', response.data.data.about_user[0].name);
            localStorage.setItem('role', response.data.data.about_user[0].role);
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
}, []);

const renderProfileButton = () => {
    if (!userData || !userData.about_user || userData.about_user.length === 0) {
        return (
            <button type="submit" className="bg-[#D9D9D9] font-poppins px-4 py-2 rounded self-end"><Link to="/createprofilepage">Create Profile</Link></button>
        );
    }
};

  return (
    <div>
      <header>
        <Main />
        <Searchbar />
      </header>
      <section className='rounded container mt-6 mx-auto p-8 bg-[#0F2C59] font-poppins'>
        <div className='flex gap-4 mb-3 md:w-3/4 mx-auto'>
            {renderProfileButton()}
            <button type="submit" className="bg-[#EADBC8] hover:bg-white font-semibold px-4 py-2 rounded self-end"><Link to="/appliedjobspage">Applied Jobs</Link></button>
        </div>
        <div className="rounded overflow-hidden shadow-lg bg-gray-100 p-3 md:w-3/4 mx-auto">
          <div className='flex justify-center border-b-2 bg-[#EADBC8] '>
            <div className="items-center mb-4 mt-4">
              <img src="assets/profile.png" className="w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem] object-cover" alt="Profile" />
            </div>
          </div>
          <div className='p-5 mt-4'>
            {userData && (
              <div>
                {userData.about_user.map((about, index) => (
                  <div key={index}>
                    <div className='text-right mb-4 mr-6'>
                      <button type="submit" className="bg-[#0F2C59] hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded self-end"><Link to="/editprofilepage">Edit Profile</Link></button>
                    </div>
                    <div className='flex items-center flex-col'>
                      <p className='text-2xl font-semibold'>{about.name}</p>
                      <p className='text-gray-600'>{about.role}</p>
                    </div>
                    <div>
                      <p className='text-lg font-poppins mb-5 mt-5'>About Me</p>
                      <div>
                        <div className="rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 relative">
                          <p>{about.about_user}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className='text-lg font-poppins mb-5 mt-5'>My Skill</p>
                      <div className='grid gap-4  '>
                        <div className="rounded overflow-hidden shadow-lg bg-[#EADBC8] p-3 w-80 ">
                          <ul className="pl-5">
                            {about.skills.map((skill, idx) => (
                              <li key={idx}>{idx + 1}. {skill}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className='text-lg font-poppins mb-5 mt-5'>Contact Me</p>
                      <div className="rounded ml-2 overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 w-[20rem] flex-col">
                        <div className='flex gap-2 '>
                          <svg className="h-6 w-6 text-black" data-testid="MailOutlineIcon"><MailOutlineIcon /></svg>
                          <p>{about.email}</p>
                        </div>
                        <div className='flex gap-2 '>
                          <svg className="h-6 w-6 text-black" data-testid="MailOutlineIcon"><WhatsAppIcon /></svg>
                          <p>{about.phonenumber}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className='text-lg font-poppins mb-5 mt-5'>Resume</p>
                      <div className="rounded ml-2 overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 w-[20rem]  flex-col">
                        <div className='flex gap-2 '>
                          <svg className="h-6 w-6 text-black" data-testid="MailOutlineIcon"><DescriptionOutlinedIcon /></svg>
                          <p>{about.file_resume}</p>
                        </div>
                      </div>
                    </div>
                </div>
                ))}
              </div>
          )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profilepage;
