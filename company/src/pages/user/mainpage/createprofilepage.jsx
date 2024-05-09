import React, { useState } from 'react';
import axios from 'axios';
import Main from "../../../component/main";
import Searchbar from "../../../component/searchbar";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { Link, useNavigate } from 'react-router-dom';

const CreateProfilePage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      name: '',
      role: '',
      skills: [],
      phonenumber: '',
      email: '',
      about_user: '',
      file_resume: ''
    });

    const [newSkill, setNewSkill] = useState('');

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };

    const handleAddSkill = () => {
      if (newSkill.trim() !== '') {
        setFormData((prevData) => ({
          ...prevData,
          skills: [...prevData.skills, newSkill],
        }));
        setNewSkill('');
      }
    };

    const handleRemoveSkill = (index) => {
      setFormData((prevData) => ({
        ...prevData,
        skills: prevData.skills.filter((_, i) => i !== index),
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Cetak data yang akan dikirim ke backend
      console.log('Data to be submitted:', formData);
  
      try {
        const userId = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user_id : null;
        const response = await axios.post(`https://backendproject-production-41c5.up.railway.app/about_user/create/${userId}`, formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('Profile created successfully:', response.data);
        navigate('/profilepage');
      } catch (error) {
        console.error('Error creating profile:', error);
        // Tambahkan logika penanganan error di sini
      }
    };

    return (
        <div>
            <section>
                <Main />
                <Searchbar />
            </section>
            <section className='container mt-6 mx-auto p-8 bg-[#0F2C59] '>
                <div className='flex gap-4 mb-3'>
                    <button type="submit" className="bg-[#D9D9D9] font-poppins px-4 py-2 rounded self-end"><Link to="/profilepage">Profile</Link></button>
                    <button type="submit" className="bg-[#D9D9D9] font-poppins px-4 py-2 rounded self-end"><Link to="/appliedjobspage">Applied Jobs</Link></button>
                </div>
                <div className="rounded overflow-hidden shadow-lg bg-gray-100 p-3 ">
                    <div className='flex justify-center border-b-2 bg-[#EADBC8]'>
                        <div className="items-center mb-4 mt-4">
                            <img src="assets/profile.png" className="w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem] object-cover" alt="Profile" />
                        </div>
                    </div>
                    <div className='p-5 mt-4'>
                        <div className='text-right mb-4 mr-6'>
                            <button type="submit" className="bg-[#0F2C59] text-white font-poppins px-4 py-2 rounded self-end"><Link to="/profilepage">Save Profile</Link></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <p className='text-lg font-poppins mb-5 mt-5'>Full Name</p>
                                <div>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 relative w-full" placeholder="Isi Nama Lengkap Dirimu" />
                                </div>
                            </div>
                            <div>
                                <div>
                                <p className='text-lg font-poppins mb-5 mt-5'>Role</p>
                                    <div>
                                        <input type="text" name="role" value={formData.role} onChange={handleChange} className="rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 relative w-full" placeholder="Isi Role Dirimu" />
                                    </div>
                                </div>
                                <div>
                                    <p className='text-lg font-poppins mb-5 mt-5'>About Me</p>
                                    <div>
                                        <textarea name="about_user" value={formData.about_user} onChange={handleChange} className="rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 relative w-full h-32" placeholder="Isi Deskripsi dirimu"></textarea>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-lg font-poppins mb-5 mt-5'>My Skill</p>
                                    <div>
                                        {formData.skills.map((skill, index) => (
                                            <div key={index} className="flex items-center mb-2">
                                                <p className="rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 w-60 justify-center text-gray-600">{skill}</p>
                                                <button onClick={() => handleRemoveSkill(index)} className="ml-2">Remove</button>
                                            </div>
                                        ))}
                                        <input
                                            type="text"
                                            value={newSkill}
                                            onChange={(e) => setNewSkill(e.target.value)}
                                            placeholder="Type Here...."
                                            className="rounded overflow-hidden shadow-lg bg-[#EADBC8] p-3 w-60 flex justify-center text-gray-600"
                                        />
                                        <button type="button" onClick={handleAddSkill}>Add Skill</button>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-lg font-poppins mb-5 mt-5'>Contact Me</p>
                                    <div className="rounded overflow-hidden shadow-lg bg-[#EADBC8] p-3 w-60 flex items-center flex-col">
                                        <div className='flex gap-2'>
                                            <MailOutlineIcon className="h-6 w-6 text-black" />
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="rounded overflow-hidden bg-[#EADBC8] flex justify-center text-gray-600" placeholder="add email" />
                                        </div>
                                        <div className='flex gap-2'>
                                            <WhatsAppIcon className="h-6 w-6 text-black" />
                                            <input type="text" name="phonenumber" value={formData.phonenumber} onChange={handleChange} className="rounded overflow-hidden  bg-[#EADBC8] flex justify-center text-gray-600" placeholder="add number" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-lg font-poppins mb-5 mt-5'>Resume</p>
                                    <div className="rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 w-60 items-center flex-col">
                                        <div className='flex gap-2'>
                                            <DescriptionOutlinedIcon className="h-6 w-6 text-black" />
                                            <input type="text" name="file_resume" value={formData.file_resume} onChange={handleChange} className="rounded overflow-hidden bg-[#EADBC8] flex justify-center text-gray-600" placeholder="add resume" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="bg-blue-950 text-white font-poppins px-4 py-2 rounded self-end mt-8">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CreateProfilePage;
