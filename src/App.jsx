import React from 'react';
import {BrowserRouter} from "react-router-dom";
import { Switch, Route } from "react-router";
import { routes } from "./routes";

const NoMatch = () => {
  return "404"
};

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {
          routes.map(({ path, component, ...rest }) => <Route exact path={path} component={component} {...rest} />)
        }
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;