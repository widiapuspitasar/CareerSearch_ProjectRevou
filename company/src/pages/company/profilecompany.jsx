import React from "react";
import Maincompany from "../../component/maincompany";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Profilecompany = () => {
    return (
      <div className="bg-[#0F2C59] min-h-screen">
        <section>
          <Maincompany />
        </section>
        <section className='container mx-auto p-8'>
          <div className="rounded overflow-hidden shadow-lg bg-gray-100 relative">
            <button className="absolute top-3 right-3 hover:bg-blue-700 bg-[#0F2C59] text-white py-2 px-4 rounded-md font-poppins">Edit Profile</button>
            <div className='flex flex-col justify-center items-center py-8'>
              <div className="flex flex-col items-center mb-5">
                <img src="assets/Revou.png" className="w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem] object-cover mb-3" alt="Profile" />
                <p className="text-center text-lg font-poppins mb-5">Revou</p>
              </div>
              <div className="p-5">
                <div className="flex flex-col mb-5">
                  <p className='text-lg font-poppins mb-5'>About Us</p>
                  <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam et risus sodales ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam et risus sodales ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam et risus sodales ullamcorper.</p>
                </div>
                <div className="flex flex-col mb-5">
                  <p className='text-lg font-poppins mb-5'>Company Type</p>
                  <p className='text-gray-600'>EdTech</p>
                </div>
                <div className="flex flex-col mb-5">
                  <p className='text-lg font-semipoppinsbold mb-5'>Address</p>
                  <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam et risus sodales ullamcorper.</p>
                </div>
                <div className="flex flex-col mb-5">
                  <p className=' mb-5'>Contact Us</p>
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
            </div>
          </div>
        </section>
      </div>
    );
};

export default Profilecompany;