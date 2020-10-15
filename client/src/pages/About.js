import { Typography, Card, CardContent, Link } from "@material-ui/core";
import React from "react";

const About = () => {
  const padding = { padding: "10px 0" };

  return (
    <div style={{ maxWidth: "800px" }}>
      <Typography
        variant="h3"
        style={{ padding: "20px 0", textAlign: "center" }}
      >
        About
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="body1" style={padding}>
            An app for artistic swimming coaches, judges and athletes to be able
            to quickly look up the details of any position or figure they need
            to reference.
          </Typography>
          <Typography variant="body1" style={padding}>
            App draws information from the{" "}
            <Link
              href="https://www.teamusa.org/usa-artistic-swimming/resources/usa-artistic-swimming-rulebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              USA Artistic Swimming Rulebook
            </Link>{" "}
            and is not affiliated with or endorsed by USA Artistic Swimming or
            any other official source.
          </Typography>
          <Typography variant="body1" style={padding}>
            View the source code on{" "}
            <Link
              href="https://github.com/e-a-w/figure-finder"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            !
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
