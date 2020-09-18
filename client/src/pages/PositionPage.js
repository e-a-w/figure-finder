import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const PositionPage = () => {
  return (
    <>
      <Typography variant="h2" style={{ padding: "20px" }}>
        Position
      </Typography>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Surface Arch Position:
          </Typography>
          <Typography variant="body1">
            The lower back is arched so the hips, shoulders and head are on a
            vertical line. The legs are together and at the surface.
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          gap: "50px",
        }}
      >
        <div id="col-left">
          <Typography
            variant="h4"
            style={{ padding: "20px", textAlign: "center" }}
          >
            Figures With This Position:
          </Typography>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Figure name
              </Typography>
              <Typography variant="body1">Figure info</Typography>
            </CardContent>
          </Card>
        </div>
        <div id="col-right">
          <Typography
            variant="h4"
            style={{ padding: "20px", textAlign: "center" }}
          >
            Transitions With This Position:
          </Typography>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Transition name
              </Typography>
              <Typography variant="body1">Transition info</Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PositionPage;
