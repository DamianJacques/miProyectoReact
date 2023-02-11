import {
    Center,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Button,
    CardFooter,
    Divider,
  } from "@chakra-ui/react";
  import zapatillaImg from "../assets/Zapatilla.jpg";
  import { useParams } from "react-router-dom";

  
  const ItemDetail = ({ Zapatillas }) => {
    const { id } = useParams();
  
    const ZapatillasFilter = Zapatillas.filter((Zapatilla) => Zapatilla.id == id);
    return (
      <>
        {ZapatillasFilter.map((Zapatilla) => (
          <div key={Zapatilla.id}>
            <Center p="1rem" >
              <Card className="card-main" >
                <CardBody >
                  <Image borderRadius="lg" src={zapatillaImg} />
                  <Stack mt="6" spacing="3">
                    <Heading size="xl">{Zapatilla.nombre}</Heading>
                    <Text color="blue.800" fontSize="l">
                      Descripción: {Zapatilla.descripcion}
                    </Text>
                    <Text color="blue.800" fontSize="l">
                      Categoria: {Zapatilla.categoria}
                    </Text>
                    <Text color="red.600" fontSize="xl">
                      Stock: {Zapatilla.stock}
                    </Text>
                    <Text color="green.600" fontSize="xl">
                      Precio: $ {Zapatilla.precio}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter className="card-footer">
               
                  <Center className="btn-center">
                    <Button variant="solid" colorScheme="blue">
                      Comprar
                    </Button>
                  </Center>
                </CardFooter>
              </Card>
            </Center>
          </div>
        ))}
      </>
    );
  };
  
  export default ItemDetail;