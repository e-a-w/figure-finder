import React from "react";
import Figures from "../components/Figures";
import Figure from "../components/Figure";

const FigurePage = ({ match }) => {
  const { id } = match.params;
  return <>{id ? <Figure figureId={id} /> : <Figures />}</>;
};

export default FigurePage;
