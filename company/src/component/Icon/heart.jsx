import React from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite'; // Icon filled heart
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; // Icon outlined heart

function Hearticon() {
  const [liked, setLiked] = React.useState(false);

  const handleLikeClick = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <div>
      <IconButton aria-label="like" onClick={handleLikeClick}>
        {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </div>
  );
}

export default Hearticon;