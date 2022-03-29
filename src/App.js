import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartShow, setIsCartShow] = useState(false);

  const showCart = () => {
    setIsCartShow(true);
  };

  const hideCart = () => {
    setIsCartShow(false);
  };

  return (
    <CartProvider>
      <Header onClick={showCart} />
      {isCartShow && <Cart onClose={hideCart} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
