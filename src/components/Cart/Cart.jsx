import CartList from "./CartList";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import BuyForm from "./BuyForm";

export default function Cart() {
  const { cart, cartTotal, clearCart } = useContext(CartContext);
  if (cart.length === 0) {
    return (
      <>
        <Typography variant="h6">Your cart is empty.</Typography>
        <Button variant="contained" component={Link} to="/">
          Continue Shopping
        </Button>
      </>
    );
  }
  return (
    <>
      <h1>Cart</h1>
      <CartList />
      <h3>Total: {cartTotal()}</h3>
      <Button onClick={() => clearCart()}>Vaciar Carro
      </Button>

      <BuyForm />
    </>
  );
}