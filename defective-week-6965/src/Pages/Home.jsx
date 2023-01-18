import { Heading,SimpleGrid,Box,Image } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div>
    <div className='Category'
     style={{
        width:"100%",
        height:"70px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap:"15px",
        backgroundColor:"rgb(144,39,53)"

     }}
    >
     <div><Link to="/home-decor" ><h1 style={{
        color:"white",
        fontSize:"25px",
        fontWeight:"700",
        fontFamily:"Merriweather"
     }}>Home Decor</h1></Link>  </div>
     <div><Link to="/products-near-me"><h1 style={{
        color:"white",
        fontSize:"25px",
        fontWeight:"700",
        fontFamily:"Merriweather"
     }}>Products Near Me</h1></Link></div>   
    </div>
    <div className='ShopByCategory' style={{
        width:"100%",
        height:"auto",
        margin:"auto",
        marginTop:"35px"
    }} >
        <div style={{
            marginBottom:"25px"
        }}>
        <Heading fontWeight="400">Shop By category</Heading>
        </div>
        <div style={{
            width:"98%",
            margin:"auto"
        }}>
        <SimpleGrid columns={[1, 3, 5]} spacing='10px'>
  <Box bg='tomato' height='80px'>
    <Image src="https://cdn.plotch.io/image/upload/C/V/1671109983_Mi5wbmc=.png" alt="Home Decor" />
  </Box>
  <Box bg='tomato' height='80px'>
  <Image src="https://cdn.plotch.io/image/upload/C/V/1671109989_My5wbmc=.png" alt="Tote bags" />
  </Box>
  <Box bg='tomato' height='80px'>
  <Image src="https://cdn.plotch.io/image/upload/C/V/1671109994_NC5wbmc=.png" alt="Kitchen ware" />
  </Box>
  <Box bg='tomato' height='80px'>
  <Image src="https://cdn.plotch.io/image/upload/C/V/1671109999_NS5wbmc=.png" alt="Ceramic Mug" />
  </Box>
  <Box bg='tomato' height='80px'>
  <Image src="https://cdn.plotch.io/image/upload/C/V/1671110006_Ni5wbmc=.png" alt="Idols" />
  </Box>
</SimpleGrid>
        </div>
    </div>
    </div>

  )
}

export default Home;