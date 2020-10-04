import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { gql, useLazyQuery } from "@apollo/client";

const HomeSearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");

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

  console.log(searchTerm);
  console.log(data);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getSearch({ variables: { name: searchTerm } });
        }}
        autoComplete="off"
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
      </form>
    </div>
  );
};

export default HomeSearchBox;
