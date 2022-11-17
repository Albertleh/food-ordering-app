import React from "react";

const CartItem = (props) => {

  const RemoveHandler = () => {
    props.onDelete(props.anotherkey);
  };

  return (
    <li className="shadow-md flex flex-row justify-center container max-w-full bg-gray-700 rounded-xl py-4 my-3">
      <div className="text-[#67eaff] font-bold text-lg w-3/4 flex flex-col justify-start items-start pl-10">
        {props.title}
        <div className="text-gray-300 font-normal italic text-lg">
          {props.description}
        </div>
        <div className="text-gray-300 font-bold pt-2">
          {props.price * props.quantity} $
        </div>
      </div>
      <div className="flex flex-col justify-end w-1/4 text-gray-200 pr-10">
        <div className="flex flex-col">
          <label className="pb-1 font-bold mr-5 text-lg">
            Amount:
            <span className="ml-4 rounded-lg px-3 py-1 bg-gray-800 shadow-md">
              {props.quantity}
            </span>
          </label>
          <button
          onClick={RemoveHandler}
            type="submit"
            className="shadow-md disabled:bg-opacity-25 font-bold px-3 py-3 mt-3 bg-gray-800 hover:bg-gray-900  rounded-xl"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
