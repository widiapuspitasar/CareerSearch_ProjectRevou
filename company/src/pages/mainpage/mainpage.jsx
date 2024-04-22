import React from 'react';
import { Link } from 'react-router-dom'; 
import Main from "../../component/main";
import Searchbar from "../../component/searchbar";
import Hearticon from "../../component/Icon/heart"
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite'; // Icon filled heart
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; 


function Mainpage() {
    const [liked, setLiked] = React.useState(false);
  
    const handleLikeClick = () => {
      setLiked((prevLiked) => !prevLiked);
    };

    return (
      <div>
        <section>
          <Main />
          <Searchbar />
        </section>
        <div className="text-right mb-4 mr-6 mt-2">
          <p>Favorites</p>
        </div>
        <section className='container mx-auto p-8 bg-[#0F2C59]'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/detailpage" className="rounded overflow-hidden shadow-lg bg-gray-100 flex p-3 relative">
              <div className="w-1/3 flex flex-col items-center justify-center">
                <img src="assets/Revou.png" className="w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] object-cover" alt="Profile" />
              </div>
              <div className="w-2/3 flex flex-col justify-center md:pl-6">
                <p className="text-lg font-semibold">Full Stack Developer</p>
                <p className="text-gray-600">Revou</p>
                <p className="text-gray-600 mb-4 md:mb-0">Jakarta</p>
              </div>
              <div className='flex items-center'>
                <IconButton aria-label="like" onClick={handleLikeClick}>
                    {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                </div>
              <p className="text-sm text-gray-600 absolute right-0 bottom-0 mr-3 mb-3 md:mb-0">Posted since 20 August 2024</p>
            </Link>
            <Link to="/detailpage" className="rounded overflow-hidden shadow-lg bg-gray-100 flex p-3 relative">
              <div className="w-1/3 flex flex-col items-center justify-center">
                <img src="assets/Revou.png" className="w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] object-cover" alt="Profile" />
              </div>
              <div className="w-2/3 flex flex-col justify-center md:pl-6">
                <p className="text-lg font-semibold">Full Stack Developer</p>
                <p className="text-gray-600">Revou</p>
                <p className="text-gray-600 mb-4 md:mb-0">Jakarta</p>
              </div>
              <div className='flex items-center'>
                <IconButton aria-label="like" onClick={handleLikeClick}>
                    {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                </div>
              <p className="text-sm text-gray-600 absolute right-0 bottom-0 mr-3 mb-3 md:mb-0">Posted since 20 August 2024</p>
            </Link>
            <Link to="/detailpage" className="rounded overflow-hidden shadow-lg bg-gray-100 flex p-3 relative">
              <div className="w-1/3 flex flex-col items-center justify-center">
                <img src="assets/Revou.png" className="w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] object-cover" alt="Profile" />
              </div>
              <div className="w-2/3 flex flex-col justify-center md:pl-6">
                <p className="text-lg font-semibold">Full Stack Developer</p>
                <p className="text-gray-600">Revou</p>
                <p className="text-gray-600 mb-4 md:mb-0">Jakarta</p>
              </div>
              <div className='flex items-center'>
                <IconButton aria-label="like" onClick={handleLikeClick}>
                    {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                </div>
              <p className="text-sm text-gray-600 absolute right-0 bottom-0 mr-3 mb-3 md:mb-0">Posted since 20 August 2024</p>
            </Link>
            <Link to="/detailpage" className="rounded overflow-hidden shadow-lg bg-gray-100 flex p-3 relative">
              <div className="w-1/3 flex flex-col items-center justify-center">
                <img src="assets/Revou.png" className="w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] object-cover" alt="Profile" />
              </div>
              <div className="w-2/3 flex flex-col justify-center md:pl-6">
                <p className="text-lg font-semibold">Full Stack Developer</p>
                <p className="text-gray-600">Revou</p>
                <p className="text-gray-600 mb-4 md:mb-0">Jakarta</p>
              </div>
              <div className='flex items-center'>
                <IconButton aria-label="like" onClick={handleLikeClick}>
                    {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                </div>
              <p className="text-sm text-gray-600 absolute right-0 bottom-0 mr-3 mb-3 md:mb-0">Posted since 20 August 2024</p>
            </Link>
            <Link to="/detailpage" className="rounded overflow-hidden shadow-lg bg-gray-100 flex p-3 relative">
              <div className="w-1/3 flex flex-col items-center justify-center">
                <img src="assets/Revou.png" className="w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] object-cover" alt="Profile" />
              </div>
              <div className="w-2/3 flex flex-col justify-center md:pl-6">
                <p className="text-lg font-semibold">Full Stack Developer</p>
                <p className="text-gray-600">Revou</p>
                <p className="text-gray-600 mb-4 md:mb-0">Jakarta</p>
              </div>
              <div className='flex items-center'>
                <IconButton aria-label="like" onClick={handleLikeClick}>
                    {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                </div>
              <p className="text-sm text-gray-600 absolute right-0 bottom-0 mr-3 mb-3 md:mb-0">Posted since 20 August 2024</p>
            </Link>
            <Link to="/detailpage" className="rounded overflow-hidden shadow-lg bg-gray-100 flex p-3 relative">
              <div className="w-1/3 flex flex-col items-center justify-center">
                <img src="assets/Revou.png" className="w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] object-cover" alt="Profile" />
              </div>
              <div className="w-2/3 flex flex-col justify-center md:pl-6">
                <p className="text-lg font-semibold">Full Stack Developer</p>
                <p className="text-gray-600">Revou</p>
                <p className="text-gray-600 mb-4 md:mb-0">Jakarta</p>
              </div>
              <div className='flex items-center'>
                <IconButton aria-label="like" onClick={handleLikeClick}>
                    {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                </div>
              <p className="text-sm text-gray-600 absolute right-0 bottom-0 mr-3 mb-3 md:mb-0">Posted since 20 August 2024</p>
            </Link>
          </div>
        </section>
      </div>
    );
};

export default Mainpage;
