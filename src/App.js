import React, { useState, useReducer } from "react";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import ItemList from "./components/Body/ItemList";
import Cart from "./components/Cart/Cart";
import { CartViewContext } from "./Helpers/Context";
import BlurBackground from "./components/UI/BlurBackground";


const reducer = (state, action) => {
  // managing items that are displayed in the shopping cart 
  switch (action.type) {
    case "add-item":
      return { ...state, items: [...state.items, action.payload] };
    case "delete-items":
      return { ...state, items: [] };
    case "set-items":
      return { ...state, items: action.payload };

    // managing the item- counter of the shopping cart button
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

// This is just for avoiding typos 
const ACTION = {
  ADD_ITEM: 'add-item',
  DELETE_ITEMS: 'delete-items',
  SET_ITEMS: 'set-items',
  ADD_TOTAL_QUANTITY: 'add-total-quantity',
  SUBTRACT_TOTAL_QUANTITY: 'subtract-total-quantity',
  ZERO_TOTAL_QUANTITY: 'zero-total-quantity',
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    items: [],
    totalQuantity: 0,
  });
  // for reference: the commented out lines accomplish the same thing the reducer does with useState 

  // boolean that tells, whether the shopping cart should be displayed 
  // this isn't defined in the reducer since i was gonna pass it down gobally using useContext
  const [cartView, setCartView] = useState(false);

  // const [items, setItems] = useState([]);
  // const [totalQuantity, setTotalQuantity] = useState(0);

  const ItemAddingHandler = (item) => {
    //setTotalQuantity(totalQuantity + parseInt(item.quantity));
    dispatch({ type: ACTION.ADD_TOTAL_QUANTITY, payload: item.quantity })
    // setItems([...items, item]);
    dispatch({ type: ACTION.ADD_ITEM, payload: item });
  };

  const ItemDeletingHandler = (key) => {
    if (key === "DELETE_ALL") {
      // setItems([]);
      dispatch({ type: ACTION.DELETE_ITEMS });
      //setTotalQuantity(0);
      dispatch({ type: ACTION.ZERO_TOTAL_QUANTITY });
      return;
    }
    // newItems receives all items, that are still in the shopping cart after a deletion occured
    let newItems = state.items.filter((item) => {
      if (item.anotherkey === key) {
        // setTotalQuantity(totalQuantity - item.quantity);
        dispatch({ type: ACTION.SUBTRACT_TOTAL_QUANTITY, payload: item.quantity })
      }
      return item.anotherkey !== key;
    });
    // setItems(newItems);
    dispatch({ type: ACTION.SET_ITEMS, payload: newItems });
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
