import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TextField, Button } from "@material-ui/core";
import { gql, useLazyQuery } from "@apollo/client";
import Results from "./Results";

const HomeSearchBox = () => {
  const { searchTerm, setSearchTerm } = useContext(AppContext);

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

  if (loading) return <p>LOADING</p>;
  if (error) return <p>ERROR</p>;

  console.log(data);

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
              margin: "20px auto",
            }}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={{ marginLeft: "10px" }}
          >
            Search
          </Button>
        </form>
      </div>
      <div>
        <Results figures={data?.filterFigures} />
      </div>
    </>
  );
};

export default HomeSearchBox;
