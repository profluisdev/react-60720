import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const Cart = () => {
  const { cart, clearCart, removeItem, total } = useContext(CartContext);

  const handleDeleteItem = (item) => { 
    

    Swal.fire({
      icon: "question",
      title: `¿Estas seguro que deseas eliminar ${item.name} del carrito? `,
      showCancelButton: true,
      showConfirmButton: true,
      
    }).then( resp => {
      if(resp.isConfirmed) {
        removeItem(item.id)
        Swal.fire({
          icon: "success",
          title: "Producto eliminado"
        })
      }
    })

   }

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
              <button className="btn btn-danger" onClick={() => handleDeleteItem(item)}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        {total > 0 ? (
          <>
            <h4>Total ${total} </h4>
            <button className="btn btn-outline-success" onClick={clearCart}>
              Vaciar Carrito
            </button>
            <Link to="/checkout">
              <button className="ms-2 btn btn-success">Comprar</button>
            </Link>
          </>
        ) : (
          <h4>Carrito vacío :(</h4>
        )}
      </div>
    </>
  );
};
