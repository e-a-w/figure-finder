import React from "react";
import { gql, useQuery } from "@apollo/client";
import reactStringReplace from "react-string-replace";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Link as MaterialLink,
} from "@material-ui/core";

const Figure = () => {
  const formatPositions = (obj) => {
    for (let i = 0; i < obj.positions.length; i++) {
      obj.description = reactStringReplace(
        obj.description,
        obj.positions[i],
        (match, i) => (
          <MaterialLink
            key={i}
            component={Link}
            to="/"
            style={{ fontWeight: "bold" }}
          >
            {match}
          </MaterialLink>
        )
      );
    }
    return obj.description;
  };

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

  if (loading) return <p>LOADING</p>;
  if (error) return <p>{error.toString()}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <>
      {data?.figures?.map((figure) => {
        return (
          <Card key={figure.id} elevation={3} style={{ margin: "20px auto" }}>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h5" gutterBottom>
                  {figure.number}&nbsp;{figure.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Difficulty {figure.difficulty}
                </Typography>
              </div>
              {/* <Typography variant="body1">{formatPositions(figure)}</Typography> */}
              <Typography variant="body1">{figure.description}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default Figure;
