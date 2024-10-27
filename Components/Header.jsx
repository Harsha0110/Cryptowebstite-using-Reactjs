import { Button, HStack } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
<HStack p={"5"} shadow={"base"} bgColor={"blackAlpha.900"}>
  <Button varient={"unstyled"} color={"white"}>
    <Link to= "/">Home</Link>

  </Button>

  <Button varient={"unstyled"} color={"white"}>
    <Link to= "/Exchange">Exchange</Link>

    
  </Button>

  <Button varient={"unstyled"} color={"white"}>
    <Link to= "/Coins">Coins</Link>
    
  </Button>
</HStack>
  );
}
export default Header;
