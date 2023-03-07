import Item from "./Item";
import { Container, Flex } from "@chakra-ui/react";
const ItemList = ({ zapatillas }) => {
  return (
    <>
    

      <Container maxW="container.sm" >
        {zapatillas?.map((zapatilla) => (
          <Item
            key={zapatilla.id}
            id={zapatilla.id}
            nombre={zapatilla.nombre}
            descripcion={zapatilla.descripcion}
            precio={zapatilla.precio}
            stock={zapatilla.stock}
            categoria={zapatilla.categoria}
          />
        ))}
      </Container>
    
    </>
  );
};

export default ItemList
