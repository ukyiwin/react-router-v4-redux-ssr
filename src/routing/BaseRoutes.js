import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from '../views/Home.js';
import StaticPage from '../views/StaticPage.js';
import StaticPageWithDataDeps from '../views/StaticPageWithDataDeps.js';
import DynamicPage from '../views/DynamicPage.js';

function BaseRoutes({ location }) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/static" component={StaticPage} />
      <Route path="/plusDataDeps" component={StaticPageWithDataDeps} />
      <Route path="/dynamic/:id" component={DynamicPage} />
    </Switch>
  );
}

export default withRouter(connect()(BaseRoutes));
