import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import SelectPage from '../Components/Navbar/SelectPage';
import {Box,Image,Text,Button} from "@chakra-ui/react";
import {BsHeart} from "react-icons/bs"
import {RxDoubleArrowDown} from "react-icons/rx"
import Footer from '../Components/Navbar/Footer';


const NearMeProductDetail = () => {
    const {id} = useParams();
    const [productDetail, setProductDetail] = useState([]);
  
   useEffect(()=> {
    fetch(`http://localhost:5000/products-near-me/${id}`)
    .then((res) => res.json())
    .then((res) => setProductDetail(res))
   },[id]);


 
   


    const Day = Math.floor(Math.random()*10)
    const Hour =  Math.floor((Math.random()*100)/60)
    const Min =  Math.floor((Math.random()*100))
   const{image, title,productprice,regularprice,discountdetails} = productDetail;


  return (
    <div>
       
        <Box 
        w="80%"
        h="auto"
        m="auto"
        mt="30px"
        display="flex"
        alignItems="center"
        justifyConent="space-between"
        gap="30px"
        >
           <Box
           w="40%"
           h="400px"
           
           >
              <Box 
              w="35px"
              h="35px"
              position="absolute"
              bgColor="white"
              ml="28%"
              mt="15px"
              borderRadius="50%"
              p="2"
              alignItems="center"
              justifyContent="center"
              ><BsHeart size="20px" mt="10px" position="absolute" /></Box>
            <Image w="100%" h="100%"   src={image} />
           </Box>
           <Box
           w="60%"
           h="400px"
            display="flex"
            flexDirection="column"
            alignItems="left"
            justifyContent="space-between"
           >
            <Box><Text textAlign="left" fontSize="18px" fontWeight={600} fontFamily=" Montserrat Regular !important">{title}</Text></Box>
            <Box
            mt="-40px"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            gap="10px"
            ><Text textAlign="left" color="rgb(252,177,55)"  fontSize="28px" fontWeight={500} fontFamily="Montserrat Regular !important">

                {productprice}
            </Text>
            <Text fontSize="28px" fontWeight={400} color="gray.500" fontFamily="Merriweather" textDecoration="line-through">{regularprice}</Text>
            <Text  fontSize="15px" fontWeight={400} fontFamily="Merriweather" color="rgb(144,39,53)">
                {discountdetails}
            </Text>
                </Box>
            <Box
            mt="-50px"
            display="flex"
            alignItems="center"
            justifyContent="flex-start" ><Text fontFamily=" Montserrat Regular !important" color="rgb(144,39,53)">inclusive of all taxes</Text></Box>
            <Box
            w="60%"
            mt="-50px"
             display="flex"
            alignItems="center"
            justifyContent="space-between"
            textAlign="left"
            >
            
            <Box>
                <Text fontSize="18px" fontWeight={600} color="gray.600" fontFamily=" Montserrat Regular !important" >Details:</Text>
                <Text fontFamily=" Montserrat Regular !important">Return Window</Text>
                <Text color="gray.600" >{Hour} hr</Text>
            </Box>
            <Box>
                <Text display="flex" fontFamily=" Montserrat Regular !important" fontWeight={500} color="rgb(144,39,53)"><RxDoubleArrowDown size="15px" mt="10px"  />More</Text>
                <Text fontFamily=" Montserrat Regular !important">Time to Ship</Text>
                <Text color="gray.600">{Day}day {Min}minutes </Text>
            </Box>
            </Box>
            <hr />
            <Box  w="58%"
             mt="-50px"
             mb="-30px"
             display="flex"
            alignItems="center"
            justifyContent="space-between"
            textAlign="left"
            >
                <Box>
                    <Text fontFamily=" Montserrat Regular !important">Returnable</Text>
                    <Text fontFamily=" Montserrat Regular !important" color="gray.600" fontWeight={500}>No</Text>
                </Box>
                <Box>
                    <Text fontFamily=" Montserrat Regular !important">Cancellable</Text>
                    <Text fontFamily=" Montserrat Regular !important" color="gray.600" fontWeight={500}>Yes</Text>
                </Box>
            </Box>
            <hr />
            <Box  w="60%"
             display="flex"
            alignItems="center"
            justifyContent="space-between">
                <Button w="46%" fontFamily=" Montserrat Regular !important" bgColor="rgb(144,39,53)" color="white" >ADD TO CART</Button>
                <Button w="50%" fontFamily=" Montserrat Regular !important" bgColor="rgb(144,39,53)" color="white">BUY NOW</Button>
            </Box>
           </Box>
        </Box>
        <Box>
            <Text>
           
            </Text>
        </Box>
        <Box
        mt="150px"
        h="auto">
            <Footer />
        </Box>
    </div>
  )
}

export default NearMeProductDetail;