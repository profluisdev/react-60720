import { useEffect, useState } from "react"

export const HookUseEffect = () => {

  const [countBlue, setCountBlue] = useState(0);
  const [countGreen, setCountGreen] = useState(0);

  const handleCountBlue = () => {
    setCountBlue(countBlue + 1);
  };

  const handleCountGreen = () => {
    setCountGreen(countGreen + 1);
  };

  // Cada ves que se cambia cualquier estado del componente se ejecuta el useEffect
  // useEffect( () => {
  //   console.log("Se ejecuta el useEffect");
  // } )

  // Con array de dependencia vacío, el useEffect se ejecuta una sola ves, por más que luego haya cambios de estado
  // useEffect( () => {
  //   console.log("Se ejecuta el useEffect");
  // }, [] )


  // useEffect( () => {
  //   console.log("Se ejecuta el contador Azul");
  // }, [countBlue] )
  
  // useEffect( () => {
  //   console.log("Se ejecuta el contador Verde");
  // }, [countGreen] )
 
  useEffect( () => {
  
      console.log("Se ejecuta el contador Verde y Azul");
   
  }, [countGreen, countBlue] )
 
  // useEffect( () => {
  //   if(countBlue > 5) {
  //     console.log("Se ejecuta el contador Verde y Azul");
  //   }
  // }, [countGreen, countBlue] )



  return (
    <div className="container">
    <h1>HookUseEffect</h1>
      <button className="btn btn-primary mx-2" onClick={handleCountBlue} >Count {countBlue} </button>
      <button className="btn btn-success" onClick={handleCountGreen} >Count {countGreen} </button>
    </div>
  )
}
