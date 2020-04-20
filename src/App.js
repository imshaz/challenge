import React, { useState } from "react";
import SideDrawer from "./component/SideDrawer";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fab from "@material-ui/core/Fab";
import "./App.css";
import Header from "./component/header";
import Cards from "./component/cards";
import LogFrom from './component/log/LogFrom'
function App() {
  const [drawerOpen, setDrawer] = useState(false);

  return (
    <div className="App">
      <Header />
      <SideDrawer open={drawerOpen} onClose={() => setDrawer(false)} />
      <div class="main">
        <div class="main-container">
          <LogFrom />
          <Cards />

        </div>
      </div>
    </div>
  );
}

export default App;
