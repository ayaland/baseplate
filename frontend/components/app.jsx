
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

import ProjectIndex from './projects/project_index';
import ProjectShow from './projects/project_show';
import NewProjectForm from './projects/new_project_form';

import MessageIndex from './message_board/message_index';
import NewMessageForm from './message_board/new_message_form';
import MessageShow from './message_board/message_show';

const App = () => (
    <div>
        <ProtectedRoute path="/:anything" component={HomeNavbar} />
        <Switch>
            <AuthRoute exact path="/" component={SplashContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />

            <ProtectedRoute exact path="/:userId" component={ProjectIndex} />
            {/* Ayanote: Do not under threat of death reverse the order of these routes. It breaks. */}
            <ProtectedRoute exact path="/projects/new" component={NewProjectForm} />
            <ProtectedRoute exact path="/projects/:projectId" component={ProjectShow} />

            <ProtectedRoute exact path="/projects/:projectId/messages" component={MessageIndex} />
            <ProtectedRoute exact path="/projects/:projectId/messages/new" component={NewMessageForm} />
            <ProtectedRoute exact path="/projects/:projectId/messages/:messageId" component={MessageShow} />  
        </Switch>
    </div>
);

export default App;