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
  const [totalQuantity, setTotalQuantity] = useState(0);

  const ItemAddingHandler = (item) => {
    setTotalQuantity(totalQuantity + parseInt(item.quantity));
    setItems([...items, item]);
    console.log(totalQuantity);
  };

  const ItemDeletingHandler = (key) => {
    let newItems = items.filter((item) => {
      if (item.anotherkey === key) {
        setTotalQuantity(totalQuantity - item.quantity);
      }
      return item.anotherkey != key;
    });
    setItems(newItems);
  };

  return (
    <CartViewContext.Provider value={{ cartView, setCartView }}>
      <BlurBackground>
        <NavBar totalQuantity={totalQuantity} />
        <ItemList onAddedItem={ItemAddingHandler} />
      </BlurBackground>
      {cartView && <Cart items={items} onDeleteItem={ItemDeletingHandler} />}
    </CartViewContext.Provider>
  );
}

export default App;
