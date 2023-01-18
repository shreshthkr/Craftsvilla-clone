import { Heading,SimpleGrid,Box,Image} from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import Caraousel from '../Components/Navbar/Caraousel';
import Footer from '../Components/Navbar/Footer';




const Home = () => {
   
 



  return (
    <>
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
       <div className='Carausel'>
   
     <Caraousel />
        
       </div>

   <SimpleGrid className='support'
   w="100%"
   m="auto"
   mt="110px"
   height="auto"
   p="10"
   bgColor="black"
   alignitems="center"
   
   columns={{sm:null, md:3, lg:5}}>

      <Image ml="40px"  w="250px" h="120px" src="https://cdn.plotch.io/image/upload/C/V/1660916598_MS5wbmc=.png" />
      <Image ml="40px"  w="250px" h="120px" src="https://cdn.plotch.io/image/upload/C/V/1660916607_Mi5wbmc=.png" />
      <Image ml="40px"  w="250px" h="120px" src="https://cdn.plotch.io/image/upload/C/V/1660916612_My5wbmc=.png" />
      <Image ml="40px"  w="250px" h="120px" src="https://cdn.plotch.io/image/upload/C/V/1660916617_NC5wbmc=.png" />
      <Image ml="40px" w="250px" h="120px" src="https://cdn.plotch.io/image/upload/C/V/1660916629_NS5wbmc=.png" />
   </SimpleGrid>
    <br />
    <br />
      <Box mt={{sm:220, md:220, lg:160}} style={{
        width:"80%",
        height:"auto",
        margin:"auto",
      }}>
        <SimpleGrid
        spacing="10"
         columns={{sm:1, md:2, lg:2}}>
            <Box><Image src="https://cdn.plotch.io/image/upload/C/V/1671110234_SG9tZWRlY29yLnBuZw==.png" w="50" /></Box>
            <Box><Image src="https://cdn.plotch.io/image/upload/C/V/1671110241_NS5wbmc=.png" /></Box>
            <Box><Image src="https://cdn.plotch.io/image/upload/C/V/1671110248_Ni5wbmc=.png" /></Box>
            <Box><Image src="https://cdn.plotch.io/image/upload/C/V/1671110264_My5wbmc=.png" /></Box>
        </SimpleGrid>
      </Box>
  <Box mt={{sm:220, md:220, lg:160}}>
    <Footer />
  </Box>
  <Box>
      <br />
      <br />
      <br />
      <br />
      </Box>
    </>
  )
}

export default Home;