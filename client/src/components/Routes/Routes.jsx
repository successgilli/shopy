import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../../pages/home';
import uploadpage from '../../pages/uploadProducts';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/upload" component={uploadpage} />
      <Route path="*" component={() => <h1>not found</h1>} />
    </Switch>
  </Router>
);

export default Routes;
