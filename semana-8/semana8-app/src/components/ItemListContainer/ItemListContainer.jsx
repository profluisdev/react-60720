import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { seedProducts } from "../../utils/seedProducts";

export const ItemListContainer = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProductsDB = ( category ) => {
    // Referencia a la colección de nuestras base de datos
    // const myProducts = collection(db, "products");
    const myProducts = category ? query( collection(db, "products"), where( "category", "==",  category) ) : collection(db, "products")
    // Obtener los documentos de la base de datos
    getDocs(myProducts).then((response) => {
      // const item = {
      //   id: response.docs[0].id,
      //   ...response.docs[0].data()
      // }

      // Ordenamos los productos recibidos de nuestra base de datos en nu nuevo array para guardar en nuestro state
      const productList = response.docs.map((doc) => {
        const item = {
          id: doc.id,
          ...doc.data(),
        };
        return item;
      });

      // Guardamos nuestros productos ordenados en nuestro state
      setProducts(productList);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    getProductsDB(category);
    // seedProducts(); //! Importante, ejecutar una sola ves y borrar la función del useEffect
  }, [category]);

  return <>{isLoading ? <h2>Cargando productos ...</h2> : <ItemList products={products} />}</>;
};
