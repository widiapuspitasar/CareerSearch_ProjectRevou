import React, { useState } from 'react';
import Main from "../../../../component/main";
import Searchbar from "../../../../component/searchbar";
import Footer from "../../../../component/footer";

function BlogPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: 'Tips Membuat CV ATS yang bakal dilirik sama perusahaan idaman!',
            content: 'Halo sobat careersearch! jaman sekarang itu CV ATS  memudahkan proses screening. cek selengkapnya....',
            image: 'assets/Revou.png'
        },
        {
            id: 2,
            title: 'Tips Membuat CV ATS yang bakal dilirik sama perusahaan idaman2',
            content: 'Halo sobat careersearch! jaman sekarang itu CV ATS  memudahkan proses screening. cek selengkapnya....',
            image: 'assets/Revou.png'
        },
        {
            id: 3,
            title: 'Tips Membuat CV ATS yang bakal dilirik sama perusahaan idaman3',
            content: 'Halo sobat careersearch! jaman sekarang itu CV ATS  memudahkan proses screening. cek selengkapnya....',
            image: 'assets/Revou.png'
        }
    ];

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    return (
      <div>
        <section>
          <Main/>
          <Searchbar/>
        </section>
        <section className="bg-[#0F2C59] text-white py-8">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center relative">
            <div className="w-full lg:w-1/2 px-6 lg:px-20 mb-8 lg:mb-0 relative">
              <div className='flex gap-4'>
                <button className='bg-[#F9F7F7] text-black rounded p-2'>Tips & Trick</button>
                <p>2 May 2024</p>
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold tracking-wider leading-relaxed">{slides[currentSlide].title}</h1>
                <p className="text-l mt-4 lg:mt-8 font-poppins tracking-wider leading-relaxed font-light">
                  {slides[currentSlide].content}
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-6 lg:px-20 mb-8 lg:mb-0 relative flex justify-end">
              <div className="card bg-gray-200 p-4 rounded-lg shadow-md" style={{width: '100%', maxWidth: '500px', height: '200px'}}>
              </div>
            </div>
            <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent border-none text-white text-xl">&#10094;</button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent border-none text-white text-xl">&#10095;</button>
          </div>
        </section>
        <div className="flex flex-col lg:flex-row mt-8 mx-8">
          <section className='container mx-auto w-full lg:w-3/4 lg:pr-4'>
            <div>
              <p className='text-2xl text-left mb-4 mr-0 mt-2 text-[#0F2C59] font-bold'>Artikel Terbaru</p>
              <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center relative pt-8 pb-8">
                <div className="lg:w-1/2 px-3 mb-8 lg:mb-0 relative" style={{ minHeight: '200px' }}>
                  <div className='flex gap-4'>
                    <button className='bg-[#0F2C59] text-white rounded p-2'>Tips & Trick</button>
                    <p>2 May 2024</p>
                  </div>
                  <div>
                    <h1 className="text-xl lg:text-2xl font-bold tracking-wider leading-relaxed">{slides[currentSlide].title}</h1>
                    <p className="text-l mt-4 lg:mt-8 font-poppins tracking-wider leading-relaxed font-light">
                      {slides[currentSlide].content}
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-6 lg:px-20 mb-8 lg:mb-0 relative flex justify-end" style={{ minHeight: '200px' }}>
                  <div className="card bg-gray-200 p-4 rounded-lg shadow-md " style={{width: '100%', maxWidth: '500px', height: '200px'}}>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='w-full lg:w-1/4 lg:pl-4 border-l-2 border-black px-5'>
            <div className="bg-[#0F2C59] text-white column-12 flex flex-col lg:flex-row rounded-lg overflow-hidden shadow-md">
              <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start items-center">
                <div className="py-6 px-4 lg:px-8">
                  <p className="text-lg lg:text-xl font-poppins tracking-wider leading-relaxed text-center lg:text-left">Temukan Pekerjaan Impian Anda Dengan CarrerSearch!</p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative flex justify-center items-center">
                <img src="assets/man_working_table.png" alt="Man working table" className="w-20 lg:w-24 h-auto" />
              </div>
            </div>
            <div className='mt-6'>
              <p>Rekomendasi Topik</p>
              <div className='flex flex-wrap gap-2'>
                <button type='button' className='bg-[#0F2C59] text-white rounded p-3'>#interview</button>
                <button type='button' className='bg-[#0F2C59] text-white rounded p-3'>#cv</button>
                <button type='button' className='bg-[#0F2C59] text-white rounded p-3'>#career</button>
                <button type='button' className='bg-[#0F2C59] text-white rounded p-3'>#lowongan</button>
              </div>
            </div>
            <div className='mt-6'>
              <div className="flex items-center justify-center">
                <img src="assets/logo.png" className="w-20 h-20" alt="Logo" />
              </div>
              <p>CarrerSearch adalah platform pencarian kerja yang mudah dan instant! Dapatkan info menarik tentang pekerjaan terbaru dan Tips & Trick melamar pekerjaan.</p>
              <div className="flex items-center justify-center">
                <img src="assets/socmed1.png" className="w-8 h-8" alt="ig" />
                <img src="assets/socmed2.png" className="w-8 h-8" alt="linkedin" />
                <img src="assets/socmed3.png" className="w-8 h-8" alt="yt" />
              </div>
            </div>
          </section>
        </div>

        <Footer/>
      </div>
    );
};

export default BlogPage;
