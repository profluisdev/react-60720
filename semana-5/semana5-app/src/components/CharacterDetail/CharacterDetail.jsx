import { Link } from "react-router-dom";

export const CharacterDetail = ({image, name, species, gender, location}) => {
  // Este componente tiene la responsabilidad de mostrar los detalles del character
  return (
    <>
      <div className="container p-3 border border-2 rounded-4 w-25">
        <div>
          <img src={image} alt="" />
        </div>
        <p>Nombre: {name} </p>
        <p>Especie: {species} </p>
        <p>Genero: {gender} </p>
        <p>Planeta: {location.name} </p>
      </div>
      <div className="container p-3  w-25">
        <Link to="/">
          <button className="btn btn-dark">Volver</button>
        </Link>
      </div>
    </>
  );
};
