
import React from 'react';
import {
    Redirect,
    Switch,
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Splash from './splash/splash';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

import SplashNavbar from './navbar/splash_navbar';
import HomeNavbar from './navbar/home_navbar';

import ProjectIndex from './project/project_index';
import ProjectShow from './project/project_show';
import NewProjectForm from './project/new_project_form';

import MessageIndex from './message_board/message_index';
import ListIndex from './todo/list_index';
import NewMessageForm from './message_board/new_message_form';
import MessageShow from './message_board/message_show';

const App = () => (
    <div className="app">
        <AuthRoute exact path="/" component={SplashNavbar} />
        <ProtectedRoute path="/:anything" component={HomeNavbar} />
        <Switch>
            <AuthRoute exact path="/" component={Splash} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />

            <ProtectedRoute exact path="/:userId" component={ProjectIndex} />
            {/* Ayanote: Do not under threat of death reverse the order of these routes. It breaks. */}
            <ProtectedRoute exact path="/projects/new" component={NewProjectForm} />
            <ProtectedRoute exact path="/projects/:projectId" component={ProjectShow} />

            <ProtectedRoute exact path="/projects/:projectId/messages" component={MessageIndex} />
            <ProtectedRoute exact path="/projects/:projectId/messages/new" component={NewMessageForm} />
            <ProtectedRoute exact path="/projects/:projectId/messages/:messageId" component={MessageShow} /> 

            <ProtectedRoute exact path="/projects/:projectId/lists" component={ListIndex} /> 
        </Switch>
    </div>
);

export default App;