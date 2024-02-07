import { useCount } from "../../hooks/useCount";

export const Character = ( { name, image, status } ) => {

  const { count, increment, decrement } = useCount();

  return (
    <div className="d-flex flex-sm-wrap" >
      <div className="border border-3 p-3 d-flex flex-column m-2">
        <p>Nombre: {name} </p>
        <p>Status: {status} </p>
        <img src={image} alt="" />
        <div className=" d-flex justify-content-center my-3">
          <button className="btn btn-outline-dark" onClick={increment} >+</button>
          <span className="mx-3"> {count} </span>
          <button className="btn btn-outline-dark" onClick={decrement} >-</button>
        </div>
        <button className="btn btn-dark mt-2">Detalle</button>
      </div>
    </div>
  );
};
