import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Maincompany from "../../component/maincompany";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import axios from 'axios';

const Profileuser = () => {
  const [userData, setUserData] = useState(null);
  const [newStatus, setNewStatus] = useState('');
  const { user_id } = useParams();
  const { apply_job_id } = useParams();

  useEffect(() => {
    axios.get(`https://backendproject-production-41c5.up.railway.app/about_user/${user_id}`)
        .then(response => {
            setUserData(response.data.data);
            localStorage.setItem('name', response.data.data.about_user[0].name);
            localStorage.setItem('role', response.data.data.about_user[0].role);
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
}, []);

const handleStatusUpdate = () => {
  axios.put(`https://backendproject-production-41c5.up.railway.app/status_update/${user_id}/${apply_job_id}`, { status: newStatus })
    .then(response => {
        console.log(response.data);
        alert('Status updated successfully!');
    })
    .catch(error => {
        console.error('Error updating status:', error);
        alert('Failed to update status. Please try again later.');
    });
};


  return (
    <div>
      <header>
        <Maincompany/>
      </header>
      <section className='container mt-6 mx-auto p-8 bg-blue-900'>
        
        <div className="rounded overflow-hidden shadow-lg bg-gray-100 p-3">
          <div className='flex justify-center border-b-2 bg-[#EADBC8]'>
            <div className="items-center mb-4 mt-4">
              <img src="/assets/profile.png" className="w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem] object-cover" alt="Profile" />
            </div>
          </div>
          <div className='p-5 mt-4'>
            {userData && (
              <div>
                {userData.about_user.map((about, index) => (
                  <div key={index}>
                    
                    <div className='flex items-center flex-col'>
                      <p className='text-2xl font-poppins'>{about.name}</p>
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
                      <div className="rounded ml-2 overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 w-60 flex-col">
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
                      <div className="rounded ml-2 overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 w-60  flex-col">
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
            <div className='text-right mb-4 mr-2 mt-5'>
              <select className="bg-[#0F2C59] text-white font-poppins px-4 py-2 rounded self-end mr-2" value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                <option value="">Select status</option>
                <option value="Submitted">Submitted</option>
                <option value="In process">In process</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
              </select>
              <button type="submit" className="bg-[#0F2C59] text-white font-poppins px-4 py-2 rounded self-end" onClick={handleStatusUpdate}>Update Status</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Profileuser;
