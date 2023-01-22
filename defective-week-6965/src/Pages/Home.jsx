import { Heading,SimpleGrid,Box,Image} from '@chakra-ui/react';
import React from 'react'
import Caraousel from '../Components/Navbar/Caraousel';
import Footer from '../Components/Navbar/Footer';




const Home = () => {
   
 



  return (
    <>
    <div>
    <Box>
    </Box>
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
    <Image src="https://cdn.plotch.io/image/upload/C/V/1671109983_Mi5wbmc=.png" alt="Home Decor" cursor="pointer" />
  </Box>
  <Box bg='tomato' height='80px'>
  <Image src="https://cdn.plotch.io/image/upload/C/V/1671109989_My5wbmc=.png" alt="Tote bags" cursor="pointer" />
  </Box>
  <Box bg='tomato' height='80px'>
  <Image src="https://cdn.plotch.io/image/upload/C/V/1671109994_NC5wbmc=.png" alt="Kitchen ware" cursor="pointer" />
  </Box>
  <Box bg='tomato' height='80px'>
  <Image src="https://cdn.plotch.io/image/upload/C/V/1671109999_NS5wbmc=.png" alt="Ceramic Mug" cursor="pointer" />
  </Box>
  <Box bg='tomato' height='80px'>
  <Image src="https://cdn.plotch.io/image/upload/C/V/1671110006_Ni5wbmc=.png" alt="Idols" cursor="pointer" />
  </Box>
</SimpleGrid>
        </div>
    </div>

    </div>
       <Box className='Carausel' style={{
        width:"100%",
        height:"500px",
        marginTop:"150px",
        marginBottom:"40px"
       }}>
   
     <Caraousel />
        
       </Box>

   <SimpleGrid className='support'
   w="100%"
   m="auto"
   mt={{sm:10, md:40,lg:50}}
   height="auto"
   p="10"
   bgColor="black"
   alignitems="center"
   
   columns={{sm:null, md:3, lg:5}}>

      <Image ml="40px"  w="250px" h="120px" src="https://cdn.plotch.io/image/upload/C/V/1660916598_MS5wbmc=.png" alt="On Time" cursor="pointer" />
      <Image ml="40px"  w="250px" h="120px" src="https://cdn.plotch.io/image/upload/C/V/1660916607_Mi5wbmc=.png" alt="100% quality" cursor="pointer" />
      <Image ml="40px"  w="250px" h="120px" src="https://cdn.plotch.io/image/upload/C/V/1660916612_My5wbmc=.png" alt="Easy Customer" cursor="pointer" />
      <Image ml="40px"  w="250px" h="120px" src="https://cdn.plotch.io/image/upload/C/V/1660916617_NC5wbmc=.png" alt="Secured and Safe" cursor="pointer" />
      <Image ml="40px" w="250px" h="120px" src="https://cdn.plotch.io/image/upload/C/V/1660916629_NS5wbmc=.png" alt="Multiple Payment" cursor="pointer" />
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
            <Box><Image src="https://cdn.plotch.io/image/upload/C/V/1671110234_SG9tZWRlY29yLnBuZw==.png" w="50" cursor="pointer" /></Box>
            <Box><Image src="https://cdn.plotch.io/image/upload/C/V/1671110241_NS5wbmc=.png" cursor="pointer" /></Box>
            <Box><Image src="https://cdn.plotch.io/image/upload/C/V/1671110248_Ni5wbmc=.png" cursor="pointer" /></Box>
            <Box><Image src="https://cdn.plotch.io/image/upload/C/V/1671110264_My5wbmc=.png" cursor="pointer" /></Box>
        </SimpleGrid>
      </Box>
  <Box mt={{sm:220, md:220, lg:160}} h="auto">
    <Footer />
  </Box>
 
    </>
  )
}

export default Home;