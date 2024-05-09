import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import Main from "../../../component/main";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; 
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SearchIcon from '@mui/icons-material/Search';

function Mainpage() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [likedJobs, setLikedJobs] = useState([]);
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));
  const [searchTerm, setSearchTerm] = useState('');

  const getFormattedDate = (dateString) => {
      const date = new Date(dateString);
      const day = date.toLocaleDateString('en-US', { weekday: 'short' });
      const formattedDate = date.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
      return `${day}, ${formattedDate}`;
  };

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('https://backendproject-production-41c5.up.railway.app/company/job', {
                  headers: {
                      Authorization: `Bearer ${userData.token}` 
                  }
              });
              setJobs(response.data.data);
              setFilteredJobs(response.data.data);
          } catch (error) {
              console.error("Error fetching jobs:", error);
          }
      };
      if (userData) {
          fetchData();
      }
  }, [userData]);

  useEffect(() => {
      const userId = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user_id : null;
      if (userId) {
          axios.get(`https://backendproject-production-41c5.up.railway.app/favorite_list/${userId}`)
              .then(response => {
                  setLikedJobs(response.data.data.map(job => job.post_job_id));
              })
              .catch(error => {
                  console.error('Error fetching favorite jobs:', error);
              });
      }
  }, []);

  const handleLikeClick = async (jobId) => {
      try {
          const response = await axios.post(`https://backendproject-production-41c5.up.railway.app/favorite/${userData.user_id}/${jobId}`);
          if (response.status === 200) {
              setLikedJobs(prevLikedJobs => [...prevLikedJobs, jobId]);
              alert("Job added to favorites successfully");
          }
      } catch (error) {
          if (!error.response || !error.response.data || error.response.data.message !== 'Job already favorited by the user') {
              console.error("Error adding job to favorites:", error);
              alert("An error occurred while adding job to favorites.");
          } else {
              alert("Job is already in favorites.");
          }
      }
  };

  const handleRemoveFavorite = (jobId) => {
      setLikedJobs(prevLikedJobs => prevLikedJobs.filter(id => id !== jobId));

      const userId = userData.user_id;
      axios.delete(`https://backendproject-production-41c5.up.railway.app/favorite/${userId}/${jobId}`)
          .then(response => {
              console.log(response.data.message);
          })
          .catch(error => {
              console.error('Error deleting favorite job:', error);
          });
  };

  const handleSearch = (e) => {
      const searchTerm = e.target.value.toLowerCase();
      setSearchTerm(searchTerm);
      setFilteredJobs(jobs.filter(job => 
          job.job_name.toLowerCase().includes(searchTerm) ||
          job.company_name.toLowerCase().includes(searchTerm) ||
          job.address_job.toLowerCase().includes(searchTerm)
      ));
  };

  return (
    <div>
      <header>
        <Main />
      </header>
      <section className=' container mx-auto'>
        
        <div className="text-right mb-4 mt-2 mr-2 text-xl font-bold ">
          <p><Link to="/favoritepage" className="text-blue-950 hover:text-blue-500">List Favorites</Link></p>
        </div>
        <section className='rounded p-8 bg-[#0F2C59]'>
        <h1 className='text-white text-4xl text-center p-5 mb-3 font-bold'>Job Listings</h1>
          <div className="flex items-center justify-end mb-4">
            <input
              type="text"
              className="bg-white text-black rounded px-4 py-2 w-full md:w-64"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
            
            <IconButton style={{ color: 'white', fontSize: '10rem' }}>
              <SearchIcon  sx={{ fontSize: 40 }}/>
            </IconButton>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            {filteredJobs.map((job, index) => (
              <div key={index} className="rounded font-poppins overflow-hidden shadow-lg bg-gray-100 p-3 relative flex">
                <div className="w-1/3 flex flex-col items-center justify-center">
                  <img src="/assets/company_logo.png" className="w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] object-cover" alt="Profile" />
                </div>
                <div className="flex flex-col justify-center md:pl-6 flex-grow"> 
                  <Link to={`/detailpage/${job.id}`} className="text-lg font-poppins font-semibold">{job.job_name}</Link>
                  <p className="text-gray-600 ">{job.company_name}</p>
                  <p className="text-gray-600 mb-4 md:mb-0">{job.address_job}</p>
                </div>
                <div className='flex flex-col items-end justify-end'> 
                  <IconButton  aria-label="like" onClick={() => likedJobs.includes(job.id) ? handleRemoveFavorite(job.id) : handleLikeClick(job.id)}>
                    {likedJobs.includes(job.id) ? <FavoriteIcon color="error" style={{ fontSize: "50px" }} /> : <FavoriteBorderIcon style={{ fontSize: "50px" }} />}
                  </IconButton>
                  <p className="text-gray-600">{getFormattedDate(job.post_until)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Mainpage;
