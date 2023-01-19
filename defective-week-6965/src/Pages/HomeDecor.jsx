import React,{ useState,useEffect  } from 'react';
import { useSearchParams } from 'react-router-dom'
import SelectPage from '../Components/Navbar/SelectPage';
import { Box, SimpleGrid,Text,Button } from '@chakra-ui/react';
import HomeProductCard from '../Components/HomeProductCard';


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


const HomeDecor = () => {
    const[data,setData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
   const [page, setPage] = useState(
    getCurrentPageUrl(searchParams.get("page")) || 1
   )
   const [orderBy, setOrderBy] = useState("");
   const limit=9;
   const sort = "regularprice";

   useEffect(() => {
   let apiUrl = getUrl(`http://localhost:5000/home-decor/?_page=${page}&limit=${limit}`,
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



  



  return (
    <div>
        <Box>
        <SelectPage />
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
        border="2px solid black"
        mt="110px"
        display="flex"
        
        >
        <Box className='Filter-section'
        w="20%"
        border="2px solid black"
        ></Box>
        <Box className='Products-list' 
          w="80%"
          h="auto"
          alignItems="right"
        >
            <SimpleGrid 
             columns={[1, 2, 4]}
             spacing={10}
             alignItems="right"
            >

            {data?.map((el)=>(
                <Box key={el.id}>
                
                <HomeProductCard
                id={el.id}
                img={el.image}
                title={el.title}
                productprice={el.productprice}
            regularprice={el.regularprice}
            discountdetails={el.discountdetails}
            buttontext="Add to cart"
            
            />
            </Box>
            ))}
              </SimpleGrid>
        </Box>
           
        </Box>
        <Box>
            <Button disabled={page===1} onClick={() => setPage(page-1)} >PREV</Button>
            <Button disabled>{page}</Button>
            <Button disabled={page===4} onClick={() => setPage(page+1)}>NEXT</Button>
        </Box>
    </div>
  )
}

export default HomeDecor;