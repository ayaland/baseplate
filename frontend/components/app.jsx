
import React from 'react';
import {
    Redirect,
    Switch,
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SplashContainer from './splash/splash_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import HomeNavbar from './navbar/home_navbar';
import HomepageContainer from './home/homepage_container';
import NewProjectForm from './home/projects/new_project_form';
import ProjectHome from './home/projects/project_home';

const App = () => (
    <div>
        <ProtectedRoute path="/:userId" component={HomeNavbar} />
        <Switch>
            <AuthRoute exact path="/" component={SplashContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/:userId" component={HomepageContainer} />
            <ProtectedRoute exact path="/:userId/projects/new" component={NewProjectForm} />
            <ProtectedRoute exact path="/:userId/projects/:projectId" component={ProjectHome} />
        </Switch>
    </div>
);

export default App;