import ItemList from "./ItemList";
import Data from "../Data.json";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";
const ItemListContainer = () => {
  const { categoria } = useParams();
 

  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Data.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        resolve(Data);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();

  if (categoria === undefined) {
    return (
      <div>
        <Center bg="#D6EAF8" h="100px" color="black">
          <Heading as="h2" size="2xl">Catalogo de Zapatillas</Heading>
        </Center >
        <ItemList Zapatillas={Data} />
      </div>
    );
  } else {
    const catFilter = Data.filter(
      (Zapatilla) => Zapatilla.categoria === categoria
    );
    return (
      <div>
        <Center bg="#D6EAF8" h="100px" color="black">
          <Heading as="h2" size="2xl">
            Zapatillas por categoria
          </Heading>
        </Center>
        {categoria ? (
          <ItemList Zapatillas={catFilter} />
        ) : (
          <ItemList Zapatillas={Data} />
        )}
      </div>
    );
  }
};
export default ItemListContainer;
