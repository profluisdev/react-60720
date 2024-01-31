import { useState } from "react";

export const HookUseState = () => {
  const [name, setName] = useState("Juan");

  const [count, setCount] = useState(0);

  const stock = 10

  const handleChangeName = () => {
    // Seteamos el valor de name
    setName("Pepe");
  };

  const increment = () => { 
      if(count < stock) {
        return setCount(count + 1);
      }

      setCount(count);
   }
  
   const decrement = () => { 
      if(count == 0) {
        return setCount(0);
      }
      setCount(count - 1);
   }


  return (
    <div className="container">
      <h1>HookUseState</h1>
      <h3>Nombre: {name} </h3>
      <button className="btn btn-primary" onClick={handleChangeName}>
        Cambiar Nombre
      </button>

      <h2 className="mt-4">Contador</h2>
      <p>Contador {count} </p>
      <button className="btn btn-primary mx-2" onClick={increment} >+</button>
      <button className="btn btn-primary" onClick={decrement} >-</button>
    </div>
  );
};
