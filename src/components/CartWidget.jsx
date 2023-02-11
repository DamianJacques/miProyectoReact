import { Button, Flex } from "@chakra-ui/react";
import React from "react";

const CartWidget = () => {
  return (
    <>
    
    <div className="cart">
    <Flex alignContent="center" gap="2">  
        <Button size="lg" variant="outline" colorScheme="blackAlpha">
          <span className="material-symbols-outlined">shopping_cart</span>
        </Button>      
        </Flex>  
    </div>
    </>
    
  );
};

export default CartWidget;
