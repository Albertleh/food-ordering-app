import React from "react";

// title, description, price, id
const Item = (props) => {
  return (
    <li className="flex flex-row justify-center container max-w-full bg-gray-700 rounded-xl py-5 my-5">
      <div className="text-gray-200 font-bold text-lg w-4/5 flex flex-col justify-start items-start pl-10">
        {props.title}
        <div className="font-normal italic text-base">
            {props.description}
        </div>
      </div>
      <div className="w-1/5 text-gray-200 flex flex-row justify-end pr-10">
        <form className="flex flex-col">
          <label className="pb-1 font-bold">Amount</label>
          <input className="rounded-md" type="text"></input>
        </form>
      </div>
    </li>
  );
};

export default Item;
