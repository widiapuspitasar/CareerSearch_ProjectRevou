import React from 'react';
import { Link } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
import BookIcon from '@mui/icons-material/Book';
import Blognav from "../../../../component/blognav";
import Blogsearch from "../../../../component/blogsearch";
import Footer from "../../../../component/footer";

function DetailBlogPage() {
  return (
    <div>
      <section>
        <Blognav/>
        <Blogsearch/>
      </section>
      <div className="flex flex-col lg:flex-row mt-3 mx-8">
        <section className='container mx-auto w-full lg:w-3/4 lg:pr-4'>
          <div className='mb-6'>
            <p className='font-extralight'>
              <Link to='/blogpage'>Blog</Link> / Tips & Trick / Tips Membuat CV ATS yang bakal dilirik sama perusahaan idaman!
            </p>
          </div>
          <button className='bg-[#0F2C59] text-white rounded p-2'>Tips & Trick</button>
          <p className='text-3xl text-[#0F2C59] font-bold'>Tips Membuat CV ATS yang bakal dilirik sama perusahaan idaman!</p>
          <div className='flex justify-between'>
            <p>2 May 2024, 10.21 AM | Waktu Baca 3 menit</p>
            <div>
              <BookIcon />
              <ShareIcon />
            </div>
          </div>
          <div className='grid gap-5 m-5'>
            <div className="card bg-gray-200 p-4 rounded-lg shadow-md" style={{ maxWidth: '100%', height:'250px'}}></div>
            <p>
              Halo sobat careersearch! jaman sekarang itu CV ATS  memudahkan proses screening. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className="card bg-gray-200 p-4 rounded-lg shadow-md" style={{ maxWidth: '100%', height:'250px'}}></div>
            <p>
              Halo sobat careersearch! jaman sekarang itu CV ATS  memudahkan proses screening. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className="card bg-gray-200 p-4 rounded-lg shadow-md" style={{ maxWidth: '100%', height:'250px'}}></div>
            <p>
              Halo sobat careersearch! jaman sekarang itu CV ATS  memudahkan proses screening. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </section>
        <aside className='w-full lg:w-1/4 lg:pl-4 border-l-2 border-black px-5'>
          <div>
            <p className='text-[#0F2C59] font-bold text-l'>Artikel Lainnya</p>
            <div className='flex gap-2 py-4'>
              <Link className='kiri w-6/12 ' to='/detailblogpage'>
                <div className="flex gap-2">
                  <button type='button' className='bg-[#0F2C59] text-white rounded text-xs'>Tips & Trick</button>
                  <p className='text-xs'>2 May 2024</p>
                </div>
                <p className='text-[#0F2C59] text-sm pt-3'>Tips Membuat CV ATS yang bakal dilirik sama perusahaan idaman!</p>
              </Link>
              <div className='kanan w-6/12'>
                <div className="card bg-gray-200 p-4 rounded-lg shadow-md" style={{width: '100%', maxWidth: '500px', height: '100%'}}></div>
              </div>
            </div>
            <div className='flex gap-2 py-4'>
              <Link className='kiri w-6/12 ' to='/detailblogpage'>
                <div className="flex gap-2">
                  <button type='button' className='bg-[#0F2C59] text-white rounded text-xs'>Tips & Trick</button>
                  <p className='text-xs'>2 May 2024</p>
                </div>
                <p className='text-[#0F2C59] text-sm pt-3'>Tips Membuat CV ATS yang bakal dilirik sama perusahaan idaman!</p>
              </Link>
              <div className='kanan w-6/12'>
                <div className="card bg-gray-200 p-4 rounded-lg shadow-md" style={{width: '100%', maxWidth: '500px', height: '100%'}}></div>
              </div>
            </div>
            <div className='flex gap-2 py-4'>
              <Link className='kiri w-6/12 ' to='/detailblogpage'>
                <div className="flex gap-2">
                  <button type='button' className='bg-[#0F2C59] text-white rounded text-xs'>Tips & Trick</button>
                  <p className='text-xs'>2 May 2024</p>
                </div>
                <p className='text-[#0F2C59] text-sm pt-3'>Tips Membuat CV ATS yang bakal dilirik sama perusahaan idaman!</p>
              </Link>
              <div className='kanan w-6/12'>
                <div className="card bg-gray-200 p-4 rounded-lg shadow-md" style={{width: '100%', maxWidth: '500px', height: '100%'}}></div>
              </div>
            </div>
          </div>
          <div className='text-center py-4 '>
            <p className='text-[#0F2C59] font-bold text-l'><Link to='/blogpage'>lihat selengkapnya</Link></p>
          </div>
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
            <div className='flex flex-wrap gap-2 pt-4'>
              <button type='button' className='bg-[#0F2C59] text-white rounded p-3'>#interview</button>
              <button type='button' className='bg-[#0F2C59] text-white rounded p-3'>#cv</button>
              <button type='button' className='bg-[#0F2C59] text-white rounded p-3'>#career</button>
              <button type='button' className='bg-[#0F2C59] text-white rounded p-3'>#lowongan</button>
            </div>
          </div>
          <div className='mt-6'>
            <div className="flex items-center justify-center my-5">
              <img src="assets/logo.png" className="w-25 h-20" alt="Logo" />
            </div>
            <p className='mb-5'>CarrerSearch adalah platform pencarian kerja yang mudah dan instant! Dapatkan info menarik tentang pekerjaan terbaru dan Tips & Trick melamar pekerjaan.</p>
            <div className="flex items-center justify-center gap-2">
              <img src="assets/socmed1.png" className="w-8 h-8" alt="ig" />
              <img src="assets/socmed2.png" className="w-8 h-8" alt="linkedin" />
              <img src="assets/socmed3.png" className="w-8 h-8" alt="yt" />
            </div>
          </div>
        </aside>
      </div>
      <Footer/>
    </div>
  );
};

export default DetailBlogPage;
