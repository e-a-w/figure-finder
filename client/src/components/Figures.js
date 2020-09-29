import React from "react";
import { gql, useQuery } from "@apollo/client";
import FormattedFigure from "../components/FormattedFigure";
import {
  Card,
  CardContent,
  Typography,
  Link as MaterialLink,
} from "@material-ui/core";

const Figure = () => {
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
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return (
    <>
      {data?.figures?.map((figure) => {
        return (
          <Card
            key={figure.id}
            elevation={3}
            style={{ margin: "20px auto", width: "100%" }}
          >
            <CardContent>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  component={MaterialLink}
                  href={`/figures/${figure.id}`}
                  variant="h5"
                  gutterBottom
                >
                  {figure.number}&nbsp;{figure.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Difficulty {figure.difficulty}
                </Typography>
              </div>
              <FormattedFigure figure={figure} />
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default Figure;
