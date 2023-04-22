import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Box,Button,Text,TableContainer,Table,Thead,Tr,Th,Tbody,Td,Image,Link} from "@chakra-ui/react"
import EmptyCart from '../Components/EmptyCart';
import Total from '../Components/Total';
import { useNavigate } from 'react-router-dom';
import {MdDelete} from "react-icons/md";

   const getCartProducts = () => {
    return axios.get(`https://craftsvilla-backend.onrender.com/cart`)
   }



const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();


  useEffect(() => {
    getCartProducts()
    .then((res)=> setCartItem(res.data))
    .catch((error) => {
      console.log(error)
    })
  },[]);

  const handleDataChange = (id, value) => {
    const updatedData = cartItem.map((item) =>
      item.id === id ? { ...item, qunatity: item.qunatity + value } : item
    );
    setCartItem(updatedData);
  };

const placeOrder = () => {
  let path = "/checkout";
navigate(path)
}

const removeItem = (id) => {
  axios.delete(`https://craftsvilla-backend.onrender.com/cart/${id}`)
  .then((res)=> setCartItem(res.data))
  .catch((err) => {
    console.log(err);
  })
}




  const Day = Math.floor(Math.random()*10)
  const Hour =  Math.floor((Math.random()*100)/60)
  const Min =  Math.floor((Math.random()*100))


  return (
    <div>
       {cartItem.length === 0 ? (<EmptyCart />) : 
       
       (
        <Box>
          <Box className='Subtotal' 
          w="80%"
          m="auto"
          mt="50px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          column={{sm:null,md:2,lg:2}}
          >
            <Box>
              <Text fontFamily="Merriweather" fontWeight={600} >
                My Cart ({cartItem.length} Items)
              </Text>
            </Box>
            <Box
            w="40%"  display="flex"
          alignItems="center"
          justifyContent="space-between">
            <Total data={cartItem} />
           
              <Button w="70%" bgColor="rgb(144,39,53)" color="white" fontFamily="Merriweather" fontSize='xl'
              onClick={placeOrder}
              >Place Order</Button>
            </Box>
          </Box>
          <Box className='List' 
          w="85%"
          h="auto"
          m="auto"
          mt={{sm:"50px",md:"50px",lg:"50px"}}
          >
            <hr />
          <TableContainer >
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th  fontFamily="Merriweather" fontSize="15px" fontWeight={100} color="gray.500">Item Details</Th>
        <Th fontFamily="Merriweather" fontSize="15px" fontWeight={100} color="gray.500">Quantity</Th>
        <Th fontFamily="Merriweather" fontSize="15px" fontWeight={100} color="gray.500">Deivery</Th>
        <Th fontFamily="Merriweather" fontSize="15px" fontWeight={100} color="gray.500">Price</Th>
      </Tr>
    </Thead>
    {cartItem?.map((item)=>(
    <Tbody key={item.id}>
      <Tr>
        <Td
        
         display="flex"
         gap="20px"
        >
          <Image w="80px" src={item.data.image} alt={item.data.title}/>
          
           <Text noOfLines={1} fontFamily="Merriweather" fontSize="15px">
            {item.data.title} <MdDelete color="rgb(144,39,53)"  
            onClick={() => removeItem(item.id)}
            />
           
           </Text></Td>
        <Td 
         
        >
          <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          >
             <Button borderRadius="100%"  fontSize="2rem" 
          color="rgb(144,39,53)" variant='outline' width="5px" colorScheme='rgb(144,39,53)'
           onClick={() => handleDataChange(item.id,-1)} disabled={item.quantity===1}>-</Button>
        
             <Text>{item.qunatity}</Text>
             <Button borderRadius="100%" w="10%" disabled={item.quantity===10} onClick={() => handleDataChange(item.id,1)}
           fontSize="2rem" color="rgb(144,39,53)" variant='outline' colorScheme='rgb(144,39,53)'
          >+</Button>
          </Box>
        </Td>
        <Td>
          <Text  fontFamily="Merriweather" color="gray.500" fontSize="15px" fontWeight={300}>Estimated delivery time {Day}days,{Hour}hrs,{Min}min</Text>
        </Td>
        <Td>
          <Text fontSize="15px">
          ₹{item.data.productprice*item.qunatity}
          </Text>
        </Td>
      </Tr>
   
    </Tbody>
   ))}
  </Table>
</TableContainer>

          </Box>
          <Box
          w="80%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          >

          <Box className='Address'></Box>
          <Box w="20%"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          gap="20px"
          >
           <Text fontFamily="Merriweather" fontSize="xl" color="gray.500" textAlign='left'>PRICE DETAILS</Text>
          
          <Total data={cartItem} />
          <Button w="100%" bgColor="rgb(144,39,53)" color="white" fontFamily="Merriweather" fontSize='xl'
          onClick={placeOrder}
          >Place Order</Button>
          </Box>
          </Box>
        </Box>
       )
       
       
       }
    </div>
  )
}

export default Cart;