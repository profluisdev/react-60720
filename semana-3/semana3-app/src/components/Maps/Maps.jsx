import { useEffect, useState } from "react";

const productsList = [
  { id: "1", name: "Camisa", description: "Una camisa", stock: 4 },
  { id: "2", name: "Corbata", description: "Una Corbata", stock: 8 },
  { id: "3", name: "Pantalón", description: "Un Pantalón", stock: 10 },
  { id: "4", name: "Zapatilla", description: "Una Zapatilla", stock: 10 },
];


export const Maps = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => { 
      // Cuando se cargue el componente por primera ves, seteamos los productos en el state products
      setProducts(productsList);
   }, [])

  return (
    <div className="container">
        <h1>Mapeo de productos</h1>
          { products.map( product => (
            <div key={product.id}  className="d-flex">
                <div className="border border-1 border-dark rounded-3  p-3 m-2">
                    <h5> {product.name} </h5>
                    <p> {product.description} </p>
                    <p>Stock: {product.stock}</p>
                    <button className="btn btn-dark" >Agregar al carrito</button>
                </div>
            </div>
          ) ) }
    </div>
  )
}
