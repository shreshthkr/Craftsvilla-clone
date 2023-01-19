import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Box,
    Image,
    Text,
    Input,
    FormLabel,
    Stack,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    PinInput, PinInputField,
    HStack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react';

  import {FaBoxOpen,FaUser,FaTags,FaShoppingCart} from "react-icons/fa";
  import { SearchIcon,ChevronDownIcon,ChevronUpIcon } from "@chakra-ui/icons";
import { useState } from 'react';
import {BsHeart} from "react-icons/bs";
import {ImCart} from "react-icons/im";
import { IoLocationSharp } from "react-icons/io5";
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContextProvider';
import { Link } from 'react-router-dom';



const Navbar = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [showOtp, setShowOtp] = useState(true);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {isAuth, LoginHandle, LogoutHnadle} = useContext(AuthContext);
    const [num, setNum] = useState("");
 

    const TextChange =()=> {
        setIsRegistered(!isRegistered)
    }
   
    const OTP = Math.floor(Math.random()*10000)

    const handleSubmit = () => {
      setNum("");
      setTimeout(() => {
        alert(`Your One Time Password is: ${OTP}`)
      })
      setShowOtp(false);
    }
      
   const handleOtp = () => {
    LoginHandle();

    return alert("Successfully Logged in")  
   }
  
   const Logout = () => {
    LogoutHnadle();
    setShowOtp(true);
   }
 

    const Alert = () => {
      return alert ("Please enter valid mobile no.")
    }

  return (
    <>
    <div style={{
      width:"100%",
      height:"80px",
      border:"2px solid black",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between"

    }}>
      <div className='first'
      style={{
        width:"48%",
        display:"flex",
        marginLeft:"30px",
        alignItems:"center",
        justifyContent:"space-between"
      }}
      >
      <div className='logo'>
        <img width="180px" src="https://img.plotch.store/assets/MTY2MjQ1MDUwM181MjA1.png" alt="craftsvilla_logo" />
      </div>
      
      <div className='input-tag'
      style={{
        
        width:"570px",
        height:"70%",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        marginLeft:"15px"
      }}
      >
      <Stack spacing={4} w='90%'>
  <InputGroup>
    <InputLeftAddon children='SEARCH' h='45px' w='90px'  />
    <Input type='text' placeholder='Search' bgColor="rgb(237,242,247)"  h='45px' />
      <InputRightAddon children={<SearchIcon />} h='45px'  />
  </InputGroup>

  
</Stack>
<div>
<IoLocationSharp size="1.5rem" />
</div>

      </div>
      </div>
      <div style={{
        width:"33%",
        height:"70%",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around",
       
      }}>
    <div className='register' > 
{ !isAuth ?  (<div style={{
      height:"100%",
      display:"flex",
      alignItems:"center",
      gap:"10px",
      cursor:"pointer",
    }}>
      <div>
    <FaUser size="1rem"/>
    </div>

  <Text onClick={onOpen} fontSize="15px" >
          
   Sign In/Register
  </Text>
</div>) :
(<Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} 
      as={Button} bgColor="transparent"
       rightIcon={!isOpen ?( <ChevronDownIcon />) : (<ChevronUpIcon />)}
       fontSize="20px"
       >
        My Account
      </MenuButton>
      <MenuList>
        <Link to="/cart"><MenuItem>My Orders</MenuItem></Link>
        <MenuItem>My Address</MenuItem>
        <MenuItem onClick={Logout} >SignOut</MenuItem>
      </MenuList>
    </>
  )}
