import React, { useState } from 'react';
import{ChevronLeftIcon,ChevronRightIcon} from "@chakra-ui/icons";
import { Box } from '@chakra-ui/react';
import {ImArrowRight2,ImArrowLeft2} from "react-icons/im";
const Caraousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const url = [
    'https://cdn.plotch.io/image/upload/C/V/1671110161_Mi5wbmc=.png',
    'https://cdn.plotch.io/image/upload/C/V/1671110178_SG9tZWRlY29yLnBuZw==.png',
    'https://cdn.plotch.io/image/upload/C/V/1671110155_NC5wbmc=.png'
  ];


  const handlePreviousClick = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? url.length - 1 : newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex === url.length ? 0 : newIndex);
  };

  return (
    <div>
      <img src={url[currentIndex]} alt="sliderimage"  height='100%' width="100%"/>
      <Box style={{
        width:"100%",
        height:"50px",
        margn:"auto",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap:"10px"
        

      }}>
      <ImArrowLeft2  onClick={handlePreviousClick} size="2rem" cursor="pointer" />
      <ImArrowRight2 onClick={handleNextClick} size="2rem" cursor="pointer" />
      </Box>
      {/* <Box onClick={handlePreviousClick} ><ChevronLeftIcon size="2rem" /></Box>
      <Box onClick={handleNextClick} ><ChevronRightIcon size="2rem" /></Box> */}
    </div>
  );
};

export default Caraousel;
