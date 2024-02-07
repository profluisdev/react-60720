import { Character } from "../Character/Character";

export const CharacterList = ({ characters }) => {
  // La responsabilidad de este componente es mapear los datos recibidos y pasar las props al componente que se va renderizar por cada character

  return (
    <>
      {characters.map((character) => (
        // <Character key={character.id} name={character.name} image={character.image} />
        <Character key={character.id} {...character} />
      ))}
    </>
  );
};
