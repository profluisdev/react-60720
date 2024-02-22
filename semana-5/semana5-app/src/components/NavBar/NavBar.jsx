import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="container mt-2 d-flex ">
      <Link to="/">
        <button className="btn btn-outline-dark">Home</button>
      </Link>
      <Link to="/characters/alive">
        <button className="btn btn-outline-dark">Vivos</button>
      </Link>
      <Link to="/characters/dead">
        <button className="btn btn-outline-dark">Muertos</button>
      </Link>
      <Link to="/cart">
        <button className="btn btn-outline-dark">Carrito</button>
      </Link>
    </nav>
  );
};
