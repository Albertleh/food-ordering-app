import React, { useContext } from "react";

import { CartViewContext } from "../../Helpers/Context";

const BlurBackground = (props) => {
  const { cartView } = useContext(CartViewContext);

  let styles = "";

  if (cartView) {
    styles = "blur-lg brightness-75";
  }

  return <div className={styles}>{props.children}</div>;
};

export default BlurBackground;
