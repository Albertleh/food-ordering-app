import React, { useState, useReducer } from "react";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import ItemList from "./components/Body/ItemList";
import Cart from "./components/Cart/Cart";
import { CartViewContext } from "./Helpers/Context";
import BlurBackground from "./components/UI/BlurBackground";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-item":
      return { ...state, items: [...state.items, action.payload] };
    case "delete-items":
      return { ...state, items: [] };
    case "set-items":
      return { ...state, items: action.payload };

    case "add-total-quantity":
      return {
        ...state,
        totalQuantity: state.totalQuantity + parseInt(action.payload),
      };
    case "subtract-total-quantity":
      return {
        ...state,
        totalQuantity: state.totalQuantity - parseInt(action.payload),
      };
    case "zero-total-quantity":
      return { ...state, totalQuantity: state.totalQuantity = 0 };

    default:
      throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    items: [],
    cartView: false,
    totalQuantity: 0,
  });
  // for reference: the commented out lines accomplish the same thing the reducer does with useState hook 

  const [cartView, setCartView] = useState(false);
  // const [items, setItems] = useState([]);
  // const [totalQuantity, setTotalQuantity] = useState(0);

  const ItemAddingHandler = (item) => {
    //setTotalQuantity(totalQuantity + parseInt(item.quantity));
    dispatch({ type: "add-total-quantity", payload: item.quantity })
    // setItems([...items, item]);
    dispatch({ type: "add-item", payload: item });
  };

  const ItemDeletingHandler = (key) => {
    if (key === "DELETE_ALL") {
      // setItems([]);
      dispatch({ type: "delete-items" });
      //setTotalQuantity(0);
      dispatch({ type: 'zero-total-quantity' });
      return;
    }
    let newItems = state.items.filter((item) => {
      if (item.anotherkey === key) {
        // setTotalQuantity(totalQuantity - item.quantity);
        dispatch({ type: 'subtract-total-quantity', payload: item.quantity })
      }
      return item.anotherkey !== key;
    });
    // setItems(newItems);
    dispatch({ type: "set-items", payload: newItems });
  };

  return (
    <CartViewContext.Provider value={{ cartView, setCartView }}>
      <BlurBackground>
        <NavBar totalQuantity={state.totalQuantity} />
        <ItemList onAddedItem={ItemAddingHandler} />
      </BlurBackground>
      {cartView && (
        <Cart items={state.items} onDeleteItem={ItemDeletingHandler} />
      )}
    </CartViewContext.Provider>
  );
}

export default App;
