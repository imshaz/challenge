import React, { useState } from "react";
import SideDrawer from "./component/SideDrawer";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fab from "@material-ui/core/Fab";
import "./App.css";
import Header from "./component/header";
import Cards from "./component/cards";

function App() {
  const [drawerOpen, setDrawer] = useState(false);



  return (
    <div className="App">
      <Header />
      <SideDrawer open={drawerOpen} onClose={() => setDrawer(false)} />
      <Cards />
    </div>
  );
}

export default App;
