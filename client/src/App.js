import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { AppContextProvider } from "./context/AppContext";
import HomePage from "./pages/HomePage";
import FigurePage from "./pages/FigurePage";
import Navigation from "./pages/Navigation";
import SearchPage from "./pages/SearchPage";
import TransitionPage from "./pages/TransitionPage";
import PositionPage from "./pages/PositionPage";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <AppContextProvider>
      <ApolloProvider client={client}>
        <Router>
          <CssBaseline />
          <Navigation />
          <div id="app-container">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/figures" component={FigurePage} />
              <Route exact path="/figures/:id" component={FigurePage} />
              <Route exact path="/positions" component={PositionPage} />
              <Route exact path="/positions/:id" component={PositionPage} />
              <Route exact path="/transitions" component={TransitionPage} />
              <Route exact path="/search" component={SearchPage} />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    </AppContextProvider>
  );
}

export default App;
