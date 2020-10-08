import React from "react";
import { gql, useQuery } from "@apollo/client";
import {
  Card,
  CardContent,
  Typography,
  Link,
  CircularProgress,
} from "@material-ui/core";

const Positions = ({ isAll }) => {
  const GET_POSITIONS = gql`
    query {
      positions {
        id
        name
        description
        figures {
          id
          name
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_POSITIONS);

  if (loading) return <CircularProgress />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return (
    <>
      {data?.positions?.map((position) => {
        return (
          <Card
            key={position.id}
            elevation={3}
            style={{ margin: "20px auto", width: "100%" }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component={Link}
                href={`/positions/${position.id}`}
                gutterBottom
              >
                {position.name}:
              </Typography>
              <Typography variant="body1">{position.description}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default Positions;
