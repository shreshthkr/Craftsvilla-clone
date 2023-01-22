import React from 'react';
import {Box,Text} from "@chakra-ui/react"
import {AiOutlineShoppingCart} from "react-icons/ai"
const EmptyCart = () => {
  return (
    <div><Box w="80%"
    margin="auto"
    mt="20px">

    <Box>
      <Text fontSize="18px" fontFamily="Merriweather" textAlign="left">My Cart</Text>
    </Box>
    <hr />
    <br />
    <Box
  
    >
        <Box 
        w="50%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        m="auto">
         <AiOutlineShoppingCart size="10rem"  color="rgb(144,39,53)" />
        </Box>
      <Text fontSize="18px" fontWeight="600" fontFamily="Merriweather" textAlign="center">
       
        Cart is Empty!!!</Text>
    </Box>
    </Box></div>
  )
}

export default EmptyCart;