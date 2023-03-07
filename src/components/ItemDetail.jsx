import { useEffect, useState, useContext } from "react";
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
import { Link, useParams } from "react-router-dom";
import ItemCount from "../components/ItemCount";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { CartContext } from "../Context/ShoppingCartContext";

const ItemDetail = ({ zapatillas }) => {
  const [cart, setCart] = useContext(CartContext);
  const { id } = useParams();

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const zapaData = doc(db, "zapatillas", `${id}`);

    getDoc(zapaData).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      } else {
        console.log("No exite el documento!");
      }
    });
  }, []);

  const zapatillasFilter = zapatillas.filter((zapatilla) => zapatilla.id == id);
  return (
    <>
      {zapatillasFilter.map((zapatilla) => (
        <div key={zapatilla.id}>
          <Center p="1rem">
            <Card className="card-main">
              <CardBody>
                <Image borderRadius="lg" src={zapatillaImg} />
                <Stack mt="6" spacing="3">
                  <Heading size="xl">{zapatilla.nombre}</Heading>
                  <Text color="blue.800" fontSize="1">
                    Descripcion: {zapatilla.descripcion}
                  </Text>
                  <Text color="blue.800" fontSize="1">
                    Categoria: {zapatilla.categoria}
                  </Text>
                  <Text color="red.600" fontSize="xl">
                    Stock: {zapatilla.stock}
                  </Text>
                  <Text color="green.600" fontSize="xl">
                    Precio: $ {zapatilla.precio}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer">
                <ItemCount
                  stock={zapatilla.stock}
                  id={zapatilla.id}
                  precio={zapatilla.precio}
                  nombre={zapatilla.nombre}
                />
                <Center className="btn-center">
                <Link to={"/cart"}>
                  <Button variant="solid" colorScheme="blue"
                  >
                    Comprar
                  </Button>
                  </Link>
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
