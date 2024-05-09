import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Main from "../../../component/main";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Appliedjobspage() {
  // const [liked, setLiked] = React.useState(false);

  // const handleLikeClick = () => {
  //   setLiked((prevLiked) => !prevLiked);

  const [appliedJobs, setAppliedJobs] = useState([]);
    const [jobs, setJobs] = useState([]); 
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));


    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('https://backendproject-production-41c5.up.railway.app/company/job', {
                  headers: {
                      Authorization: `Bearer ${userData.token}` 
                  }
              });
              setJobs(response.data.data);
          } catch (error) {
              console.error("Error fetching jobs:", error);
          }
      };
      if (userData) {
          fetchData();
      }
      console.log(userData)
  }, [userData]);
    
    useEffect(() => {
        const companyId = localStorage.getItem('companyData') ? JSON.parse(localStorage.getItem('companyData')).company_id : null;
        const userId = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user_id : null;
        if (userId) {
            axios.get(`https://backendproject-production-41c5.up.railway.app/${userId}/apply_list`)
                .then(response => {
                    setAppliedJobs(response.data.data);
                })
                .catch(error => {
                    console.error('Error fetching applied jobs:', error);
                });
        }
    }, []);

  return (
    <div>
      <header>
        <Main />
      </header>
      <section className='rounded container mt-10 mx-auto p-8 bg-[#0F2C59]'>
        <h1 className='text-white text-4xl text-center p-5 mb-3 font-bold'>Applied Jobs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {appliedJobs.map((appliedJob, index) => (
            <div key={index} className="rounded overflow-hidden shadow-lg bg-gray-100 flex p-3 relative">
              <div className="w-1/3 flex flex-col items-center justify-center">
                <img src="assets/company_logo.png" className="w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] object-cover" alt="Profile" />
              </div>
              <div className="w-2/3 flex flex-col justify-center md:pl-6">
                <Link to={`/detailpage/${appliedJob.post_job_id}`} className="text-lg font-poppins">{appliedJob.job_name}</Link>
                <p className="text-gray-600">{appliedJob.company_name}</p>
                <p className="text-gray-600 mb-4 md:mb-0">Time of job application: {appliedJob.date}</p>
              </div>
              <p className="text-sm text-gray-600 absolute right-0 bottom-0 mr-3 mb-3 md:mb-0">{appliedJob.status}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Appliedjobspage;
