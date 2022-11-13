import React from "react";

import Item from "./Item";

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

const ItemList = () => {
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
    <ul className="py-5 px-10 mt-10 flex flex-col justify-center items-center bg-gray-900 rounded-3xl container mx-auto max-w-5xl">
      {content}
    </ul>
  );
};

export default ItemList;
