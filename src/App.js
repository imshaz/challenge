import React, { useState } from "react";
import { useSelector } from "react-redux";
import SideDrawer from "./component/SideDrawer";

import Button from "@material-ui/core/Button";
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
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(useSelector((state) => state.articles));
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
      {/* <ChartComp /> */}
      <Cards />
      <div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
      <div className="fab">
        <Fab onClick={handleClick} color="primary">
          Menu
        </Fab>
      </div>
    </div>
  );
}

export default App;
