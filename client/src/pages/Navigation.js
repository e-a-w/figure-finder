import React, { useState } from "react";
import NavSearchBox from "../components/NavSearchBox";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import PoolSharpIcon from "@material-ui/icons/PoolSharp";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

const Navigation = () => {
  const classes = useStyles();

  // Materials UI Library to handle Drawer
  const [state, setState] = useState({ left: false });
  const anchor = "left";
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const iconList = (text) => {
    switch (text) {
      case "Home":
        return <HomeSharpIcon />;
      // case "Search":
      //   return <SearchIcon />;
      case "All Figures":
        return <PoolSharpIcon />;
      case "All Positions":
        return <PoolSharpIcon />;
      // case "All Transitions":
      //   return <PoolSharpIcon />;
      default:
        return null;
    }
  };

  const list = (anchor) => (
    <>
      <Toolbar />
      <div
        className={clsx(classes.list)}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {[
            { text: "Home", link: "/" },
            // { text: "Search", link: "/search" },
            { text: "All Figures", link: "/figures" },
            { text: "All Positions", link: "/positions" },
            // { text: "All Transitions", link: "/transitions" },
          ].map((el) => (
            <ListItem component={Link} to={el.link} button key={el.text}>
              <ListItemIcon>{iconList(el.text)}</ListItemIcon>
              <ListItemText primary={el.text} />
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );

  return (
    <div className={classes.root}>
      <AppBar style={{ zIndex: "1500" }} position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Figure Finder
          </Typography>
          <NavSearchBox />
        </Toolbar>
      </AppBar>
      {/* DRAWER */}
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </div>
  );
};

export default Navigation;
