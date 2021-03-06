import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles({
  list: {
    width: 200,
  },
  fullList: {
    width: "auto",
  },
});

export default function SideDrawer(props) {
  const classes = useStyles();

  return (
    <div>
      <Drawer anchor={"right"} open={props.open} onClose={props.onClose}>
        <div className={classes.list} role="presentation">
          <List component="nav">
            <ListItem button>
              <ListItemText>Dashboard</ListItemText>
            </ListItem>

            <ListItem button>
              <ListItemText>Profile</ListItemText>
            </ListItem>

            <ListItem button>
              <ListItemText>Logout</ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>Pricing</ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>Location</ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}
