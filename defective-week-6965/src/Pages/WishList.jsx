import React from 'react'
import {Box,Text} from "@chakra-ui/react"
import Footer from '../Components/Navbar/Footer';

const WishList = () => {
  return (
    <div>
      <Box
       w="80%"
       h="600px"
      margin="auto"
      mt="20px">

      <Box>
        <Text fontSize="18px" fontFamily="Merriweather" textAlign="left">My Wshlist</Text>
      </Box>
      <hr />
      <br />
      <Box>
        <Text fontSize="18px" fontWeight="600" fontFamily="Merriweather" textAlign="center">Nothing Wishlisted!!!</Text>
      </Box>
      </Box>
      <Box>
        <Footer />
      </Box>
    </div>
  )
}

export default WishList;