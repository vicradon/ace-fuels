import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { pxToRem } from "utils/pxToRem";
import Img1 from "assets/Rectangle 568.jpg";
import Img2 from "assets/Rectangle 569.jpg";
import Img3 from "assets/Rectangle 570.jpg";

export default function MainActivities() {
  const listImg = [
    {
      img: Img1,
      title: "Education",
    },
    {
      img: Img2,
      title: "Applied Research",
    },
    {
      img: Img3,
      title: "Short courses",
    },
  ];
  return (
    <Box mt={6}>
      <Box mx={24}>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
          {listImg.map((x) => (
            <Box p={4} border='1px solid #D4D4D4' borderRadius='15px' m={1}>
              <Box>
                <img height='264px' width='auto' src={x.img} alt='img' />
                <Typography
                  color='#2A2A2A'
                  textAlign='center'
                  fontSize={pxToRem(20)}
                  mt={2}
                  fontWeight={400}
                >
                  {x.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
