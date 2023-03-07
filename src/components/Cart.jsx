import {
    FormControl,
    FormLabel,
    Input,
    Stack,
    FormHelperText,
    Button,
    Container,
    Box,
    Textarea,
    Center,
    Heading,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Text,
  } from "@chakra-ui/react";
  import { useState, useContext } from "react";
  import { CartContext } from "../Context/ShoppingCartContext";
  import SendOrder from "./SendOrder";
  
  const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    

  
    return (
      <>
        <Center bg="#D6EAF8" h="100px" color="black">
          <Heading color="blue.500" as="h2" size="2xl">
            Carrito
          </Heading>
        </Center>
        {cart.map((item) => {
          return (
            
            <Container key={item.id} className="main-catalogue">
              <Card maxW="sm">
                <CardHeader>
                  <Heading size="md">{item.nombre}</Heading>
                </CardHeader>
                <CardBody>
                  <Text as="b">Cantidad: {item.cantidad}</Text>
                  <Text>Precio: $ {item.precio}</Text>
                </CardBody>
                <CardFooter>
                  <Button
                    color="blue.500"
                    onClick={() => console.log(cart)}
                  >
                    Eliminar del carrito
                  </Button>
                </CardFooter>
              </Card>
            </Container>
            
          );
        })}
        
        <SendOrder /> 
      </>
    );
  };
  
  export default Cart;