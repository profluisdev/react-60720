import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {

  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => { 
    setIsLoading(true); // Cada ves que se cargue nuestro componente vamos a setear en true el isLoading para que nos aparezca la carga
    getProducts()
      .then( resp => {
        // Verifico si existe una category en el parámetro
        if(category) {
          const productsFilter = resp.filter( product => product.category === category );
          setProducts(productsFilter)
        } else {
          // Si no existe una categoría en el parámetro seteamos todos los productos en el state products
          setProducts(resp);
        }
          setIsLoading(false);
      })

   }, [category] )

  return (
    <>
    { isLoading ? <h2>Cargando productos ...</h2> : <ItemList products={products} /> }
    </>
  )
}
