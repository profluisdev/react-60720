import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { CartContextProvider } from "./context/CartContext";
import { CheckOut } from "./components/CheckOut/CheckOut";

export const App = () => {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
};
