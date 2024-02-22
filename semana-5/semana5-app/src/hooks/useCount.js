import { useState } from "react";

export const useCount = (initial = 0) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if(count > 1) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(initial);
  };

  // Retornamos las variables y funciones que son utilizadas de nuestro hook
  return {
    count,
    increment,
    decrement,
    reset,
  };
};


