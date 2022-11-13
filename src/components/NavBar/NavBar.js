import React from "react";

import ShoppingCart from "./ShoppingCart";

const NavBar = (props) => {
  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div class="container flex flex-wrap justify-between items-center mx-auto p-1">
        <div className="flex">
          <img
            className="h-10 -mr-3"
            src="    https://cdn-icons-png.flaticon.com/512/405/405996.png"
          ></img>
          <img
            className="h-10 mr-5"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          ></img>
          <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
            ReactMeals
          </span>
        </div>

        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                class={
                  "text-xl block py-5 pr-4 pl-3  text-gray-700 rounded md:bg-transparent md:text-gray-700md:p-0 dark:text-gray-300"
                }
              >
                Home
              </a>
            </li>
            <li>
              <ShoppingCart ItemCount={"0"} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
