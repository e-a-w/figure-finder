import React from "react";
import Figure from "../components/Figure";
import { Typography } from "@material-ui/core";

const FigurePage = () => {
  return (
    <>
      <Typography variant="h2" style={{ padding: "20px" }}>
        Figure
      </Typography>
      <Figure />
    </>
  );
};

export default FigurePage;
