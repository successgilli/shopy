import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={() => <h1>gilbert is pregnant</h1>} />
      <Route path="*" component={() => <h1>not founde</h1>} />
    </Switch>
  </Router>
);

export default Routes;
