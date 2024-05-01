import React from "react";
import { Link } from "react-router-dom";
import Maincompany from "../../component/maincompany";

function Mainpagecompany() {
    return (
        <div>
            <section>
                <Maincompany />
            </section>
            <div className="flex justify-start items-center mb-4 ml-6 mt-2"> 
                <Link to="/postjob" className="text-blue-950">Post A Job</Link> 
            </div>
            <section className='container mx-auto p-8 bg-[#0F2C59] relative'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link to="/detailpage" className="rounded overflow-hidden shadow-lg bg-gray-100 flex p-3 relative">
                        <div className="w-1/3 flex flex-col items-center justify-center">
                            <img src="assets/Revou.png" className="w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] object-cover" alt="Profile" />
                        </div>
                        <div className="w-2/3 flex flex-col justify-center md:pl-6">
                            <p className="text-lg font-poppins">Full Stack Developer</p>
                            <p className="text-gray-600">Revou</p>
                            <p className="text-gray-600 mb-4 md:mb-0">Jakarta</p>
                        </div>
                        <p className="text-sm text-gray-600 absolute right-0 bottom-0 mr-3 mb-3 md:mb-0">View Applies</p>
                    </Link>
                    <Link to="/detailpage" className="rounded overflow-hidden shadow-lg bg-gray-100 flex p-3 relative">
                        <div className="w-1/3 flex flex-col items-center justify-center">
                            <img src="assets/Revou.png" className="w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] object-cover" alt="Profile" />
                        </div>
                        <div className="w-2/3 flex flex-col justify-center md:pl-6">
                            <p className="text-lg font-poppins">Full Stack Developer</p>
                            <p className="text-gray-600">Revou</p>
                            <p className="text-gray-600 mb-4 md:mb-0">Jakarta</p>
                        </div>
                        <p className="text-sm text-gray-600 absolute right-0 bottom-0 mr-3 mb-3 md:mb-0">View Applies</p>
                    </Link>
                    <Link to="/detailpage" className="rounded overflow-hidden shadow-lg bg-gray-100 flex p-3 relative">
                        <div className="w-1/3 flex flex-col items-center justify-center">
                            <img src="assets/Revou.png" className="w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] object-cover" alt="Profile" />
                        </div>
                        <div className="w-2/3 flex flex-col justify-center md:pl-6">
                            <p className="text-lg font-poppins">Full Stack Developer</p>
                            <p className="text-gray-600">Revou</p>
                            <p className="text-gray-600 mb-4 md:mb-0">Jakarta</p>
                        </div>
                        <p className="text-sm text-gray-600 absolute right-0 bottom-0 mr-3 mb-3 md:mb-0">View Applies</p>
                    </Link>
                    <Link to="/detailpage" className="rounded overflow-hidden shadow-lg bg-gray-100 flex p-3 relative">
                        <div className="w-1/3 flex flex-col items-center justify-center">
                            <img src="assets/Revou.png" className="w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] object-cover" alt="Profile" />
                        </div>
                        <div className="w-2/3 flex flex-col justify-center md:pl-6">
                            <p className="text-lg font-poppins">Full Stack Developer</p>
                            <p className="text-gray-600">Revou</p>
                            <p className="text-gray-600 mb-4 md:mb-0">Jakarta</p>
                        </div>
                        <p className="text-sm text-gray-600 absolute right-0 bottom-0 mr-3 mb-3 md:mb-0">View Applies</p>
                    </Link>
                    <Link to="/detailpage" className="rounded overflow-hidden shadow-lg bg-gray-100 flex p-3 relative">
                        <div className="w-1/3 flex flex-col items-center justify-center">
                            <img src="assets/Revou.png" className="w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] object-cover" alt="Profile" />
                        </div>
                        <div className="w-2/3 flex flex-col justify-center md:pl-6">
                            <p className="text-lg font-poppins">Full Stack Developer</p>
                            <p className="text-gray-600">Revou</p>
                            <p className="text-gray-600 mb-4 md:mb-0">Jakarta</p>
                        </div>
                        <p className="text-sm text-gray-600 absolute right-0 bottom-0 mr-3 mb-3 md:mb-0">View Applies</p>
                    </Link>
                    <Link to="/detailpage" className="rounded overflow-hidden shadow-lg bg-gray-100 flex p-3 relative">
                        <div className="w-1/3 flex flex-col items-center justify-center">
                            <img src="assets/Revou.png" className="w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] object-cover" alt="Profile" />
                        </div>
                        <div className="w-2/3 flex flex-col justify-center md:pl-6">
                            <p className="text-lg font-poppins">Full Stack Developer</p>
                            <p className="text-gray-600">Revou</p>
                            <p className="text-gray-600 mb-4 md:mb-0">Jakarta</p>
                        </div>
                        <p className="text-sm text-gray-600 absolute right-0 bottom-0 mr-3 mb-3 md:mb-0">View Applies</p>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Mainpagecompany;
