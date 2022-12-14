import React, { useContext } from "react";

import { CartViewContext } from "../../Helpers/Context";
import CartItem from "./CartItem";

// This is the main body of the shopping cart
const Cart = (props) => {
  const { setCartView } = useContext(CartViewContext);

  let totalprice = 0;
  let content = undefined;
  let OrderButtonDisabled = true;

  if (parseInt(props.items.length) !== 0) {
    OrderButtonDisabled = false;
  }

  const ItemDeletionHandler = (key) => {
    props.onDeleteItem(key);
  };

  content = props.items.map((item) => {
    totalprice = totalprice + item.price * item.quantity;
    return (
      <CartItem
        title={item.title}
        description={item.description}
        price={item.price}
        key={Math.random()}
        anotherkey={item.anotherkey}
        quantity={item.quantity}
        onDelete={ItemDeletionHandler}
      />
    );
  });

  // In real life at this point the order should be evaluated by the backend 
  const OrderHandler = () => {
    console.log("Your Order is being processed!");
    ItemDeletionHandler('DELETE_ALL');
  };

  return (
    <div className="z-0 fixed top-0 left-0 bottom-0 right-0 bg-opacity-20">
      <ul className="z-20 py-3 px-6 mt-10 flex flex-col bg-gray-900 rounded-3xl container mx-auto max-w-4xl">
        {content}
        <div className="text-white font-bold text-2xl flex flex-row justify-between p-3">
          <div className="justify-start">Total Amount</div>
          <div className="justify-end">{totalprice}$</div>
        </div>
        <div className="text-white font-bold text-2xl flex flex-row justify-end mb-1">
          <button
            onClick={() => setCartView(false)}
            className="text-white  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-xl px-10 py-3 ml-5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Close
          </button>
          <button
            disabled={OrderButtonDisabled}
            onClick={OrderHandler}
            className="text-white  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-xl px-10 py-3 ml-5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Order
          </button>
        </div>
      </ul>
    </div>
  );
};
export default Cart;
