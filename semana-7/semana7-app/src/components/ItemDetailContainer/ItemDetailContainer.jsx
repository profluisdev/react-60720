import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";


export const ItemDetailContainer = () => {

  const { id } = useParams();
  const [item, setItem] = useState(null);

  const getProductDB = (id) => { 
    // Referencia a nuestro producto
    const productRef = doc( db, "products", id );

    getDoc(productRef)
      .then( response => {
          const product = {
            id: response.id,
            ...response.data()
          }

          setItem(product);
      } )

   }

  useEffect(() => { 

   getProductDB(id);

   }, [])

  return (
    <>
    {/* Falta poner el isLoading */}
    {item && <ItemDetail {...item} />}
    </>
  )
}
