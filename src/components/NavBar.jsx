import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <Container maxW="120rem" bg="blue.100" color="#262626">
        <Flex alignItems="center" gap="2">
          
            <Heading size="md">
              <Link to={"/"}>
                <img src="./Img/Logo.png" alt="logo" />
              </Link>
            </Heading>
                
          <Spacer />

          <Box>
          <Menu>
              <Link to={"/productos"}>
                <MenuButton
                  as={Button}
                  size="lg"
                  variant="outline"
                  colorScheme="blackAlpha"
                  m="5"
                >
                  Productos
                </MenuButton>
              </Link>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                size="lg"
                variant="outline"
                colorScheme="blackAlpha"
                
                m="5"
              >
                Categories
              </MenuButton>
              <MenuList className="menu-list" color="blackAlpha.700">
        
                <Link to={`/categoria/${"ruta"}`}>
                  <MenuItem>Ruta</MenuItem>
                </Link>
                <Link to={`/categoria/${"trekking"}`}>
                  <MenuItem>Trekking</MenuItem>
                </Link>
                <Link to={`/categoria/${"pista"}`}>
                  <MenuItem>Pista</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
          <Box p="2" color="White">
            <CartWidget />
          </Box>

          
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
