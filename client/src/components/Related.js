import React, { useEffect, useState } from "react";
import { Typography, Card, CardContent, Link } from "@material-ui/core";

const RelatedPositionTransition = ({ figures, positions }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (figures) {
      setData(figures);
    } else {
      setData(positions);
    }
  }, [figures, positions]);

  return (
    <>
      <div
        style={{
          marginTop: "50px",
          marginBottom: "30px",
          height: "1px",
          width: "100%",
          borderBottom: "1px solid #3f51b5",
        }}
      ></div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto",
          gap: "50px",
        }}
      >
        <div id="col-left">
          <Typography
            variant="h4"
            style={{ padding: "20px", textAlign: "center" }}
          >
            {positions
              ? "Positions In This Figure"
              : "Figures With This Position"}
          </Typography>
          {data &&
            data.map((data) => {
              return (
                <Card
                  key={data.id}
                  elevation={3}
                  style={{ margin: "20px auto" }}
                >
                  <CardContent>
                    <Typography
                      component={Link}
                      href={`/${figures ? "figures" : "positions"}/${data.id}`}
                      variant="h5"
                      gutterBottom
                    >
                      {data.name}
                    </Typography>
                    <Typography variant="body1">{data.description}</Typography>
                  </CardContent>
                </Card>
              );
            })}
        </div>
        {/* <div id="col-right">
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
        </div> */}
      </div>
    </>
  );
};

export default RelatedPositionTransition;
