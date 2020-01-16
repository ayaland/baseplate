import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SplashContainer from './splash/splash_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import HomepageContainer from './home/homepage_container';
import ProjectContainer from './home/projects/project_container';

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/" component={SplashContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/:userId" component={HomepageContainer} />
            <ProtectedRoute exact path="/:userId/projects/new" component={ProjectContainer} />
            <ProtectedRoute exact path="/:userId/projects/:projectId" component={ProjectContainer} />
        </Switch>
    </div>
);

export default App;