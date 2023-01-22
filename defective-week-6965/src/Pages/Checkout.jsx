import React, { useState } from 'react';
import Total from '../Components/Total';
import { Box,FormControl,Text, FormLabel, Input,Button,useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useToast
} from '@chakra-ui/react';
import {BsFillCreditCardFill} from "react-icons/bs"


 const cards = [
    {id:1,
     cardname: "Debit Card"
    },
    {id:2,
        cardname: "Credit Card"
     },
    {id:3,
        cardname: "Net Banking"
    },
    {id:4,
        cardname: "UPI"
    },
    {id:5,
        cardname: "Wallet"
    },
 ]



const Checkout = () => {

 const [userDetail, setUserDetail] = useState({
    name:"",
    address:"",
    mobile:""
 });
 const { isOpen, onOpen, onClose } = useDisclosure()
 const toast = useToast()

 const handleSubmit = (e) => {
    e.preventDefaault();
  
 }


 const handleChange = (e) => {
   let val = e.target.value;
   let name = e.target.name;

   setUserDetail({
    ...userDetail,
    [name]:val
   })

 };
console.log(userDetail)
  return (
    <div style={{
        width:"60%",
        height:"auto",
        margin:"auto",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between"
    }}>
        <Box w="50%"
        mt="30px"
        >
            <Text>Step 1</Text>
            <form onSubmit={handleSubmit}>
            <FormControl>
            <FormLabel fontFamily="Merriweather">Enter Your Name</FormLabel>
                <Input 
                type="text"
                name="name"
                value={userDetail.name}
                onChange={handleChange}
                />  <FormLabel fontFamily="Merriweather">Enter Your Address</FormLabel>
                <Input 
                type="text"
                name="address"
                value={userDetail.address}
                onChange={handleChange}
                />  <FormLabel fontFamily="Merriweather">Enter Your Mobile no.</FormLabel>
                <Input 
                type="text"
                name="mobile"
                value={userDetail.mobile}
                onChange={handleChange}
                />
            </FormControl>
           <br /><Button bgColor="rgb(144,39,53)" color="white" w="50%" fontFamily="Merriweather" onClick={() => setUserDetail(userDetail)} >SUBMIT</Button>
           </form>
        </Box>
        <Box
        w="20%"
        
        display="flex"
        flexDirection="column"
        justifyContent="center"
       gap="30px"
        mr="120px">
           <Text>Step 2</Text>
           <Box>
            <Text>Payment Options</Text>
            <Box>
              {cards.map((el)=>(
            <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            lineHeight="30px"
            key={el.id} >

               <BsFillCreditCardFill /> <Text fontSize="18px" fontFamily="Merriweather" onClick={onOpen}>{el.cardname}</Text>
               <hr />
            </Box>
            
           ))}  
              <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>CHECKOUT</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight='bold' mb='1rem'>
             Name: {userDetail.name} <br /><br />
             Address: {userDetail.address} <br /><br />
             Mobile: {userDetail.mobile}
            </Text>
        
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variant='ghost'  onClick={() =>
        toast({
          title: 'Payment Confirmed',
          description: "Your Item will dispatch soon",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }>Checkout</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
            </Box>
           </Box>
           
        </Box>
    </div>
  )
}

export default Checkout