import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../Context/ShoppingCartContext";

const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext);

  const cantidad = cart.reduce((acc, curr) => {
    return acc + curr.cantidad;
  }, 0);

  return (
    <>
      <div className="cart">
        <Button size="lg" variant="outline" colorScheme="white">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span>{cantidad}</span>
        </Button>
      </div>
    </>
  );
};
export default CartWidget;