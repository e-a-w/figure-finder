import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Results from "../components/Results";

const SearchPage = () => {
  const { searchResults } = useContext(AppContext);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Search Results</h1>
      <div>
        <Results figures={searchResults} />
      </div>
    </>
  );
};

export default SearchPage;
