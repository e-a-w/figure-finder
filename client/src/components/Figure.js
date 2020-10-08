import React, { useState, useEffect } from "react";
import Related from "./Related";
import FormattedFigure from "./FormattedFigure";
import { gql, useQuery } from "@apollo/client";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from "@material-ui/core";

const Figure = ({ figureId }) => {
  const [figure, setFigure] = useState({});

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

  useEffect(() => {
    setFigure(data?.figure);
  }, [data]);

  if (loading) return <CircularProgress />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return (
    <>
      {figure && (
        <>
          <Typography variant="h3" style={{ padding: "20px" }}>
            Figure: {figure.name}
          </Typography>
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
              <FormattedFigure figure={figure} />
            </CardContent>
          </Card>
          <Related positions={figure.positions} />
        </>
      )}
    </>
  );
};

export default Figure;
