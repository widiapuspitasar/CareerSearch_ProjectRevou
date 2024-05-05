import React from 'react';
import { Link } from 'react-router-dom';
import Main from "../../../component/main";
import Searchbar from "../../../component/searchbar";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const Mainpage = () => {
    return (
        <div>
            <header>
                <Main />
                <Searchbar />
            </header>
            <section className='container mt-6 mx-auto p-8 bg-blue-900'>
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
                        <form>
                            <div>
                                <p className='text-lg font-poppins mb-5 mt-5'>Full Name</p>
                                <div>
                                    <input type="text" className="rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 relative w-full" placeholder="Isi Nama Lengkap Dirimu" />
                                </div>
                            </div>
                            <div>
                                <p className='text-lg font-poppins mb-5 mt-5'>Role</p>
                                <div>
                                    <input type="text" className="rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 relative w-full" placeholder="Isi Role Dirimu" />
                                </div>
                            </div>
                            <div>
                                <p className='text-lg font-poppins mb-5 mt-5'>About Me</p>
                                <div>
                                    <textarea className="rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 relative w-full h-32" placeholder="Isi Deskripsi dirimu"></textarea>
                                </div>
                            </div>
                            <div>
                                <p className='text-lg font-poppins mb-5 mt-5'>My Skill</p>
                                <div className='grid gap-4'>
                                <p className='rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 w-60 flex justify-center text-gray-600'>Frontend Developer</p>
                                <p className='rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 w-60 flex justify-center text-gray-600'>Backend Developer</p>
                                    <p className='rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 w-60 flex justify-center text-gray-600'>Web Developer</p>
                                    <input type="text" className="rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 w-60 flex justify-center text-gray-600" placeholder="Type Here...." />
                                </div>
                            </div>
                            <div>
                                <p className='text-lg font-poppins mb-5 mt-5'>Contact Me</p>
                                <div className="rounded overflow-hidden shadow-lg bg-[#EADBC8] p-3 w-60 flex items-center flex-col">
                                    <div className='flex gap-2'>
                                        <MailOutlineIcon className="h-6 w-6 text-black" />
                                        <input type="email" className="rounded overflow-hidden bg-[#EADBC8] flex flex justify-center text-gray-600" placeholder="add email" />
                                    </div>
                                    <div className='flex gap-2'>
                                        <WhatsAppIcon className="h-6 w-6 text-black" />
                                        <input type="text" className="rounded overflow-hidden  bg-[#EADBC8] flex  flex justify-center text-gray-600" placeholder="add number" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='text-lg font-poppins mb-5 mt-5'>Resume</p>
                                <div className="rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 w-60 flex items-center flex-col">
                                    <div className='flex gap-2'>
                                        <DescriptionOutlinedIcon className="h-6 w-6 text-black" />
                                        <input type="text" className="rounded overflow-hidden bg-[#EADBC8] flex flex justify-center text-gray-600" placeholder="add resume" />
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

export default Mainpage;
