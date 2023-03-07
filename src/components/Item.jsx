import React from "react";
import Zapatilla from "../assets/Zapatilla.jpg";
import {
  Center,
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Divider,
  Stack,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, stock, categoria, precio, descripcion, imagen }) => {
  return (
    <div>
      <div key={id}>
        <Center p="1rem">
          <Card className="card-main">
            <CardBody>
              <Image h="8rem"  w="8rem" borderRadius="lg" src={Zapatilla} />
              <Stack mt="6" spacing="3">
                <Heading size="md">{nombre}</Heading>

                <Text color="blue.500" fontSize="l">
                  Descripcion: {descripcion}
                </Text>

                <Text color="blue.500" fontSize="l">
                  Categoria: {categoria}
                </Text>
                <Text color="red.600" fontSize="xl">
                  Stock: {stock}
                </Text>
                <Text color="blue.600" fontSize="xl">
                  Precio: $ {precio}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="card-footer">
              <Center className="btn-center">
                <Button variant="solid" colorScheme="blue">
                  <Link to={`/item/${id}`}>Detalle</Link>
                </Button>
              </Center>
            </CardFooter>
          </Card>
        </Center>
      </div>
    </div>
  );
};

export default Item;