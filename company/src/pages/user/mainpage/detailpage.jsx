import React, { useEffect, useState } from 'react';
import Main from "../../../component/main";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Maincompany from '../../../component/maincompany';

const Detailpage = () => {
  const { post_job_id } = useParams();
  const [jobDetail, setJobDetail] = useState({});
  const userData = JSON.parse(localStorage.getItem('userData'));
  const companyData = JSON.parse(localStorage.getItem('companyData'));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCompany, setIsCompany] = useState(false);


  const formatDate = (dateString) => {
      const date = new Date(dateString);
      const options = { day: 'numeric', month: 'short', year: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    };

  useEffect(() => {
      const fetchJobDetail = async () => {
          try {
              const response = await axios.get(`https://backendproject-production-41c5.up.railway.app/company/job/${post_job_id}`);
              setJobDetail(response.data.data);
          } catch (error) {
              console.error('Error fetching job detail:', error);
          }
      };
      if (post_job_id) {
          fetchJobDetail();
      }

      setIsLoggedIn(userData && userData.user_id);
      setIsCompany(companyData && companyData.company_id);
  }, [post_job_id, userData, companyData]);

  const applyJob = async () => {
      try {
          if (!userData || !userData.user_id) {
              alert('User data is missing or incomplete.');
              return;
          }
  
          const response = await axios.post(`https://backendproject-production-41c5.up.railway.app/${userData.user_id}/apply_job/${post_job_id}`, {}, {
              headers: {
                  Authorization: `Bearer ${userData.token}` 
              }
          });
  
          if (response.status === 200) {
              alert('Job applied successfully!');
          } else {
              alert('Failed to apply for job. Please try again later.');
          }
      } catch (error) {
        if (error.response && error.response.status === 401) {
            alert('You need to login to apply for this job.');
        } else if (error.response && error.response.status === 400) {
            alert('Job already applied by the user');
        } else {
            alert('An error occurred. Please try again later.');
        }   
  }
};

    return (
      <div>
        <header>
          {!isCompany && <Main />}
          {isCompany && <Maincompany />}
        </header>
        <section className='font-poppins rounded container mt-6 mx-auto p-8 bg-[#0F2C59] '>
          <div className="rounded overflow-hidden shadow-lg bg-gray-100 p-3 md:w-3/4 mx-auto">
            <div className='flex border-b-2'>
              <div className="w-1/3 flex flex-col items-center mb-5">
                <Link></Link><img src="/assets/company_logo.png" className="w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem] object-cover" alt="Profile" />
              </div>
              <div className="w-2/3 flex flex-col justify-center md:pl-6">
                <p className="text-3xl font-bold">{jobDetail.job_name}</p>
                <Link to={`/companyprofile/${jobDetail.company_id}`}><p className="text-gray-600 text-xl mb-2 font-semibold hover:text-blue-500">{jobDetail.company_name}</p></Link>
                <p className="text-gray-600 mb-4 md:mb-0">{jobDetail.address_job}</p>
                <p className="text-sm text-gray-600 mb-4 md:mb-0">Post Until {formatDate(jobDetail.post_until)}</p>
              </div>
            </div>
            <div className='p-5 mt-10'>
              <div className="flex flex-col mb-5">
                <p className='font-semibold md:text-xl md:font-semibold mb-2 '>Job Description</p>
                <p className='text-gray-600 md:text-xl '>{jobDetail.job_description}</p>
              </div>
              <div className="flex flex-col mb-5">
                <p className='font-semibold md:text-xl md:font-semibold mb-2'>Qualification</p>
                <ol className='text-gray-600 md:text-xl'>
                  {jobDetail.qualification && jobDetail.qualification.map((qual, index) => (
                    <li key={index}>{index + 1}. {qual}</li>
                  ))}
                </ol>
              </div>
              <div className="flex flex-col mb-5">
                <p className='font-semibold md:text-xl md:font-semibold mb-2'>Benefit</p>
                <ol className='text-gray-600 md:text-xl'>
                  {jobDetail.benefit && jobDetail.benefit.map((qual, index) => (
                    <li key={index}>{index + 1}. {qual}</li>
                  ))}
                </ol>
              </div>
              <div className="flex flex-col mb-5">
                <p className='font-semibold md:text-xl md:font-semibold mb-2'>Jobs Summary</p>
                <div className='grid grid-cols-2 gap-5 '>
                <div>
                  <p className='font-semibold md:text-xl md:font-semibold'>Jobs Level</p>  
                  <p className='text-gray-600 md:text-xl'>{jobDetail.job_level}</p>  
                </div>
                <div>
                  <p className='font-semibold md:text-xl md:font-semibold'>Educational Requirement</p>  
                  <p className='text-gray-600 md:text-xl'>{jobDetail.educational_requirenment}</p>  
                </div>
                <div>
                  <p className='font-semibold md:text-xl md:font-semibold'>Job Category</p>  
                  <p className='text-gray-600 md:text-xl'>{jobDetail.job_category}</p>  
                </div>
                <div>
                  <p className='font-semibold md:text-xl md:font-semibold'>Vacancy</p>  
                  <p className='text-gray-600 md:text-xl'>{jobDetail.vacancy}</p>  
                </div>
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <p className='font-semibold md:text-xl md:font-semibold mb-2'>Office Address</p>
                <p className='text-gray-600 md:text-xl'>{jobDetail.address_job}</p>
              </div>
              <div className="flex flex-col mb-5">
                <p className='font-semibold md:text-xl md:font-semibold mb-2'>About Us</p>
                <p className='text-gray-600 md:text-xl'>{jobDetail.about_us}</p>
              </div>
              <div className="flex flex-col mb-5">
                <p className='font-semibold md:text-xl md:font-semibold mb-2'>Contact Us</p>
                <div className='flex gap-2'>
                    <svg className="h-6 w-6 text-black" data-testid="MailOutlineIcon"><MailOutlineIcon /></svg>
                    <p className='md:text-xl'>{jobDetail.email}</p>
                </div>
                <div className='flex gap-2'>
                    <svg className="h-6 w-6 text-black" data-testid="MailOutlineIcon"><WhatsAppIcon /></svg>
                    <p className='md:text-xl'>+{jobDetail.phonenumber}</p>
                </div>
              </div>
              {!isCompany && isLoggedIn && (
                <div className="flex flex-col mb-5">
                  <button onClick={applyJob} type="submit" className="bg-blue-950 text-white font-poppins px-4 py-2 rounded self-end">Apply Now</button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      );
    };

export default Detailpage;
