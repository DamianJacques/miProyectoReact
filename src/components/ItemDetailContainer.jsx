import ItemDetail from "./ItemDetail";
import { useState } from "react";
import Data from "../data.json";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [Zapatillas, setZapatillas] = useState([]);
  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Data.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        const ZapatillasFilter = Data.filter((Zapatilla) => Zapatilla.id == id);
        resolve(ZapatillasFilter);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
      setBikes(datosFetched);
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();
  return <ItemDetail Zapatillas={Data} />;
};

export default ItemDetailContainer;
