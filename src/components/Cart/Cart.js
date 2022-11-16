import React, { useContext, useState } from "react";

import Item from "../Body/Item";
import { CartViewContext } from "../../Helpers/Context";

// TODO: order button currently is disabled entirely - logic needs to be fixed.

const Cart = (props) => {
  const { setCartView } = useContext(CartViewContext);

  const [OrderDisabled, setOrderDisabled] = useState(true);
  let totalprice = 0;

  if (props.items === ![]) {
    setOrderDisabled(false);
  }

  console.log("passed");
  let content = props.items.map((item) => {
    totalprice = totalprice + (item.price * item.quantity);
    return (
      <Item
        title={item.title}
        description={item.description}
        price={item.price}
        key={item.key}
      />
    );
  });

  const OrderHandler = () => {
    console.log("Your Order is being processed!");
  };

  return (
    <React.Fragment>
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
              className="text-white  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-xl px-10 py-3 ml-5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:border-gray-700"
            >
              Close
            </button>
            <button
              disabled={OrderDisabled}
              onClick={OrderHandler}
              className="text-white  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-xl px-10 py-3 ml-5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:border-gray-700"
            >
              Order
            </button>
          </div>
        </ul>
      </div>
    </React.Fragment>
  );
};
export default Cart;
