import { CartContext } from "../CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";

export default function CartList() {
  const { cart } = useContext(CartContext);
  return (
    <>
      <div>
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
