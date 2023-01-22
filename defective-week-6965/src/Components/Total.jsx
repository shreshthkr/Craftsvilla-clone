import { Text } from '@chakra-ui/react';
import React from 'react'


const Total = ({data}) => {

  const total = data.reduce((acc, item) => {
    return acc + item.data.productprice * item.qunatity;
  }, 0);
  return (
    <div>
<Text fontFamily="Merriweather" fontSize="16px" fontWeight={600} >
Subtotal : ₹{total}
    </Text>     
      </div>
  )
}

export default Total;