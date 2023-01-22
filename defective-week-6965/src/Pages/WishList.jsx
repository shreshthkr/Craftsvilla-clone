import React from 'react'
import {Box,Text} from "@chakra-ui/react"

const WishList = () => {
  return (
    <div>
      <Box w="80%"
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
    </div>
  )
}

export default WishList;