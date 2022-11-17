import React, { useState } from "react";

// title, description, price, id
const Item = (props) => {
  const [quantity, setQuantity] = useState("");
  const [ButtonDisabled, setButtonDisabled] = useState(true);

  const QuantityHandler = (event) => {
    let ItemQuantity = event.target.value;

    if (ItemQuantity > 0) {
      setQuantity(ItemQuantity);
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    setQuantity(quantity);

    let item = {
      title: props.title,
      description: props.description,
      price: props.price,
      quantity: quantity,
      key: Math.random(),
      anotherkey: Math.random()
    };
    props.onAddedItem(item);
    setQuantity("");
  };

  return (
    <li className="flex flex-row justify-center container max-w-full bg-gray-700 rounded-xl py-4 my-3">
      <div className="text-[#67eaff] font-bold text-lg w-3/4 flex flex-col justify-start items-start pl-10">
        {props.title}
        <div className="text-gray-300 font-normal italic text-lg">
          {props.description}
        </div>
        <div className="text-gray-300 font-bold pt-2">{props.price} $</div>
      </div>
      <div className="flex flex-col justify-end w-1/4 text-gray-200 pr-10">
        <form onSubmit={SubmitHandler} className="flex flex-col">
          <label className="pb-1 font-bold mr-5">
            Amount
            <input
              value={quantity}
              onChange={QuantityHandler}
              className="text-gray-900 font-bold rounded-md p-1 w-16 ml-3"
              type="number"
            ></input>
          </label>
          <button
            disabled={ButtonDisabled}
            type="submit"
            className="disabled:bg-opacity-25 font-bold px-3 py-3 mt-3 bg-gray-800 hover:bg-gray-400  rounded-xl"
          >
            Add to cart
          </button>
        </form>
      </div>
    </li>
  );
};

export default Item;
