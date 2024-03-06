import { useContext } from "react"
import { CartContext } from "../../context/CartContext";


export const Cart = () => {

  const { cart, clearCart, removeItem } = useContext( CartContext );

  console.log(cart)
  return (
    <>
    <div className="container my-4">
      {cart.map((item) => (
        <div key={item.id} className="d-flex flex-column p-3 my-2 border border-1 w-50 ">
          <p key={item.id}>Nombre: {item.name} </p>
          <p>Cantidad: {item.quantity} </p>
          <p>Precio Unitario: {item.price} </p>
          <p>Subtotal: ${item.subTotal}</p>
          <div>
            <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
    <div className="container">
        <h4>Total</h4>
        <button className="btn btn-outline-success" onClick={clearCart}>
          Vaciar Carrito
        </button>
    
    </div>
  </>
  )
}
