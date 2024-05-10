import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Main from "../../../component/main";

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import axios from 'axios';

const EditProfilePage = () => {
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

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem('userData')).user_id;
        axios.get(`https://backendproject-production-41c5.up.railway.app/about_user/${userId}`)
            .then(response => {
                const userData = response.data.data;
                const aboutUser = userData.about_user && userData.about_user.length > 0 ? userData.about_user[0] : {}; 
                const skillsArray = Array.isArray(userData.skills) ? userData.skills : [];
                const uniqueSkills = [...new Set([...aboutUser.skills, ...skillsArray])];
                setFormData({
                    name: aboutUser.name || '',
                    role: aboutUser.role || '',
                    skills: uniqueSkills,
                    phonenumber: aboutUser.phonenumber || '',
                    email: aboutUser.email || '',
                    about_user: aboutUser.about_user || '',
                    file_resume: aboutUser.file_resume || ''
                });
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
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

        const userId = JSON.parse(localStorage.getItem('userData')).user_id;
        try {
            const response = await axios.put(`https://backendproject-production-41c5.up.railway.app/about_user/edit/${userId}`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Profile updated successfully:');
            navigate('/profilepage');
        } catch (error) {
            console.error('Error updating profile:', error);
        }
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
        setFormData((prevData) => {
            const updatedSkills = prevData.skills.filter((_, i) => i !== index);
            return {
                ...prevData,
                skills: updatedSkills,
            };
        });
    };

    return (
        <div>
            <header>
                <Main />
            </header>
            <section className='rounded container mt-6 mx-auto p-8 bg-[#0F2C59] font-poppins'>
                <div className='flex gap-4 mb-3 md:w-3/4 mx-auto font-semibold'>
                    <button type="submit" className="bg-[#D9D9D9] font-poppins px-4 py-2 rounded self-end"><Link to="/profilepage">Profile</Link></button>
                    <button type="submit" className="bg-[#D9D9D9] font-poppins px-4 py-2 rounded self-end"><Link to="/appliedjobspage">Applied Jobs</Link></button>
                </div>
                <div className="rounded overflow-hidden shadow-lg bg-gray-100 p-3 md:w-3/4 mx-auto ">
                    <div className='flex justify-center border-b-2 bg-[#EADBC8]'>
                        <div className="items-center mb-4 mt-4">
                            <img src="assets/profile.png" className="w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem] object-cover" alt="Profile" />
                        </div>
                    </div>
                    <div className='p-5 mt-4'>
                        <form onSubmit={handleSubmit}>
                            <div>
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
                                            <textarea
                                                name="about_user"
                                                value={formData.about_user}
                                                onChange={handleChange}
                                                className="rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 relative w-full h-32"
                                                placeholder="Isi Deskripsi dirimu"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-lg font-poppins mb-5 mt-5'>My Skill</p>
                                        <div>
                                            {formData.skills && formData.skills.map((skill, index) => (
                                                <div key={index} className="flex items-center mb-2">
                                                    <p className="relative w-full rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 md:w-60 justify-center text-gray-600">{skill}</p>
                                                    <button onClick={() => handleRemoveSkill(index)} className="ml-2">Remove</button>
                                                </div>
                                            ))}
                                            <input
                                                type="text"
                                                value={newSkill}
                                                onChange={(e) => setNewSkill(e.target.value)}
                                                placeholder="Type Here...."
                                                className="rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 w-60 justify-center text-gray-600"
                                            />
                                            <button type="button" onClick={handleAddSkill}>Add Skill</button>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-lg font-poppins mb-5 mt-5'>Contact Me</p>
                                        <div className="rounded overflow-hidden shadow-lg bg-[#EADBC8] p-3 md:w-[20rem] flex flex-col">
                                            <div className='flex gap-2'>
                                                <MailOutlineIcon className="h-6 w-6 text-black" />
                                                <input type="email" name="email" value={formData.email} onChange={handleChange} className="rounded overflow-hidden bg-[#EADBC8] flex justify-start text-gray-600" placeholder="add email" />
                                            </div>
                                            <div className='flex gap-2'>
                                                <WhatsAppIcon className="h-6 w-6 text-black" />
                                                <input type="text" name="phonenumber" value={formData.phonenumber} onChange={handleChange} className="rounded overflow-hidden  bg-[#EADBC8] flex text-gray-600" placeholder="add number" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-lg font-poppins mb-5 mt-5'>Resume</p>
                                        <div className="rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 w-60 items-center flex-col">
                                            <div className='flex gap-2'>
                                                <DescriptionOutlinedIcon className="h-6 w-6 text-black" />
                                                <input type="text" name="file_resume" value={formData.file_resume} onChange={handleChange} className=" relative w-full rounded overflow-hidden bg-[#EADBC8] flex justify-center text-gray-600" placeholder="add resume" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="bg-blue-950 text-white font-poppins px-4 py-2 rounded self-end mt-8">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EditProfilePage;
