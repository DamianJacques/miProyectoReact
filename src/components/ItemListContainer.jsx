import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";


const ItemListContainer = () => {
  const [zapatillas, setZapatillas] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const zapasColeccion = collection(db, "zapatillas");
    getDocs(zapasColeccion).then((querySnapshot) => {
      const zapatillas = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setZapatillas(zapatillas);
    });
  }, []);

  const catFilter = zapatillas.filter((zapatilla) => zapatilla.categoria === categoria);

  return (
    <div>
      {categoria ? <ItemList zapatillas={catFilter} /> : <ItemList zapatillas={zapatillas} />}
    </div>
  );
};
export default ItemListContainer;
