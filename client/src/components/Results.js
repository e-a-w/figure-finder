import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import {
  Card,
  CardContent,
  Typography,
  Link as MaterialLink,
} from "@material-ui/core";
import FormattedFigure from "./FormattedFigure";

const Results = ({ figures, format }) => {
  const { results } = useContext(AppContext);
  const [figs, setFigs] = useState([]);

  useEffect(() => {
    if (figures) {
      setFigs(figures);
    } else if (results) {
      setFigs(results);
    }
  }, [results, figures]);

  return (
    <>
      {figs?.map((figure) => {
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
              {format ? (
                <FormattedFigure figure={figure} />
              ) : (
                figure.description.slice(0, 100).concat("...")
              )}
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default Results;
