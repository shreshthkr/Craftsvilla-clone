import React,{ useState,useEffect  } from 'react';
import { useSearchParams } from 'react-router-dom'
import { Box, useToast,Text,Button,  Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
Checkbox } from '@chakra-ui/react';
import NearMeProductCard from './NearMeProductCard';
import axios from "axios";
import Footer from '../Components/Navbar/Footer';

const getCurrentPageUrl = (value) => {
    value = Number(value);
    if(typeof value === "number" && value <= 0){
      value = 1;
    }
    if(!value){
      value =1;
    }
    return value;
  }


 const getUrl = (url,sort,orderBy) => {
    if(sort && orderBy){
        return (url =`${url}&_sort=${sort}&_order=${orderBy}` );
    }
    return url;
 }


const ProuctsNearMe = () => {
    const[data,setData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
   const [page, setPage] = useState(
    getCurrentPageUrl(searchParams.get("page")) || 1
   )
   const [cart, setCart] = useState([]);
   const [orderBy, setOrderBy] = useState("");
   const limit=9;
   const sort = "productprice";
   const toast = useToast();
   useEffect(() => {
   let apiUrl = getUrl(`https://craftsvilla-backend.onrender.com/products-near-me/?_page=${page}&limit=${limit}`,
   sort,
   orderBy)
   fetch(apiUrl)
   .then((res) => res.json())
   .then((json)=> setData(json))
   },[page, orderBy]);


   useEffect(() => {
    let paramObj = {page};
    if(orderBy){
      paramObj.orderBy = orderBy;
    }
    setSearchParams(paramObj)
   },[page, orderBy]);


   const addToCart = (data) => {
   
    return axios.post(`https://craftsvilla-backend.onrender.com/cart`,{
     data,
     qunatity:1
    })
    .then((res) => {
          setCart([...cart,res.data.data]);
          toast({
           title: 'Successfull',
           description: "Item added to cart",
           status: 'success',
           duration: 4000,
           isClosable: true,
         })
    })
    .catch((err) => {
     console.log(err)
    })
 }
 
  



  return (
    <div>
        <Box>
        </Box>
        <Box 
        display="flex"
        ml="22%"
        mt="50px"
        mb="-100px"
        gap="20px"

        >
            <Text fontFamily="Merriweather" fontSize="20px">Sort By: Popular  |</Text>
          

            <Text  fontFamily="Merriweather" fontSize="20px" onClick={() => setOrderBy("asc")}>Price: Low to High  |</Text>
          
            <Text fontFamily="Merriweather" fontSize="20px" onClick={() => setOrderBy("desc")}>Price: High to Low  |</Text>
            <Text fontFamily="Merriweather" fontSize="20px">Discount  |</Text>
            <Text fontFamily="Merriweather" fontSize="20px">New Arrivals</Text>
        </Box>
        <Box 
        w="95%"
        h="auto"
        m="auto"
        mt="110px"
        display="flex"
        gap="20px"
        
        >
        <Box className='Filter-section'
        w="20%"
        >
            <Text textAlign="left" ml="5px" fontSize='1.6rem' fontWeight={600} fontFamily="Merriweather">Filter by</Text>
<Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
            <Text textAlign="left" ml="5px" fontSize='18px' fontWeight={600} fontFamily="Merriweather">

          Price
            </Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} display="flex" flexDirection="column" gap="10px">
     <Checkbox fontSize='18px' fontWeight={600} fontFamily="Merriweather">1000-2000</Checkbox>
     <Checkbox fontSize='18px' fontWeight={600} fontFamily="Merriweather">2000-5000</Checkbox>
     <Checkbox fontSize='18px' fontWeight={600} fontFamily="Merriweather">500-1000</Checkbox>
     <Checkbox fontSize='18px' fontWeight={600} fontFamily="Merriweather">Above 5000</Checkbox>
     <Checkbox fontSize='18px' fontWeight={600} fontFamily="Merriweather">Below 500</Checkbox>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
            <Text textAlign="left" ml="5px" fontSize='18px' fontWeight={600} fontFamily="Merriweather" >

          Discount
            </Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} display="flex" flexDirection="column" gap="10px">
    <Checkbox fontSize='18px' fontWeight={600} fontFamily="Merriweather">0% or more</Checkbox>
     <Checkbox fontSize='18px' fontWeight={600} fontFamily="Merriweather">10% or more</Checkbox>
     <Checkbox fontSize='18px' fontWeight={600} fontFamily="Merriweather">20% or more</Checkbox>
     <Checkbox fontSize='18px' fontWeight={600} fontFamily="Merriweather">30% or more</Checkbox>
     <Checkbox fontSize='18px' fontWeight={600} fontFamily="Merriweather">40% or more</Checkbox>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
            <Text textAlign="left" ml="5px" fontSize='18px' fontWeight={600} fontFamily="Merriweather" >

         Category
            </Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} display="flex" flexDirection="column" gap="10px">
    <Checkbox fontSize='18px' fontWeight={600} fontFamily="Merriweather">Accessories</Checkbox>
     <Checkbox fontSize='18px' fontWeight={600} fontFamily="Merriweather">Baby Care</Checkbox>
     <Checkbox fontSize='18px' fontWeight={600} fontFamily="Merriweather">Bakery, Cakes & Dairy</Checkbox>
     <Checkbox fontSize='18px' fontWeight={600} fontFamily="Merriweather">Beauty & Hygine</Checkbox>
     <Checkbox fontSize='18px' fontWeight={600} fontFamily="Merriweather">Beverages</Checkbox>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
            <Text textAlign="left" ml="5px" fontSize='18px' fontWeight={600} fontFamily="Merriweather" >

          Time To Ship
            </Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} display="flex" flexDirection="column" gap="10px">
    <Checkbox fontSize='18px' fontWeight={600} fontFamily="Merriweather">0 minutes</Checkbox>
     <Checkbox fontSize='18px' fontWeight={600} fontFamily="Merriweather">6 minutes</Checkbox>
     <Checkbox fontSize='18px' fontWeight={600} fontFamily="Merriweather">0 days</Checkbox>
     <Checkbox fontSize='18px' fontWeight={600} fontFamily="Merriweather">1 day 0 minutes</Checkbox>
     <Checkbox fontSize='18px' fontWeight={600} fontFamily="Merriweather">2 days 0 minutes</Checkbox>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
        </Box>
 
        <Box className='Products-list' 
          w="80%"
          h="auto"
          alignItems="right"
        >
            

            
                <Box >
                
                <NearMeProductCard
              product={data}
              AddToCart={addToCart}
              buttontext="Add To Cart" 
            
            />
            </Box>
          
        </Box>
           
        </Box>
        <Box mt="30px" mb="30px">
            <Button disabled={page===1} onClick={() => setPage(page-1)} bgColor="rgb(144,39,53)" color="white" >PREV</Button>
            <Button disabled>{page}</Button>
            <Button disabled={page===4} onClick={() => setPage(page+1)} bgColor="rgb(144,39,53)" color="white">NEXT</Button>
        </Box>
        <Box>
          <Footer />
        </Box>
    </div>
  )
}

export default ProuctsNearMe;