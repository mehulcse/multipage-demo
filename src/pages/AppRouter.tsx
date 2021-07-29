import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import Dashboard from './Dashboard';
import Demo from './Demo';
import DemoPopup from './DemoPopup';

const AppRouter = () => (
  <Box display="flex" width="100%" height="100%">
    <Router>
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/demo" component={Demo} exact />
        <Route path="/demo-popup" component={DemoPopup} exact />
      </Switch>
    </Router>
  </Box>
);
export default AppRouter;
