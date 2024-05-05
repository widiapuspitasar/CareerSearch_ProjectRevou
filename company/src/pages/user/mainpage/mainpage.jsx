import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Main from "../../../component/main";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; 
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Mainpage() {
    const [jobs, setJobs] = useState([
        { id: 1, title: "Full Stack Developer a", company: "Revou", location: "Jakarta", datePosted: "20 August 2024", liked: false },
        { id: 2, title: "Full Stack Developer b", company: "Revou", location: "Jakarta", datePosted: "20 August 2024", liked: false },
        { id: 3, title: "Full Stack Developer c", company: "Revou", location: "Jakarta", datePosted: "20 August 2024", liked: false },
        { id: 4, title: "Full Stack Developer d", company: "Revou", location: "Jakarta", datePosted: "20 August 2024", liked: false },
        { id: 5, title: "Full Stack Developer e", company: "Revou", location: "Jakarta", datePosted: "20 August 2024", liked: false },
        { id: 6, title: "Full Stack Developer f", company: "Revou", location: "Jakarta", datePosted: "20 August 2024", liked: false }
    ]);

    const [searchQuery, setSearchQuery] = useState('');
    const [favoriteJobs, setFavoriteJobs] = useState([]);

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleLikeClick = (id) => {
        setJobs(prevJobs => {
            const updatedJobs = prevJobs.map(job =>
                job.id === id ? { ...job, liked: !job.liked } : job
            );
            const likedJob = updatedJobs.find(job => job.id === id);
            if (likedJob.liked) {
                setFavoriteJobs(prevFavorites => [...prevFavorites, likedJob]);
            } else {
                setFavoriteJobs(prevFavorites => prevFavorites.filter(job => job.id !== id));
            }
            return updatedJobs;
        });
    };

    const filteredJobs = jobs.filter(job => 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div>
        <header>
          <Main />
          <div className='container mx-auto mt-6'>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center justify-center mx-5">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 mr-2 focus:outline-none focus:border-blue-500 w-full"
                />
                <SearchOutlinedIcon className="h-8 w-8 text-black" />
            </form>
        </div>
        </header>
        <section className='container mx-auto'>
        <div className="text-right mb-4 mr-0 mt-2">
          <p><Link to="/favoritepage" className="text-blue-950">Favorites</Link></p>
        </div>
        <section className='p-8 bg-[#0F2C59]' style={{}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredJobs.map(job => (
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
                  <IconButton aria-label="like" onClick={() => handleLikeClick(job.id)}>
                    {job.liked ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon />}
                  </IconButton>
                </div>
                <p className="text-sm text-gray-600 absolute right-0 bottom-0 mr-3 mb-3 md:mb-0">Posted since {job.datePosted}</p>
                </Link>
            ))}
          </div>
        </section>
        </section>
      </div>
    );
};

export default Mainpage;
