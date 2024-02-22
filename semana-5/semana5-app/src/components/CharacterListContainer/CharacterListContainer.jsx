import { useEffect, useState } from "react";
import { CharacterList } from "../CharacterList/CharacterList";
import { useParams } from "react-router-dom";

export const CharacterListContainer = () => {
  // La responsabilidad de este componente es solamente hacer la petición fetch y pasar los datos al componente hijo
  const [characters, setCharacters] = useState([]);
  // Mostrar después
  const [page, setPage] = useState(1);

  const { status } = useParams();

  const getCharacters = async (status) => {
  
    // const resp = await fetch("https://rickandmortyapi.com/api/character");
    const resp = await fetch(`https://rickandmortyapi.com/api/character/${ status ? `?page=${page}&status=${status}`: `?page=${page}` }`);
    const data = await resp.json();
    setCharacters(data.results);
  };
  // omdbapi.com  es una api de películas
  // Loop infinito ya que cambia el estado constantemente
  // getCharacters()

  useEffect(() => {
    getCharacters(status);
  }, [page, status]); // cada ves que el state page se modifica se ejecuta el useEffect y trae los nuevos characters

  return (
    <div className="container d-flex flex-column align-items-center">
      <CharacterList characters={characters} />
      <div>
        {/* Render condicional */}
       { page > 1 && <button className="btn btn-dark my-3" onClick={() =>  setPage(page - 1) } >Atrás</button> }
       <strong className="mx-2">Página {page}</strong>
        <button className="btn btn-dark my-3" onClick={() => { setPage(page + 1) }} >Siguiente</button>
      </div>
    </div>
  );
};
