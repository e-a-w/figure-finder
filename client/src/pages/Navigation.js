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
import PoolSharpIcon from "@material-ui/icons/PoolSharp";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import InfoSharpIcon from "@material-ui/icons/InfoSharp";
import { Link, useHistory } from "react-router-dom";

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
  const history = useHistory();
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
      case "All Figures":
        return <PoolSharpIcon />;
      case "All Positions":
        return <PoolSharpIcon />;
      case "About":
        return <InfoSharpIcon />;
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
            { text: "About", link: "/about" },
            { text: "All Figures", link: "/figures" },
            { text: "All Positions", link: "/positions" },
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
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={() => history.push("/")}
          >
            <HomeSharpIcon />
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
