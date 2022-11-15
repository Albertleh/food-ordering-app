import logo from "./logo.svg";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import ItemList from "./components/Body/ItemList";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <NavBar />
        
      <ItemList />
    </React.Fragment>
  );
}

export default App;
