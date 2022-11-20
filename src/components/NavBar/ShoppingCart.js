import React, { useContext, useEffect, useState } from "react";
import { CartViewContext } from "../../Helpers/Context";

// This is the body of the Shopping Cart Button 
const ShoppingCart = (props) => {
  const { setCartView } = useContext(CartViewContext);

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  // just some fancy effects when you add an element
  useEffect(() => {
    if (props.ItemCount === 0 || props.ItemCount === undefined) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 1500);

    return () => {
      clearTimeout(timer);
    }
  }, [props.ItemCount])

  const animation = `${btnIsHighlighted ? 'animate-pulse' : ''}`;

  return (
    <button
      onClick={() => setCartView(true)}
      href="#"
      className={
        "flex items-center text-gray-300  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-xl px-10 py-4 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:border-gray-700 " + animation
      }
    >
      Shopping Cart
      <div className="transition-opacity drop-shadow-lg text-2xl ml-5 py-1 px-5 rounded-lg font-bold bg-gray-700">
        {props.ItemCount}
      </div>
    </button>
  );
};

export default ShoppingCart;