</Menu>)

}

      <Modal onClose={onClose} isOpen={isOpen}
      size="4xl"
      isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody style={{
           
            display:"flex",
            justifyContent:'space-between',
            gap:"20px",
            height:"400px"
          }}>
            <Box style={{
              width:"40%",
              height:"500px",
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
              justifyContent:"space-between",
              backgroundColor:"rgb(252,252,252)"

            }}>
              
               <Text fontSize="25px" fontWeight='600'>BENEFITS</Text>
               <Box style={{
                 display:"flex",
                 flexDirection:"column",
                 alignItems:"center",
                 justifyContent:"space-evenly",
                 textAlign:"center"
                 
               }}>
                  <FaBoxOpen size="2.5rem" color="red" />
                  <Text>Manage Oders</Text>
                  <Text textAlign="center">Track,Return & Cancle your orders</Text>
               </Box>
               <Box style={{
                 display:"flex",
                 flexDirection:"column",
                 alignItems:"center",
                 justifyContent:"space-evenly",
                 textAlign:"center"
               }}>
                <FaTags color="red" size="2.5rem" />
                <Text>Access Products that you love</Text>
                <Text>Seamless access to Wishlist & Cart items</Text>
               </Box>
               <Box style={{
               
                 display:"flex",
                 flexDirection:"column",
                 alignItems:"center",
                 justifyContent:"space-evenly",
                 textAlign:"center"
               }}>
                <FaShoppingCart  color="red" size="2.5rem" />
                <Text>Quicker Checkout</Text>
                <Text>Saved Addresses & bank details for 3 step checkout</Text>
               </Box>

            </Box>
            <Box style={{
               width:"53%",
               height:"400px",
               display:"flex",
               flexDirection:"column",
               alignItems:"left",
               justifyContent:"space-evenly"
            }}>
              <Box>
                <Image w="180px" src="https://img.plotch.store/assets/MTY2MjQ1MDUwM181MjA1.png" />
              </Box>
              <Box>
                <Text style={{
                  fontSize:"25px",
                  textDecoration:"underline"
                }}>
                    {isRegistered ? "Login/Sign Up" : "Register"}
                </Text>
              </Box>
              <Box>
                <FormLabel>

                  {showOtp ?( <Text fontSize="20px">

                  Please provide your Mobile No.
                  </Text>)
                :   (<Text> Please enter OTP sent to your mobile or change your number</Text>)
                }
                  </FormLabel>
                  {showOtp ?
                (<Input type="number" placeholder='Enter 10 digit Mobile No.' h="50px" value={num}
                onChange={(e)=> setNum(e.target.value)}
                />) :
                (<HStack>
  <PinInput type='otp' width="100%" >
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>)
}
              </Box>
              <Box>
                {showOtp ? (<Button bgColor="rgb(144,39,53)" color='white' width="100%" h="45px"
                onClick={num.length===10 ? handleSubmit : Alert}
                >CONTINUE</Button>) :
                <Button bgColor="rgb(144,39,53)" color='white' width="100%" h="45px"
                onClick={handleOtp}
                >CONTINUE</Button>
                }

              </Box>

              {showOtp ? (<Text onClick={TextChange} textAlign="center" marginTop="-20px" fontWeight="600" cursor="pointer">
                {isRegistered ? "New User? Sign Up" : "Already Registered? Login"}
              </Text>) :
               (<Box> 
               <Text>
                  Didn't recieve OTP?
                </Text> 
              <Text onClick={handleSubmit}>Resend OTP</Text>
              </Box>
              )
            }
            </Box>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </div>





      <div className='WishList'  style={{
      height:"100%",
      display:"flex",
      alignItems:"center",
      gap:"10px",
    }}>
        <div><Link to="/wishlist">
        <BsHeart size="1.2rem" />
        </Link>
        </div>
        <div>
          <Link to="/wishlist">

          <Text fontSize="18px">WishList</Text>
          </Link>
          </div>
        |
        
      </div>
    

      <div className='Cart' style={{
      height:"100%",
      display:"flex",
      alignItems:"center",
      gap:"10px",
    }}>
        <div>
        <Link to="/cart">
        <ImCart size="1.2rem" />
        </Link>
        </div>
      <div>
        <Link to="/cart">
      <Text fontSize="18px">Cart</Text>
        </Link>
      </div>
      </div>
    </div>
 
      </div>
      </>
  )
}

export default Navbar;