import React from "react";
import reactStringReplace from "react-string-replace";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Link as MaterialLink,
} from "@material-ui/core";

const FigurePage = () => {
  const figureObj = {
    name: "Angelfish",
    number: "340.",
    difficulty: "2.5",
    positions: [
      "Fishtail",
      "Front Layout",
      "Surface Front Pike",
      "Split",
      "Surface Arch",
      "Back Layout",
    ],
    description: `From a Front Layout Position, as the trunk moves downward to assume
    a Surface Front Pike Position, the buttocks, legs and feet travel
    along the surface until the hips occupy the position of the head at
    the beginning of this action. Without movement of the trunk, and
    with minimal change in water level, one leg is lifted to a Fishtail
    Position. With head and shoulders remaining vertically aligned with
    the hips, and with minimal change in water level, the horizontal leg
    is lifted in a 180° arc over the surface, passing the vertical leg,
    which moves symmetrically in the opposite direction, until a Split
    Position is assumed. The hips remain stationary as the front leg is
    lifted in a 180° arc over the surface to meet the opposite leg in a
    Surface Arch Position. With continuous foot first movement, the
    hips, chest and face surface sequentially at the same point,
    assuming a Back Layout Position as the head occupies the position of
    the hips at the beginning of this action.`,
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
        Figure
      </Typography>
      <Card elevation={3}>
        <CardContent>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" gutterBottom>
              340. Angelfish
            </Typography>
            <Typography variant="body1" gutterBottom>
              Difficulty 2.5
            </Typography>
          </div>
          <Typography variant="body1">{formatPositions(figureObj)}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default FigurePage;
