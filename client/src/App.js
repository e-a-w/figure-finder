import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import HomePage from "./pages/HomePage";
import FigurePage from "./pages/FigurePage";
import Navigation from "./pages/Navigation";
import SearchPage from "./pages/SearchPage";
import TransitionPage from "./pages/TransitionPage";
import PositionPage from "./pages/PositionPage";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Navigation />
      <div id="app-container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/figure" component={FigurePage} />
          <Route exact path="/position" component={PositionPage} />
          <Route exact path="/transition" component={TransitionPage} />
          <Route exact path="/search" component={SearchPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
