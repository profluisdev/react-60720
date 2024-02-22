import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
  });

  const getData = async () => {
    /* 
    Siempre seteamos el loading en true al momento de pedir la data para mostrar el loader mientras 
    se resuelve la promesa del fetch
    */
    setState({
      data: null,
      isLoading: true
    })

    const resp = await fetch(url);
    const respData = await resp.json();
    setState({
      data: respData,
      isLoading: false, // Luego que tenemos la data para mostrar ponemos el isLoading en false
    });
  };

  // Cada ves que recibimos un cambio en la url se ejecuta el useEffect y trae la data de nuevo 
  useEffect(() => {
    getData();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
  };
};
