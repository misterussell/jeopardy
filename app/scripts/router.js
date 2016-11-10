import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import App from './components/containers/app';

const router = (
  <Router history={hashHistory}>
    <Route path='/' component={App} />
  </Router>
);

export default router;
