import React, { useContext } from "react";
import { CartViewContext } from "../Helpers/Context";



const ShoppingCart = (props) => {
  const {cartView, setCartView} = useContext(CartViewContext);

  return (
    <button
      onClick={() => setCartView(true)}
      href="#"
      className={
        "flex items-center text-gray-300  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-xl px-10 py-4 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:border-gray-700"
      }
    >
      Shopping Cart
      <div className="text-2xl ml-5 py-1 px-5 rounded-lg font-bold bg-gray-700">
        {props.ItemCount}
      </div>
    </button>
  );
};

export default ShoppingCart;
