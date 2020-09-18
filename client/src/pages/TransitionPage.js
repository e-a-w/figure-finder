import React from "react";
import reactStringReplace from "react-string-replace";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Link as MaterialLink,
} from "@material-ui/core";

const TransitionPage = () => {
  const transitionObj = {
    positions: ["Surface Arch", "Back Layout"],
    description: `From the Surface Arch Position, with continuous foot first movement, the hips, chest and face surface sequentially at the same point, assuming a Back Layout Position as the head occupies the position of the hips at the beginning of this action.`,
  };

  const formatPositions = (obj) => {
    for (let i = 0; i < obj.positions.length; i++) {
      obj.description = reactStringReplace(
        obj.description,
        obj.positions[i],
        (match, i) => (
          <MaterialLink
            key={Math.random()}
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

  return (
    <>
      <Typography variant="h2" style={{ padding: "20px" }}>
        Transition
      </Typography>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Archup to Back Layout:
          </Typography>
          <Typography variant="body1">
            {formatPositions(transitionObj)}
          </Typography>
        </CardContent>
      </Card>
      <div
        style={{
          marginTop: "50px",
          height: "1px",
          width: "100%",
          borderBottom: "1px solid #3f51b5",
        }}
      ></div>
      <Typography variant="h4" style={{ padding: "20px" }}>
        Figures With This Transition:
      </Typography>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Figure name
            </Typography>
            <Typography variant="body1">Figure info</Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default TransitionPage;
