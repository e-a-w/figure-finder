import React from "react";
import { gql, useQuery } from "@apollo/client";
import { CircularProgress } from "@material-ui/core";
import Results from "./Results";

const Figures = () => {
  const GET_FIGURES = gql`
    query {
      figures {
        id
        name
        number
        difficulty
        description
        positions {
          id
          name
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_FIGURES);

  if (loading) return <CircularProgress color="secondary" />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return <Results figures={data.figures} format={true} />;
};

export default Figures;
