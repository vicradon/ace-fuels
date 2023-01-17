import React from "react";
import { Box, Typography } from "@mui/material";

import bgImg from "../assets/bg-1.jpg";
import Slider from "react-slick";

import { pxToRem } from "utils/pxToRem";

const Arrow = () => {
  return (
    <Box bgcolor='#fff' width='50px' height='50px' ml={"-10px"}>
      <Typography>==</Typography>
    </Box>
  );
};

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <Box
          width='100vw'
          sx={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          height='100vh'
          display='flex'
          alignItems='center'
          justifyContent='center'
          color='red'
        >
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            width='100%'
            height='100%'
          >
            <Box bgcolor='white' p={2} borderRadius='5px' color='#000'>
              <Typography fontSize={pxToRem(32)}>
                ACE NYSC OUTREACH PROGRAMME
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          bgcolor='red'
          height='100vh'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          Hello world
        </Box>
        <Box
          bgcolor='red'
          height='100vh'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          Hello world
        </Box>
      </Slider>
    </div>
  );
};

export default Carousel;
