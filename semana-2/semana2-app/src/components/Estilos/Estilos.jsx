import styles from "./estilos.module.css";

export const Estilos = () => {
  let nombre = "Juan";
  let subTitle = "Nuestro subtítulo";

  //  let parrafo = document.createElement("p");
  //  parrafo.innerText = `Nombre ${nombre}`;
  //  root.appendChild(parrafo)

  return (
    <>
      <h1 className={styles.title}>Hola Mundo</h1>
      {/* Css module con boostrap combinados */}
      <h2 className={`fs-4 ${styles.subTitle}`}>{subTitle}</h2>
      <p className="text-primary fs-3">Nombre {nombre}</p>
      {/* Estilos en linea */}
      <p style={{ fontSize: 50, color: "blue" }}>Edad 33</p>
    </>
  );
};
