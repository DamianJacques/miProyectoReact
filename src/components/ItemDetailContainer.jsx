import ItemDetail from "./ItemDetail";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const zapasColeccion = collection(db, "zapatillas");
    getDocs(zapasColeccion).then((querySnapshot) => {
      const zapatillas = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(zapatillas);
    });
  }, []);

  return <ItemDetail zapatillas={data} />;
};


export default ItemDetailContainer;
