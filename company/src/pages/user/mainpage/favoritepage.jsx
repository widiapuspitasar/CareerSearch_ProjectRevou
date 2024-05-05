import React from 'react';
import { Link } from 'react-router-dom'; 
import Main from "../../../component/main";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; 

function Favoritepage({ favoriteJobs }) {
    return (
      <div>
        <header>
          <Main />
        </header>
        <section className='container mx-auto p-8 bg-[#0F2C59]'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {favoriteJobs.map(job => (
              <Link to="/detailpage" key={job.id} className="rounded overflow-hidden shadow-lg bg-gray-100 flex p-3 relative">
                <div className="w-1/3 flex flex-col items-center justify-center">
                  <img src={`assets/Revou.png`} className="w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] object-cover" alt="Profile" />
                </div>
                <div className="w-2/3 flex flex-col justify-center md:pl-6">
                  <p className="text-lg font-poppins">{job.title}</p>
                  <p className="text-gray-600">{job.company}</p>
                  <p className="text-gray-600 mb-4 md:mb-0">{job.location}</p>
                </div>
                <div className='flex items-center'>
                  <IconButton aria-label="like">
                    <FavoriteIcon style={{ color: 'red' }} />
                  </IconButton>
                </div>
                <p className="text-sm text-gray-600 absolute right-0 bottom-0 mr-3 mb-3 md:mb-0">Posted since {job.datePosted}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    );
};

export default Favoritepage;
