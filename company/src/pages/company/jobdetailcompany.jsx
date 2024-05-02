import React from "react";
import Maincompany from "../../component/maincompany";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Jobdetailcompany = () => {
    return (
      <div>
        <section>
          <Maincompany />
        </section>
        <section className='container mt-6 mx-auto p-8 bg-[#0F2C59]'>
          <div className="rounded overflow-hidden shadow-lg bg-gray-100 p-3 ">
            <div className='flex border-b-2'>
              <div className="w-1/3 flex flex-col items-center mb-5">
                <img src="assets/Revou.png" className="w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem] object-cover" alt="Profile" />
              </div>
              <div className="w-2/3 flex flex-col justify-center md:pl-6">
                <p className="text-lg font-poppins">Full Stack Developer</p>
                <p className="text-gray-600">Revou</p>
                <p className="text-gray-600 mb-4 md:mb-0">Jakarta</p>
                <p className="text-sm text-gray-600 mb-4 md:mb-0">Posted since 20 August 2024</p>
              </div>
            </div>
            <div className='p-5 mt-10'>
              <div className="flex flex-col mb-5">
                <p className='text-lg font-poppins mb-5'>Job Description</p>
                <p className='text-gray-600'>Bertanggung jawab atas desain, pengembangan, modifikasi, debugging dan/atau pemeliharaan sistem perangkat lunak. Bekerja pada modul, aplikasi, atau teknologi tertentu, dan menangani tugas-tugas canggih selama proses pengembangan perangkat lunak.</p>
              </div>
              <div className="flex flex-col mb-5">
                <p className='text-lg font-poppins mb-5'>Qualification</p>
                <ul className='text-gray-600'>
                    <li>Gelar sarjana atau lebih tinggi di bidang Ilmu Komputer.</li>
                    <li>Pengalaman dalam pengembangan perangkat lunak dengan bahasa pemrograman seperti Java, Python, C++, atau bahasa pemrograman lainnya.</li>
                    <li>Memiliki pemahaman yang kuat tentang konsep-konsep pemrograman, struktur data, dan algoritma.</li>
                </ul>
              </div>
              <div className="flex flex-col mb-5">
                <p className='text-lg font-semipoppinsbold mb-5'>Benefit</p>
                <ul className='text-gray-600'>
                    <li>Gaji yang kompetitif dan paket tunjangan yang menarik.</li>
                    <li>Lingkungan kerja yang kolaboratif dan mendukung.</li>
                    <li>Peluang pengembangan karir yang jelas dengan akses ke pelatihan dan sumber daya pengembangan profesional.</li>
                    <li>Fleksibilitas waktu kerja dan kesempatan untuk bekerja dari jarak jauh.</li>

                </ul>
              </div>
              <div className="flex flex-col mb-5">
                <p className='text-lg font-poppins mb-5'>Jobs Summary</p>
                <div className='grid grid-cols-2 gap-5 '>
                <div>
                  <p className=''>Jobs Level</p>  
                  <p className='text-gray-600'>Internship</p>  
                </div>
                <div>
                  <p className=''>Educational Requirement</p>  
                  <p className='text-gray-600'>Bachelor’s Degree</p>  
                </div>
                <div>
                  <p className=''>Job Category</p>  
                  <p className='text-gray-600'>Information Technology</p>  
                </div>
                <div>
                  <p className=''>Vacancy</p>  
                  <p className='text-gray-600'>5 Opening</p>  
                </div>
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <p className=' mb-5'>Office Address</p>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam et risus sodales ullamcorper. </p>
              </div>
              <div className="flex flex-col mb-5">
                <p className=' mb-5'>About Us</p>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam et risus sodales ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam et risus sodales ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam et risus sodales ullamcorper.  </p>
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
        </section>
      </div>
      );
    };

export default Jobdetailcompany;
