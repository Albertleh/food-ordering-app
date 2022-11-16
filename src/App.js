import React, { useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import ItemList from "./components/Body/ItemList";
import Cart from "./components/Cart/Cart";
import { CartViewContext } from "./Helpers/Context";
import BlurBackground from "./components/UI/BlurBackground";

function App() {
  const [cartView, setCartView] = useState(false);

  return (
    <CartViewContext.Provider value={{ cartView, setCartView }}>
      <BlurBackground>
        <NavBar />
        
        <ItemList />
      </BlurBackground>
      {cartView && <Cart />}
    </CartViewContext.Provider>
  );
}

export default App;
