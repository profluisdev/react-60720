import { useContext } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({ id, name, description, img, price, stock }) => {

  const { addItem } = useContext(CartContext);

  const onAdd = ( quantity ) => { 

    const item = {
      id,
      price,
      name
    }
     
    addItem(item, quantity)

   }

  return (
    <div className="border m-2">
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <img src={img} alt="" />
          <p className="card-text"> {description} </p>
          <p>Precio: {price} </p>
          <ItemCount stock={stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};
