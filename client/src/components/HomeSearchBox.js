import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { TextField, IconButton, CircularProgress } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { gql, useLazyQuery } from "@apollo/client";
import Results from "./Results";

const HomeSearchBox = () => {
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

  if (loading) return <CircularProgress />;
  if (error) return <p>ERROR</p>;

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getSearch({ variables: { name: searchTerm } });
          }}
          autoComplete="off"
          style={{ display: "flex", alignItems: "center" }}
        >
          <TextField
            onChange={(e) => setSearchTerm(e.target.value)}
            id="home-searchbox"
            label="Search"
            name="search"
            variant="outlined"
            style={{
              background: "white",
              width: "100%",
              height: "50px",
              margin: "20px auto",
            }}
          />
          <IconButton
            type="submit"
            color="primary"
            variant="contained"
            style={{ marginLeft: "10px" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </form>
      </div>
      <div>
        <Results figures={results && results} />
      </div>
    </>
  );
};

export default HomeSearchBox;
