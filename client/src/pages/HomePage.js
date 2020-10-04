import React from "react";
import HomeSearchBox from "../components/HomeSearchBox";
import { Typography, Link } from "@material-ui/core";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", maxWidth: "800px" }}>
      <Typography
        variant="h1"
        style={{ padding: "20px", fontWeight: "bolder" }}
      >
        Figure Finder
      </Typography>
      <Typography variant="h6" style={{ padding: "20px" }}>
        An app for artistic swimming coaches, judges and athletes to be able to
        quickly look up the details of any position or figure they need to
        reference.
      </Typography>
      <Typography variant="body1" component="div" style={{ padding: "20px" }}>
        App draws information from the{" "}
        <Link
          href="https://www.teamusa.org/usa-artistic-swimming/resources/usa-artistic-swimming-rulebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          USA Artistic Swimming Rulebook
        </Link>
        &nbsp;and is not affiliated with or endorsed by USA Artistic Swimming or
        any other official source.
      </Typography>
      <HomeSearchBox />
    </div>
  );
};

export default HomePage;
