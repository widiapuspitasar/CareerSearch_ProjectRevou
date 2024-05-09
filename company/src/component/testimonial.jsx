import React, { useState } from 'react';
import { Grid, Paper, Button, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: 'Yoona',
      role: 'Jobseeker',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam et risus sodales ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam et risus sodales ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam et risus sodales ullamcorper.',
      image: 'assets/user.png'
    },
    {
      name: 'Revou',
      role: 'Employer',
      text: 'Cras congue velit sit amet neque viverra, nec ultrices nunc rutrum. Integer eget est sit amet sapien malesuada feugiat. Integer id commodo lorem. Sed non metus et nisi tincidunt suscipit id at eros. Nulla facilisi.',
      image: '/assets/Revou.png'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, testimonials.length - 1));
  };

  return (
    <Grid container spacing={3} justifyContent="center">
    <Grid item xs={12} sm={12}>
      <Paper elevation={3} style={{ padding: '0', margin: '0', overflow: 'hidden', minHeight: '200px' }}>
        <div className="flex flex-col sm:flex-row p-3 bg-[#F9F7F7]">
          <div className="w-full sm:w-1/2 flex flex-col items-center justify-center p-3">
            <img src={testimonials[currentIndex].image} className="w-32 h-32 md:w-64 md:h-64" alt="Profile" />
            <div className="text-center mt-2">
              <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
              <p className="font-bold text-lg">{testimonials[currentIndex].role}</p>
            </div>
          </div>
          <div className="bg-gray-100 w-full sm:w-1/2 flex flex-col items-center justify-center p-3">
            <p className="text-base">{testimonials[currentIndex].text}</p>
          </div>
        </div>
        <div className="hidden md:flex justify-between items-center p-3">
          <IconButton onClick={handlePrev} disabled={currentIndex === 0} style={{ marginRight: '10px' }}>
            <ArrowBack />
          </IconButton>
          <IconButton onClick={handleNext} disabled={currentIndex === testimonials.length - 1}>
            <ArrowForward />
          </IconButton>
        </div>
      </Paper>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
      </div>
    </Grid>
  </Grid>
  


  );
};

export default TestimonialsCarousel;
