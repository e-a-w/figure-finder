import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Results from "../components/Results";

const SearchPage = () => {
  const { searchResults } = useContext(AppContext);

  return (
    <div>
      <h1>Search</h1>
      <Results figures={searchResults} />
    </div>
  );
};

export default SearchPage;
