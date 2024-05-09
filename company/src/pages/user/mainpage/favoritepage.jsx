import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Main from "../../../component/main";
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; 

function Favoritepage() {
  const [favoriteJobs, setFavoriteJobs] = useState([]);
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));
    const [likedJobs, setLikedJobs] = useState([]);

    useEffect(() => {
        const userId = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user_id : null;
        if (userId) {
            axios.get(`https://backendproject-production-41c5.up.railway.app/favorite_list/${userId}`)
                .then(response => {
                  setFavoriteJobs(response.data.data);
                  setLikedJobs(response.data.data.map(job => job.post_job_id));
                })
                .catch(error => {
                    console.error('Error fetching favorite jobs:', error);
                });
        }
    }, []);

    const handleRemoveFavorite = (jobId) => {
        setLikedJobs(prevLikedJobs => prevLikedJobs.filter(id => id !== jobId));
        setFavoriteJobs(prevFavoriteJobs => prevFavoriteJobs.filter(job => job.post_job_id !== jobId));
        localStorage.setItem('likedJobs', JSON.stringify(likedJobs.filter(id => id !== jobId)));


        const userId = userData.user_id;
        axios.delete(`https://backendproject-production-41c5.up.railway.app/${userId}/${jobId}`)
            .then(response => {
                console.log(response.data.message); 
            })
            .catch(error => {
                console.error('Error deleting favorite job:', error);
            });
    };

    return (
      <div>
        <header>
          <Main />
        </header>
        <section className='rounded container mt-10 mx-auto p-8 bg-[#0F2C59] font-poppins'>
          <h1 className='text-white text-4xl text-center p-5 mb-3 font-bold'>Favorites Jobs</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 font-poppins">
            {favoriteJobs.map((favoriteJob, index) => (
              <div key={index} className="rounded overflow-hidden shadow-lg bg-gray-100 flex p-3 relative">
                <div className="w-1/3 flex flex-col items-center justify-center">
                  <img src="assets/company_logo.png" className="w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] object-cover" alt="Profile" />
                </div>
                <div className="w-2/3 flex flex-col justify-center md:pl-6">
                  <Link to={`/detailpage/${favoriteJob.post_job_id}`} className="text-lg font-semibold">{favoriteJob.job_name}</Link>
                  <p className="text-gray-600">{favoriteJob.company_name}</p>
                  <p className="text-gray-600 mb-4 md:mb-0">Posted since {favoriteJob.created_at}</p>
                </div>
                <div className='flex items-center'>
                  <IconButton  aria-label="like" onClick={() => handleRemoveFavorite(favoriteJob.post_job_id)}>
                    <FavoriteIcon style={{ fontSize: "50px" }} color="error" />
                  </IconButton>
                </div>
              </div>
              ))}
            </div>
        </section>
      </div>
    );
};

export default Favoritepage;
