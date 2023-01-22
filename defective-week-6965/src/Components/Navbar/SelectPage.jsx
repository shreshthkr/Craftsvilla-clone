import { Box } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const SelectPage = () => {
  return (
    <div>
        <Box className='Category'
     style={{
        width:"100%",
        height:"auto",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap:"15px",
        backgroundColor:"rgb(144,39,53)",
        flexWrap:"wrap-reverse"
        
     }}
     column={{sm:1, md:2, lg:2}}
    >
     <div style={{height:"50px",
     diaplay:"flex",
     alignItems:"center",
     justifyContent:"center"}}><Link to="/home-decor" ><h1 style={{
        color:"white",
        fontSize:"20px",
        fontWeight:"700",
        fontFamily:"Merriweather",
        marginTop:"10px"
     }}>Home Decor</h1></Link>  </div>
     <div style={{height:"50px"}} ><Link to="/products-near-me"><h1 style={{
        color:"white",
        fontSize:"20px",
        fontWeight:"700",
        fontFamily:"Merriweather",
        marginTop:"10px"
     }}>Products Near Me</h1></Link></div>   
    </Box>
    </div>
  )
}

export default SelectPage;