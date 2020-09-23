import React from "react";
import Related from "./Related";
import { gql, useQuery } from "@apollo/client";
import reactStringReplace from "react-string-replace";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Link as MaterialLink,
} from "@material-ui/core";

const Figure = ({ figureId }) => {
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

  const GET_FIGURE = gql`
    query($id: ID!) {
      figure(id: $id) {
        id
        name
        number
        difficulty
        description
        positions {
          id
          name
          description
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_FIGURE, {
    variables: { id: figureId },
  });

  if (loading) return <p>LOADING</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return (
    <>
      {data.figure && (
        <>
          <Card
            key={data.figure.id}
            elevation={3}
            style={{ margin: "20px auto" }}
          >
            <CardContent>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h5" gutterBottom>
                  {data.figure.number}&nbsp;{data.figure.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Difficulty {data.figure.difficulty}
                </Typography>
              </div>
              {/* <Typography variant="body1">{formatPositions(data.figure)}</Typography> */}
              <Typography variant="body1">{data.figure.description}</Typography>
            </CardContent>
          </Card>
          <Related positions={data.figure.positions} />
        </>
      )}
    </>
  );
};

export default Figure;
