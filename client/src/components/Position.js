import React from "react";
import Related from "./Related";
import { gql, useQuery } from "@apollo/client";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from "@material-ui/core";

const Position = ({ positionId }) => {
  const GET_POSITION = gql`
    query($id: ID!) {
      position(id: $id) {
        id
        name
        description
        figures {
          id
          name
          description
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_POSITION, {
    variables: { id: positionId },
  });

  if (loading) return <CircularProgress color="secondary" />;
  if (error) return <p>{error.toString()}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <>
      {data.position && (
        <>
          <Card elevation={3} style={{ margin: "20px auto" }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {data.position.name}:
              </Typography>
              <Typography variant="body1">
                {data.position.description}
              </Typography>
            </CardContent>
          </Card>
          <Related figures={data.position.figures} />
        </>
      )}
    </>
  );
};

export default Position;
