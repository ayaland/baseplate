import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact, sessionId }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to={`/${sessionId}`} />
      )
  )} />
);

const Protected = ({ component: Component, path, loggedIn, exact, sessionId }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props, sessionId} />
    ) : (
        <Redirect to="/login" />
      )
  )} />
);

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.id),
  sessionId: state.session.id
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
