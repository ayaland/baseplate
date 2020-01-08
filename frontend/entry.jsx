import React from 'react';
import ReactDOM from 'react-dom';
// import Root from '/components/root';

let preloadedState = {};
if (window.currentUser) {
    preloadedState = {
        session: {
            currentUser: window.currentUser
        }
    };
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Root store={store} />, root);
});