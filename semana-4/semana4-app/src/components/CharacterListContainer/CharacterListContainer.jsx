import { useEffect, useState } from "react";
import { CharacterList } from "../CharacterList/CharacterList";
import { LayoutCharacters } from "../LayoutCharacters/LayoutCharacters";
// La responsabilidad de este componente es solamente hacer la petición fetch y pasar los datos al componente hijo

export const CharacterListContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const getCharacters = async () => {
    const resp = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const data = await resp.json();
    console.log(data.results);
    setCharacters(data.results);
  };

  useEffect(() => {
    getCharacters();
    console.log("Se modifico Page")
  }, [page]);

  return (
    <div className='container d-flex flex-column align-items-center'>
      <CharacterList characters={characters} />
      {/* Render condicional */}
      { page > 1 && <button onClick={() => { setPage(page - 1) }}>Atrás</button>  }
      
       <strong> Página {page} </strong>
       <button onClick={() => { setPage(page + 1) }} >Siguiente</button>
    </div>
  );
};
