import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Main from "../../../../component/main";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; 

function CommunityPage() {

  return (
    <div>
      <section>
        <Main />
      </section>
      <section className='container mx-auto mt-6'>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          <div className="max-w-xs mx-auto bg-white rounded-xl overflow-hidden shadow-lg border border-gray-300">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">FullStack Developer</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, nihil tempore! Tempore, dolorem quaerat sint fugiat quo vel quisquam amet?
              </p>
            </div>
          </div>
          <div className="max-w-xs mx-auto bg-white rounded-xl overflow-hidden shadow-lg border border-gray-300">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Front End Developer</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, nihil tempore! Tempore, dolorem quaerat sint fugiat quo vel quisquam amet?
              </p>
            </div>
          </div>
          <div className="max-w-xs mx-auto bg-white rounded-xl overflow-hidden shadow-lg border border-gray-300">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Back End Developer</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, nihil tempore! Tempore, dolorem quaerat sint fugiat quo vel quisquam amet?
              </p>
            </div>
          </div>
        </div>

        <section className='mt-7 p-8 bg-[#0F2C59]'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="" className="rounded overflow-hidden shadow-lg bg-gray-100 flex p-3 relative">
              <div className="flex flex-col items-center ">
                <img src="assets/Revou.png" className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]" alt="Profile" />
              </div>
              <div className="flex flex-col justify-center md:pl-3">
                <p className="text-lg font-poppins">unknown</p>
                <p className="text-gray-600">Revou</p>
                <p className="text-gray-600">lorem ipsum dolomet lorem ipsum dolomet</p>
                <div className='flex space-x-4'>
                  <div className='flex'>
                    <svg className="h-4 w-4"><FavoriteBorderIcon /></svg>
                    <p>...</p>
                  </div>
                  <div className='flex'>
                    <svg className="h-4 w-4"><ChatBubbleOutlineIcon/></svg>
                    <p>...</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 absolute top-0 right-0 mr-3 mt-3 md:mt-2 md:mr-5">a sec ago</p>
            </Link>
            <Link to="" className="rounded overflow-hidden shadow-lg bg-gray-100 flex p-3 relative">
              <div className="flex flex-col items-center ">
                <img src="assets/Revou.png" className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]" alt="Profile" />
              </div>
              <div className="flex flex-col justify-center md:pl-3">
                <p className="text-lg font-poppins">unknown</p>
                <p className="text-gray-600">Revou</p>
                <p className="text-gray-600">lorem ipsum dolomet lorem ipsum dolomet</p>
                <div className='flex space-x-4'>
                  <div className='flex'>
                    <svg className="h-4 w-4"><FavoriteBorderIcon /></svg>
                    <p>...</p>
                  </div>
                  <div className='flex'>
                    <svg className="h-4 w-4"><ChatBubbleOutlineIcon/></svg>
                    <p>...</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 absolute top-0 right-0 mr-3 mt-3 md:mt-2 md:mr-5">a sec ago</p>
            </Link>
            <Link to="" className="rounded overflow-hidden shadow-lg bg-gray-100 flex p-3 relative">
              <div className="flex flex-col items-center ">
                <img src="assets/Revou.png" className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]" alt="Profile" />
              </div>
              <div className="flex flex-col justify-center md:pl-3">
                <p className="text-lg font-poppins">unknown</p>
                <p className="text-gray-600">Revou</p>
                <p className="text-gray-600">lorem ipsum dolomet lorem ipsum dolomet</p>
                <div className='flex space-x-4'>
                  <div className='flex'>
                    <svg className="h-4 w-4"><FavoriteBorderIcon /></svg>
                    <p>...</p>
                  </div>
                  <div className='flex'>
                    <svg className="h-4 w-4"><ChatBubbleOutlineIcon/></svg>
                    <p>...</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 absolute top-0 right-0 mr-3 mt-3 md:mt-2 md:mr-5">a sec ago</p>
            </Link>
            <Link to="" className="rounded overflow-hidden shadow-lg bg-gray-100 flex p-3 relative">
              <div className="flex flex-col items-center ">
                <img src="assets/Revou.png" className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]" alt="Profile" />
              </div>
              <div className="flex flex-col justify-center md:pl-3">
                <p className="text-lg font-poppins">unknown</p>
                <p className="text-gray-600">Revou</p>
                <p className="text-gray-600">lorem ipsum dolomet lorem ipsum dolomet</p>
                <div className='flex space-x-4'>
                  <div className='flex'>
                    <svg className="h-4 w-4"><FavoriteBorderIcon /></svg>
                    <p>...</p>
                  </div>
                  <div className='flex'>
                    <svg className="h-4 w-4"><ChatBubbleOutlineIcon/></svg>
                    <p>...</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 absolute top-0 right-0 mr-3 mt-3 md:mt-2 md:mr-5">a sec ago</p>
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default CommunityPage;
