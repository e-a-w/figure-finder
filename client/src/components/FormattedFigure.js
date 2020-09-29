import React from "react";
import reactStringReplace from "react-string-replace";
import { Link } from "react-router-dom";
import { Typography, Link as MaterialLink } from "@material-ui/core";

const FormattedFigure = ({ figure }) => {
  const formatPositions = (obj) => {
    let displayedDescription = obj.description;
    if (!obj.positions) {
      return "Loading";
    }
    for (let i = 0; i < obj.positions.length; i++) {
      displayedDescription = reactStringReplace(
        displayedDescription,
        obj.positions[i].name,
        (match) => (
          <MaterialLink
            key={Math.random()}
            component={Link}
            to={`/positions/${obj.positions[i].id}`}
            style={{ fontWeight: "bold" }}
          >
            {match}
          </MaterialLink>
        )
      );
    }
    return displayedDescription;
  };
  return (
    <Typography variant="body1">{figure && formatPositions(figure)}</Typography>
  );
};

export default FormattedFigure;
