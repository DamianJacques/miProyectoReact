import Item from "./Item";
import { Container } from "@chakra-ui/react";
const ItemList = ({ Zapatillas }) => {
  return (
    <>
      <Container maxW="container.sm" >
        {Zapatillas?.map((Zapatilla) => (
          <Item
            key={Zapatilla.id}
            id={Zapatilla.id}
            nombre={Zapatilla.nombre}
            descripcion={Zapatilla.descripcion}
            precio={Zapatilla.precio}
            stock={Zapatilla.stock}
            categoria={Zapatilla.categoria}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList
