import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import NavBar from "./components/NavBar";
import CategoryNav from "./components/CategoryNav";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import CartContextProvider from "./components/CartContext";
import Cart from "./components/Cart/Cart";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <NavBar>

          </NavBar>
          <CategoryNav />
          <Container maxWidth="lg" >
            <Routes>
              <Route
                path="/item/:productId"
                element={<ItemDetailContainer />}
              />
              <Route
                path="/category/:productCategory"
                element={<ItemListContainer />}
              />
              <Route path="/" element={<ItemListContainer />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </Container>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}
