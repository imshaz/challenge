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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="App">
      <Header />
      <div
        onClick={() => {
          setDrawer(true);
        }}
      >
        {" "}
        Menu
      </div>
      <SideDrawer open={drawerOpen} onClose={() => setDrawer(false)} />

      <Cards />
      <div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Dashboard</MenuItem>
          <MenuItem onClick={handleClose}>Collaboration</MenuItem>
          <MenuItem onClick={handleClose}>Menu</MenuItem>
        </Menu>
        <div className="fab">
          <Fab onClick={handleClick} color="primary">
            Menu
          </Fab>
        </div>
      </div>
    </div>
  );
}

export default App;
