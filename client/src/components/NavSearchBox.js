import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";
import { gql, useLazyQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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

const SearchBox = () => {
  const history = useHistory();
  const classes = useStyles();
  const { searchTerm, setSearchTerm, setResults, results } = useContext(
    AppContext
  );

  const SEARCH_FIGURES = gql`
    query($name: String!) {
      filterFigures(name: $name) {
        id
        name
        number
        difficulty
        description
      }
    }
  `;

  const [getSearch, { data, loading, error }] = useLazyQuery(SEARCH_FIGURES);

  useEffect(() => {
    setResults(data?.filterFigures);
  }, [data, results]);

  if (loading) return <p>LOADING</p>;
  if (error) return <p>ERROR</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearch({ variables: { name: searchTerm } });
    history.push("/search");
  };

  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <form onSubmit={handleSubmit}>
          <InputBase
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </form>
      </div>
    </>
  );
};

export default SearchBox;
