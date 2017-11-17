import React, {
  PropTypes,
} from 'react';

import {
  Router,
  Route,
} from 'react-router';

const routes = {

  childRoutes: [{
    component: require('../layouts/App'),
    childRoutes: [
      require('./demo-one.js'),
    ]
  }]
};

const Routes = ({
  history,
}) => <Router history={history} routes={routes} />;

Routes.propTypes = {
  history: PropTypes.any,
};
export default Routes;