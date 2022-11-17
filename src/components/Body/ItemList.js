import React from "react";

import Item from "./Item";
import food from "../../assets/food.jpg";

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
  { title: "Guhlaschsuppe", description: "mit Semmel", price: 6.5, key: "3" },
  {
    title: "Pizza pikant",
    description: "Hausfrisch gemacht",
    price: 10.5,
    key: "4",
  },
  {
    title: "Mozarella Salat",
    description: "Dressing nach Wahl",
    price: 11.5,
    key: "5",
  },
];

const ItemList = (props) => {
  const ItemAddingHandler = (item) => {
    props.onAddedItem(item);
  };

  let content = items.map((item) => {
    return (
      <Item
        onAddedItem={ItemAddingHandler}
        title={item.title}
        description={item.description}
        price={item.price}
        key={item.key}
      />
    );
  });

  return (
    <React.Fragment>
      <img
        src={food}
        alt="A table full of vegetables"
        className="z-0 fixed brightness-75"
      ></img>

      <ul className="drop-shadow-xl fixed left-1/2 -translate-x-1/2 z-20 py-3 px-6 mt-10 flex flex-col justify-center items-center bg-gray-900 rounded-3xl container mx-auto max-w-5xl">
        {content}
      </ul>
    </React.Fragment>
  );
};

export default ItemList;
