import { Link } from "react-router-dom";
import { useCount } from "../../hooks/useCount";

export const Character = ({ id, name, image }) => {
  // La responsabilidad de este componente es renderizar los datos recibidos de manera individual
  const { count, increment, decrement } = useCount(1);

  return (
    <div>
      <div className="border border-3 p-3 d-flex flex-column m-2 ">
        <p>Nombre: {name}</p>
        <img src={image} alt="foto" />
        <div className=" d-flex justify-content-center my-3">
          <button className="btn btn-outline-dark" onClick={increment}>
            +
          </button>
          <span className="mx-4"> {count} </span>
          <button className="btn btn-outline-dark" onClick={decrement}>
            -
          </button>
        </div>
        <Link to={`/character/${id}`} >
          <button className="btn btn-dark mt-2">Detalle</button>
        </Link>
      </div>
    </div>
  );
};
