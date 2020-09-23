import React from "react";
import Position from "../components/Position";
import Positions from "../components/Positions";
import { Typography } from "@material-ui/core";

const PositionPage = ({ match }) => {
  const { id } = match.params;

  return (
    <>
      <Typography variant="h2" style={{ padding: "20px" }}>
        {id ? "Position: " : "All Positions: "}
      </Typography>
      {id ? <Position positionId={id} /> : <Positions />}
    </>
  );
};

export default PositionPage;
