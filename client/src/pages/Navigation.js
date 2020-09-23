import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
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
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
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
      case "Search":
        return <SearchIcon />;
      case "All Figures":
        return <PoolSharpIcon />;
      case "All Positions":
        return <PoolSharpIcon />;
      case "All Transitions":
        return <PoolSharpIcon />;
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
            { text: "Search", link: "/search" },
            { text: "All Figures", link: "/figures" },
            { text: "All Positions", link: "/positions" },
            { text: "All Transitions", link: "/transitions" },
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
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
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
