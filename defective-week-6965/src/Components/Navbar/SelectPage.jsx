import React from 'react';
import { Link } from 'react-router-dom';

const SelectPage = () => {
  return (
    <div>
        <div className='Category'
     style={{
        width:"100%",
        height:"50px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap:"15px",
        backgroundColor:"rgb(144,39,53)"

     }}
    >
     <div><Link to="/home-decor" ><h1 style={{
        color:"white",
        fontSize:"22px",
        fontWeight:"700",
        fontFamily:"Merriweather"
     }}>Home Decor</h1></Link>  </div>
     <div><Link to="/products-near-me"><h1 style={{
        color:"white",
        fontSize:"22px",
        fontWeight:"700",
        fontFamily:"Merriweather"
     }}>Products Near Me</h1></Link></div>   
    </div>
    </div>
  )
}

export default SelectPage;