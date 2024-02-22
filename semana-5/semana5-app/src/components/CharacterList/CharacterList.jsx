import { Character } from "../Character/Character";

export const CharacterList = ({ characters }) => {
  // La responsabilidad de este componente es mapear los datos recibidos y pasar las props al componente que se va renderizar por cada character
  return (
    <>
      <div className="d-flex flex-sm-wrap">
        {characters.map((character) => (
          <Character key={character.id} id={character.id} name={character.name} image={character.image} />
        ))}
      </div>
    </>
  );
};
