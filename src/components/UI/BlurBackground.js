import React, { useContext } from "react";

import { CartViewContext } from "../../Helpers/Context";

// This just handles CSS effects on clicking the shopping cart button making the background blurry and dark
// For readability in the app.js this was moved to an extra component
const BlurBackground = (props) => {
  const { cartView } = useContext(CartViewContext);

  let styles = "";

  if (cartView) {
    styles = "blur-lg brightness-75";
  }

  return <div className={styles}>{props.children}</div>;
};

export default BlurBackground;
