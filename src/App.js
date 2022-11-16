import React, { useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import ItemList from "./components/Body/ItemList";
import Cart from "./components/Cart/Cart";
import { CartViewContext } from "./Helpers/Context";
import BlurBackground from "./components/UI/BlurBackground";

function App() {
  const [cartView, setCartView] = useState(false);
  const [items, setItems] = useState([]);
  
  const ItemAddingHandler = (item) => {
    setItems([...items, item]);
  };

  return (
    <CartViewContext.Provider value={{ cartView, setCartView }}>
      <BlurBackground>
        <NavBar />

        <ItemList onAddedItem={ItemAddingHandler} />
      </BlurBackground>
      {cartView && <Cart items={items} />}
    </CartViewContext.Provider>
  );
}

export default App;
