import React from 'react';
import { Box,Image,Text,Heading,Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const HomeProductCard = ({img, title,productprice,regularprice,discountdetails,buttontext,onClick,id}) => {
  return (
    <div>
        <Box boxShadow= "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px">
            <Box  >
                <Link to={`/home-decor/${id}`}>

                <Image src={img} alt={title} w="95%" m="auto"/>
                </Link>
            </Box>
            <Box >
                <Box>
                <Text noOfLines={1} fontSize="15px" fontWeight={600} fontFamily="Merriweather">{title}</Text>
                </Box>
                <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="20px"
                >
                <Box>
                <Text fontWeight={700} color="rgb(252,177,55)" fontSize="18px" fontFamily="Merriweather" >{productprice}</Text>
                </Box>
                <Box>
                    <Text textDecoration="line-through" fontFamily="Merriweather">

                    {regularprice}
                    </Text>
                </Box>
               <Box>
                <Text color="rgb(144,39,53)" fontFamily="Merriweather" fontSize="12px" >

                      {discountdetails}
                </Text>
                  </Box>
                  </Box>
            </Box>
            <Box>
                <Button bgColor="rgb(144,39,53)" width="100%"color="white">{buttontext}</Button>
            </Box>
        </Box>
    </div>
  )
}

export default HomeProductCard;


/*
"id":17,
            "Image": "https://cdn.plotch.io/image/upload/w_301,h_301/C/V/PLOwsmZK3E1674143432_8e7ddd6d5975a8997515e193935985acfa7d45848a5c42565e7584f078981bd4.jpg",
			"title": "10X8 Inch Beige Black Ring Designed Matka Ceramic Planter",
			"productprice": "₹ 389",
			"regularprice": "₹ 590",
			"discountdetails": "35% Off"




*/