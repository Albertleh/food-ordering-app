import React, { useContext } from "react";

import { CartViewContext } from "../Helpers/Context";

const BlurBackground = (props) => {
  const { cartView, setCartView } = useContext(CartViewContext);

  let styles = "";

  console.log(cartView)

  if (cartView) {
    styles = "opacity-50";
  }

  return <div className={styles}>{props.children}</div>;
};

export default BlurBackground;
