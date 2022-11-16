import React, { useContext } from "react";

import Item from "../Body/Item";
import { CartViewContext } from "../Helpers/Context";


// DUMMY ITEMS
const items = [
  {
    title: "Schnitzel",
    description: "paniert, Pommes dazu",
    price: 13.5,
    key: "1",
  },
  {
    title: "Bratwürstel",
    description: "mit Senf/Ketchup und Semmel",
    price: 9.5,
    key: "2",
  },
];

const Cart = () => {

  const {cartView, setCartView} = useContext(CartViewContext);

  let content = items.map((item) => {
    return (
      <Item
        title={item.title}
        description={item.description}
        price={item.price}
        key={item.key}
      />
    );
  });

  return (
    <React.Fragment>
      <div className="z-0 fixed top-0 left-0 bottom-0 right-0 bg-opacity-20">
        <ul className="z-20 py-3 px-6 mt-10 flex flex-col bg-gray-900 rounded-3xl container mx-auto max-w-4xl">
          {content}
          <div className="text-white font-bold text-2xl flex flex-row justify-between p-3">
            <div className="justify-start">Total Amount</div>
            <div className="justify-end">69.69$</div>
          </div>
          <div className="text-white font-bold text-2xl flex flex-row justify-end mb-1">
            <button 
            onClick={() => setCartView(false)}
            className="text-white  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-xl px-10 py-3 ml-5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:border-gray-700">
              Close
            </button>
            <button className="text-white  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-xl px-10 py-3 ml-5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:border-gray-700">
              Order
            </button>
          </div>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Cart;
