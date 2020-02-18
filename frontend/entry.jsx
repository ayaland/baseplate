import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

// import { login, logout, signup } from './util/session_api_util';
import { createProject } from './util/project_api_util';
import { createMessage } from './util/message_api_util';
import { fetchMessages } from './util/message_api_util';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.getState = store.getState;
    // window.login = login;
    // window.logout = logout;
    // window.signup = signup;
    window.createProject = createProject;
    window.createMessage = createMessage;
    window.fetchMessages = fetchMessages;

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});