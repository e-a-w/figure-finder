import React from "react";
import Position from "../components/Position";
import Positions from "../components/Positions";
import { Typography } from "@material-ui/core";

const PositionPage = ({ match }) => {
  const { id } = match.params;

  return (
    <>
      {!id && (
        <Typography variant="h3" style={{ padding: "20px" }}>
          All Positions:
        </Typography>
      )}

      {id ? <Position positionId={id} /> : <Positions />}
    </>
  );
};

export default PositionPage;
