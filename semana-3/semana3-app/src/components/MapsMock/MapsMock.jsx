import { useEffect, useState } from "react";
import { getProducts } from "../../AsyncMock";


export const MapsMock = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  

  useEffect(() => { 
     getProducts()
      .then( resp => {
        setProducts(resp);
        setIsLoading(false);
      })
   }, [])

  return (
    <div className="container">
        <h1>Mapeo de productos</h1>
        {/* Renderizado condicional */}
          { isLoading ? <h3 className="alert alert-info">Cargando productos</h3> : products.map( product => (
            <div key={product.id}  className="d-flex">
                <div className="border border-1 border-dark rounded-3  p-3 m-2">
                    <h5> {product.name} </h5>
                    <p> {product.description} </p>
                    <p>Stock: {product.stock}</p>
                    <button className="btn btn-dark" >Agregar al carrito</button>
                </div>
            </div>
          ) )  }
    </div>
  )
}
