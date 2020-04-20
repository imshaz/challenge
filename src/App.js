import React from "react";
import "./App.css";
import Cards from "./component/cards";
import LogFrom from './component/log/LogFrom'

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="main-container">
          <LogFrom />
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
