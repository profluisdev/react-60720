import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart, CharacterDetailContainer, CharacterListContainer, NavBar } from "./components";

// Alt + shift + O  --> Borra automáticamente las importaciones que no se usan

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<CharacterListContainer />} />
          <Route path="/characters/:status" element={<CharacterListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/character/:id" element={<CharacterDetailContainer />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
};
