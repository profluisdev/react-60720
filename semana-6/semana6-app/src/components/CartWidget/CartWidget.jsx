import { useContext } from "react";
import { BiCart } from "react-icons/bi";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { totalItems } = useContext(CartContext);
  return (
    <div className="h-25">
        <BiCart size={28}/>
        <strong> {totalItems} </strong>
    </div>
  )
}
