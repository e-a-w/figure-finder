import React from "react";
import Figures from "../components/Figures";
import Figure from "../components/Figure";
import { Typography } from "@material-ui/core";

const FigurePage = ({ match }) => {
  const { id } = match.params;
  return (
    <>
      <Typography variant="h2" style={{ padding: "20px" }}>
        Figure
      </Typography>
      {id ? <Figure figureId={id} /> : <Figures />}
    </>
  );
};

export default FigurePage;
