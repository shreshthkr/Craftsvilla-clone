import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import SelectPage from '../Components/Navbar/SelectPage';
import {Box,Image,Text,Button} from "@chakra-ui/react";

const ProductDetail = () => {
    const {id} = useParams();
    const [productDetail, setProductDetail] = useState([]);


   useEffect(()=> {
    fetch(`http://localhost:5000/home-decor/${id}`)
    .then((res) => res.json())
    .then((res) => setProductDetail(res))
   },[id]);



   const{image, title,productprice,regularprice,discountdetails} = productDetail;


  return (
    <div>
        <SelectPage />
        <Box 
        w="80%"
        h="auto"
        m="auto"
        display="flex"
        alignItems="center"
        justifyConent="space-between"
        gap="30px"
        >
           <Box border="2px solid red">
            <Image src={image} />
           </Box>
           <Box
           w="60%"
           h="400px"
           border="2px solid black"
            display="flex"
            flexDirection="column"
            alignItems="left"
            justifyContent="space-around"
           >
            <Box><Text>{title}</Text></Box>
            <Box><Text>

                {productprice}
            </Text>
            <Text>{regularprice}</Text>
            <Text>
                (`{discountdetails}`)
            </Text>
                </Box>
            <Box><Text>inclusive of all taxes</Text></Box>
            <Box>

            <Box>
                <Text>Details:</Text>
                <Text>Return Window</Text>
                <Text>0 minutes</Text>
            </Box>
            <Box>
                <Text>More</Text>
                <Text>Time to Ship</Text>
                <Text>1day 0 minutes </Text>
            </Box>
            </Box>
            <Box>
                <Box>
                    <Text>Returnable</Text>
                    <Text>No</Text>
                </Box>
                <Box>
                    <Text>Cancellable</Text>
                    <Text>Yes</Text>
                </Box>
            </Box>
            <Box>
                <Button>ADD TO CART</Button>
                <Button>BUY NOW</Button>
            </Box>
           </Box>
        </Box>
    </div>
  )
}

export default ProductDetail;